<template>
    <div class="container">
        <ButtonColumn>
            <IconButton :icon="require('../../assets/back.png?base64')" @click="back" />
        </ButtonColumn>
        <scroller style="flex: 1;" show-scrollbar="false" over-scroll="50px" over-fling="50px">
            <text class="title">设置</text>
            <SettingCard class="card" item="启用滚动翻页" desc="在阅读界面通过上下滚动浏览整个章节">
                <Toggle v-if="!loading" :defaultValue="isScroll" @click="switchMode" />
            </SettingCard>
            <SettingCard class="card" item="更大的字体" desc="将阅读器字体放大到默认的约1.2倍">
                <Toggle v-if="!loading" :defaultValue="isLarger" @click="switchFontSize" />
            </SettingCard>
            <SettingCard class="card" item="启用调试模式" desc="在阅读界面显示调试信息">
                <Toggle v-if="!loading" :defaultValue="isDebug" @click="switchDebugMode" />
            </SettingCard>
        </scroller>
    </div>
</template>

<script>
import ButtonColumn from "../../components/button-column.vue";
import IconButton from "../../components/icon-button.vue";
import SettingCard from "../../components/setting-card.vue";
import Toggle from "../../components/toggle.vue";

import Storage from "../../utils/Storage/Storage";

const storage = new Storage();

export default {
    name: 'setting',
    components: {
        ButtonColumn,
        IconButton,
        SettingCard,
        Toggle
    },
    data() {
        return {
            loading: true,
            isScroll: false,
            isLarger: false,
            isDebug: false
        }
    },
    async created() {
        this.isScroll = await storage.get('mode') === 'scroll';
        this.isLarger = await storage.get('isLarger');
        this.isDebug = await storage.get('isDebug');
        this.loading = false;
    },
    methods: {
        back() {
            this.$page.finish();
        },
        switchMode(checked) {
            storage.set('mode', checked ? 'scroll' : 'page');
        },
        switchFontSize(checked) {
            storage.set('isLarger', checked);
        },
        switchDebugMode(checked) {
            storage.set('isDebug', checked);
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../styles/md-color.less";
@import "../../styles/common.less";

.card {
    margin-right: 6vh;
}
</style>