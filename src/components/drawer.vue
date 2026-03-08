<template>
    <div class="mask" :class="{ 'mask-open': showDrawer }" @click="closeDrawer">
        <div class="drawer" :class="{ 'drawer-open': showDrawer }">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Drawer',
    data() {
        return {
            showDrawer: false
        }
    },
    created() {
        this.onDrawer = (e) => {
            this.showDrawer = e.data.show;
        }

        $falcon.on('drawer', this.onDrawer);
    },
    beforeDestroy() {
        $falcon.off('drawer', this.onDrawer);
    },
    methods: {
        closeDrawer() {
            this.showDrawer = false;
        }
    }
}
</script>

<style lang="less" scoped>
@import "../styles/common.less";
@import "../styles/md-color.less";

.mask {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
}

.mask-open {
    width: 100vw;
}

.drawer {
    position: absolute;
    right: 0;
    top: 0;
    width: 80vw;
    height: 100vh;
    padding: 0 8vh 0 18vh;
    background-color: @surface;
    border-radius: 14vh 0 0 14vh;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
}

.drawer-open {
    transform: translateX(0);
}
</style>