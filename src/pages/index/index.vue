<template>
    <div class="container">
        <ButtonColumn>
            <IconButton :icon="require('../../assets/back.png?base64')" @click="back" />
            <IconButton :icon="require('../../assets/setting.png?base64')" @click="openLink('setting')" />
            <IconButton :icon="require('../../assets/info.png?base64')" @click="openLink('info')" />
        </ButtonColumn>
        <div style="flex: 1;">
            <div class="title-area">
                <text class="title">最近阅读</text>
                <IconButton :icon="require('../../assets/history.png?base64')" @click="openLink('history')" />
            </div>
            <div class="content">
                <div class="cards-area">
                    <text v-show="history.length === 0" class="loading" style="transform: translateY(22vh);">什么也没有喵...</text>
                    <HistoryCard v-for="(item, index) in historyList" :key="index"
                        :name="item.path.split('/').pop()" time="" @click="open(item.path, item.progress)" />
                </div>
                <MainButton class="main-button" :icon="require('../../assets/folder.png?base64')" text="本地文件"
                    :color="['#004a77', '#c2e7ff']" @click="openLink('filemanager')" />
                <MainButton class="main-button" :icon="require('../../assets/bookmark.png?base64')" text="书签"
                    :color="['#7a0f1c', '#ffd6db']" @click="openLink('favorite')" />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonColumn from "../../components/button-column.vue";
import HistoryCard from "../../components/history-card.vue";
import IconButton from "../../components/icon-button.vue";
import MainButton from "../../components/main-button.vue";

import Storage from "../../utils/Storage/Storage.js";

const storage = new Storage();

export default {
    name: 'index',
    components: {
        MainButton,
        ButtonColumn,
        IconButton,
        HistoryCard
    },
    data() {
        return {
            history: []
        }
    },
    computed: {
        historyList() {
            return this.history.slice(-2).reverse();
        }
    },
    methods: {
        openLink(link) {
            $falcon.navTo(link);
        },
        back() {
            this.$page.finish();
        },
        open(path, progress) {
            $falcon.navTo('reader', { path, progress: JSON.stringify(progress) });
        },
        onShow() {
            storage.getAllItems().then(items => {
                this.history = items;
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../styles/common.less";
@import "../../styles/md-color.less";

.title-area {
    margin-right: 6vh;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.content {
    flex: 1;
    margin-right: 6vh;
    flex-direction: row;
}

.cards-area {
    flex: 2;
    justify-content: space-between;
    padding-bottom: 3vh;
}

.main-button {
    flex: 1;
    margin-left: 7vh;
}
</style>