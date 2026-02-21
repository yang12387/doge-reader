<template>
    <div class="container">
        <ButtonColumn>
            <IconButton :icon="require('../../assets/back.png')" @click="back" />
            <IconButton :icon="require('../../assets/history.png')" @click="openLink('history')" />
            <IconButton :icon="require('../../assets/info.png')" @click="openLink('info')" />
        </ButtonColumn>
        <div style="flex: 1;">
            <text class="title">最近阅读</text>
            <div class="content">
                <div class="cards-area">
                    <HistoryCard v-for="(item, index) in history.slice(0, 2)" :key="index" :item="item"
                        :name="item.path.split('/').pop()" time="" @click="open(item.path, item.progress)" />
                </div>
                <MainButton class="main-button" :icon="require('../../assets/folder.png')" text="本地文件"
                    :color="['#004a77', '#c2e7ff']" @click="openLink('filemanager')" />
                <MainButton class="main-button" :icon="require('../../assets/heart.png')" text="书签"
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

import Setting from "../../utils/Setting/Setting.js";

const setting = new Setting();

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
            setting.getAllItems().then(items => {
                this.history = items;
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../styles/common.less";
@import "../../styles/md-color.less";

.content {
    flex: 1;
    margin-right: 12vh;
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