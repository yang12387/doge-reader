<template>
    <div class="bg" style="flex-direction: row;">
        <ButtonColumn>
            <IconButton :icon="require('../../assets/back.png')" @click="back" />
            <IconButton :icon="require('../../assets/home.png')" @click="home" />
        </ButtonColumn>
        <scroller over-scroll="50px" over-fling="50px" class="scroller">
            <text class="title">本地文件</text>
            <div v-if="nodeList === null" class="loading">
                <text class="loading-text">少女祈祷中...</text>
            </div>
            <div v-else class="file-list">
                <FileCard class="file-card" v-for="(node, index) in nodeList" :key="index" :node="node"
                    @click="open(index)" />
            </div>
        </scroller>
    </div>
</template>

<script>
import ButtonColumn from "../../components/button-column.vue";
import FileCard from "../../components/file-card.vue";
import IconButton from "../../components/icon-button.vue";

import FileManager from "../../FileManger/FileManager.js";

export default {
    name: 'filemanager',
    components: {
        ButtonColumn,
        IconButton,
        FileCard,
    },
    data() {
        return {
            manager: new FileManager(),
            nodeList: null,
        }
    },
    methods: {
        openLink(link) {
            $falcon.navTo(link);
        },
        back() {
            if (!this.manager.goBack()) {
                this.$page.finish();
            }
        },
        home() {
            this.$page.finish();
        },
        open(index) {
            let path = this.manager.chooseFile(index);
            if (path) { this.openLink(path); }
        },
        onShow() {
            this.manager.handler = list => { this.nodeList = list; }

            this._backpressed = () => {
                this.back();
            }
            this.$page.$npage.setSupportBack(false);
            this.$page.$npage.on("backpressed", this._backpressed);
        },
        onHide() {
            this.$page.$npage.setSupportBack(true);
            this.$page.$npage.off("backpressed", this._backpressed);
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../styles/common.less";
@import "../../styles/md-color.less";

.file-list {
    padding-right: 7vh;
}

.file-card {
    margin-bottom: 4vh;
}

.loading {
    flex:1;
    justify-content: center;
    align-items: center;
}

.loading-text {
    font-size: 12vh;
    color: @on-neutral;
    transform: translateY(20vh);
}
</style>