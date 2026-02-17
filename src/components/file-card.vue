<template>
    <div class="wrapper" @click="$emit('click')">
        <image class="icon" v-if="node.isDirectory()" :src="require('../assets/folder-icon.png')" />
        <image class="icon" v-else :src="require('../assets/file-icon.png')" />
        <text class="text">{{ node.name }}</text>
    </div>
</template>

<script>
export default {
    name: "FileCard",
    props: {
        node: { type: Object, required: true },
    },
};
</script>

<style lang="less" scoped>
@import "../styles/md-color.less";

.wrapper {
    height: 29.5vh;
    background-color: @neutral;
    border-radius: 6vh;
    padding: 3vh 6vh;
    align-items: center;
    flex-direction: row;
}

.wrapper:active {
    opacity: 0.6;
}

.icon {
    width: 15vh;
    height: 15vh;
    margin-right: 5vh;
}

.text {
    font-size: 10vh;
    color: @on-neutral;
}
</style>