<template>
    <div class="container" style="flex-direction: row;">
        <ButtonColumn>
            <IconButton :icon="require('../../assets/back.png')" @click="back" />
            <IconButton :icon="require('../../assets/delete.png')" @click="clear" />
        </ButtonColumn>
        <scroller style="flex: 1;" over-scroll="50px" over-fling="50px" class="scroller">
            <text class="title">书签</text>
            <text v-show="favorite.length === 0" class="loading">什么也没有喵...</text>
            <div class="list">
                <HistoryCard class="card" v-for="(item, index) in favorite" :key="index" :item="item"
                    :name="item.path.split('/').pop()" :time="item.time" @click="open(item.path, item.progress)" />
            </div>
        </scroller>
    </div>
</template>

<script>
import ButtonColumn from "../../components/button-column.vue";
import HistoryCard from "../../components/history-card.vue";
import IconButton from "../../components/icon-button.vue";

import Setting from "../../utils/Setting/Setting.js";

const setting = new Setting();

export default {
    name: 'Favorite',
    components: {
        ButtonColumn,
        IconButton,
        HistoryCard,
    },
    data() {
        return {
            favorite: [],
        }
    },
    methods: {
        back() {
            this.$page.finish();
        },
        clear() {
            setting.clearItems('favorite').then(() => {
                this.favorite = [];
            });
        },
        open(path, progress) {
            $falcon.navTo('reader', { path, progress: JSON.stringify(progress) });
        },
        onShow() {
            setting.getAllItems('favorite').then(items => {
                this.favorite = items;
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../styles/common.less";
@import "../../styles/md-color.less";

.list {
    padding-right: 7vh;
    flex-direction: column-reverse;
}

.card {
    margin-bottom: 4vh;
}
</style>