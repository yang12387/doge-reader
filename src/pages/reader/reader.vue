<template>
    <div>
        <div class="container">
            <ButtonColumn>
                <IconButton :icon="require('../../assets/back.png')" @click="back" />
                <IconButton :icon="require('../../assets/love.png')" @click="love" />
                <IconButton :icon="require('../../assets/menu.png')" @click="switchMenu" />
            </ButtonColumn>
            <div class="loading-area" v-if="loading">
                <text class="loading">少女祈祷中...</text>
            </div>
            <div style="flex: 1;" v-else-if="reader.mode === 'page'">
                <text class="content">{{ reader.content }}</text>
                <div class="prev" @click="prev" />
                <div class="next" @click="next" />
            </div>
            <scroller style="flex: 1;" v-else-if="reader.mode === 'scroll'" over-scroll="50px" over-fling="50px">
                <div style="min-height: 100vh;">
                    <text ref="target" class="content">{{ reader.content }}</text>
                    <div class="button-line">
                        <IconButton :icon="require('../../assets/back.png')" @click="prevChapter" />
                        <IconButton :icon="require('../../assets/next.png')" @click="nextChapter" />
                    </div>
                </div>
            </scroller>
        </div>
        <div class="mask" :class="{ 'mask-open': showMenu }" @click="switchMenu" />
        <div v-if="!loading" class="menu" :class="{ 'menu-open': showMenu }">
            <scroller class="menu-scroller">
                <text class="lower-title">章节</text>
                <MenuCard :text="reader.book.getChapterName(index)" v-for="index in reader.book.getChapterCount() - 1"
                    :key="index" :active="index === reader.chapterIndex" @click="loadChapter(index)" />
            </scroller>
        </div>
        <Toast text="书签已保存" :show="toastShow" />
    </div>
</template>

<script>
const env = $falcon.env;
const w = env.deviceWidth;
const h = env.deviceHeight;

import ButtonColumn from "../../components/button-column.vue";
import IconButton from "../../components/icon-button.vue";
import MenuCard from "../../components/menu-card.vue";
import Toast from "../../components/toast.vue";

import BookParser from '../../utils/BookParser/BookParser.js';
import Reader from "../../utils/Reader/Reader.js";
import Setting from "../../utils/Setting/Setting.js";

const setting = new Setting();

export default {
    name: 'reader',
    components: {
        ButtonColumn,
        IconButton,
        MenuCard,
        Toast,
    },
    data() {
        return {
            loading: true,
            showMenu: false,
            reader: null,
            toastShow: false,
        }
    },
    methods: {
        back() {
            setting.addItem(this.$page.options.path, this.reader.getProgress()).then(() => {
                this.$page.finish();
            })
        },
        love() {
            setting.addItem(this.$page.options.path, this.reader.getProgress(), 'favorite').then(() => {
                this.toastShow = true;
                setTimeout(() => {
                    this.toastShow = false;
                }, 1000);
            });
        },
        prev() {
            this.reader.prev();
        },
        next() {
            this.reader.next();
        },
        prevChapter() {
            this.reader.prevChapter();
        },
        nextChapter() {
            this.reader.nextChapter();
            this.$page.$dom.scrollToElement(this.$refs['target'], { offset: 0 })
        },
        switchMenu() {
            this.showMenu = !this.showMenu;
        },
        loadChapter(index) {
            this.reader.loadChapter(index);
            this.showMenu = false;
        },
        onShow() {
            const parser = new BookParser(this.$page.options.path);
            parser.load().then(book => {
                this.reader = new Reader(book, {
                    mode: 'page',
                    fontSize: 10,
                    lineHeight: 14,
                    viewportWidth: w - 0.39 * h,
                    viewportHeight: h
                });

                if (this.$page.options.progress) {
                    this.reader.setProgress(JSON.parse(this.$page.options.progress));
                } else {
                    setting.getItem(this.$page.options.path).then(progress => {
                        if (progress) {
                            this.reader.setProgress(progress);
                        }
                    });
                }

                this.loading = false;
            });

            this._backpressed = () => {
                this.back();
            }
            this.$page.$npage.setSupportBack(false);
            this.$page.$npage.on("backpressed", this._backpressed);
        },
        onHide() {
            this.$page.$npage.setSupportBack(true);
            this.$page.$npage.off("backpressed", this._backpressed);
        },
    }
}
</script>

<style lang="less" scoped>
@import "../../styles/common.less";
@import "../../styles/md-color.less";

.loading-area {
    flex: 1;
    justify-content: center;
    align-items: center;
}

.content {
    width: 100%;
    font-size: 10vh;
    line-height: 14vh;
    margin-top: 1.5vh;
    color: @on-neutral;
}

.prev,
.next {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
}

.next {
    left: 50%;
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
}

.mask-open {
    width: 100vw;
}

.menu {
    position: absolute;
    right: 0;
    top: 0;
    width: 80vw;
    height: 100vh;
    padding: 8vh 8vh 8vh 18vh;
    background-color: @surface;
    border-radius: 14vh 0 0 14vh;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
}

.menu-open {
    transform: translateX(0);
}

.menu-scroller {
    height: 100%;
}

.lower-title {
    margin-bottom: 6vh;
    font-size: 10vh;
    color: @outline;
}

.button-line {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 8vh 8vh 8vh 0;
}
</style>