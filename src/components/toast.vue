<template>
    <div :class="{'toast-show': show}" class="toast">
        <text class="toast-text">{{ text }}</text>
    </div>
</template>

<script>
export default {
    name: 'Toast',
    props: {
        text: { type: String, required: true },
        show: { type: Boolean, default: false }
    },
}
</script>

<style lang="less" scoped>
@import "../styles/md-color.less";

.toast {
    position: fixed;
    width: 100%;
    height: 20vh;
    left: 0;
    bottom: 0;
    background-color: @primary;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
    transition:  transform 0.3s ease-in-out;
}

.toast-show {
    transform: translateY(0);
}

.toast-text {
    color: @on-primary;
    font-size: 8vh;
}
</style>
