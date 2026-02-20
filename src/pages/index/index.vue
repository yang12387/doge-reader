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
                <div style="flex: 2;" />
                <MainButton class="main-button" :icon="require('../../assets/folder.png')" text="本地文件" :color="['#004a77', '#c2e7ff']" @click="openLink('filemanager')" />
                <MainButton class="main-button" :icon="require('../../assets/heart.png')" text="收藏" :color="['#7a0f1c', '#ffd6db']" @click="openLink('favorites')" />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonColumn from "../../components/button-column.vue";
import IconButton from "../../components/icon-button.vue";
import MainButton from "../../components/main-button.vue";

export default {
    name: 'index',
    components: {
        MainButton,
        ButtonColumn,
        IconButton,
    },
    data() { },
    methods: {
        openLink(link) {
            $falcon.navTo(link);
        },
        back() {
            this.$page.finish();
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

.main-button {
    flex: 1;
    margin-left: 7vh;
}


</style>