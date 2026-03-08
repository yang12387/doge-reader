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
            <SettingCard class="card" item="更大的字体" desc="将字体放大到默认的约1.5倍">
                <Toggle v-if="!loading" :defaultValue="isLarger" @click="switchFontSize" />
            </SettingCard>
        </scroller>
    </div>
</template>

<script>
import ButtonColumn from "../../components/button-column.vue";
import IconButton from "../../components/icon-button.vue";
import SettingCard from "../../components/setting-card.vue";
import Toggle from "../../components/toggle.vue";

import Setting from "../../utils/Setting/Setting.js";

const setting = new Setting();

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
            isLarger: false
        }
    },
    methods: {
        back() {
            this.$page.finish();
        },
        onShow() {
            setting.getMode().then(mode => {
                this.isScroll = mode === 'scroll';
                this.loading = false;
            });
            setting.isLargerFont().then(larger => {
                this.isLarger = larger;
            });
        },
        switchMode(checked) {
            setting.setMode(checked ? 'scroll' : 'page')
        },
        switchFontSize(checked) {
            setting.setLargerFont(checked);
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