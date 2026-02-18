<template>
    <div class="container" style="flex-direction: row;">
        <ButtonColumn>
            <IconButton :icon="require('../../assets/back.png')" @click="back" />
            <IconButton :icon="require('../../assets/home.png')" @click="home" />
        </ButtonColumn>
        <scroller style="flex: 1;" over-scroll="50px" over-fling="50px" class="scroller">
            <div style="height:1px;" />
            <text class="title">本地文件</text>
            <text v-if="manager.loading" class="loading">少女祈祷中...</text>
            <div style="background-color:yellow;" class="file-list">
                <FileCard class="file-card" v-for="(node, index) in manager.nodeList" :key="node.name" :node="node"
                    @click="open(index)" />
            </div>
        </scroller>
    </div>
</template>

<script>
import ButtonColumn from "../../components/button-column.vue";
import FileCard from "../../components/file-card.vue";
import IconButton from "../../components/icon-button.vue";

import FileManager from "../../FileManager/FileManager.js";

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
        }
    },
    mounted() {
        this.manager._refresh();
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

            if (path) {
                this.openLink(path);
            }
        },
        onShow() {
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

.file-list {
    padding-right: 7vh;
}

.file-card {
    margin-bottom: 4vh;
}

.loading {
    font-size: 12vh;
    text-align: center;
    color: @outline;
}
</style>