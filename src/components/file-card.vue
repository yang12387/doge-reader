<template>
    <div class="wrapper" @click="$emit('click')">
        <image class="icon" :src="node.isDirectory()
            ? require('../assets/folder-icon.png')
            : require('../assets/file-icon.png')" />
        <scroller scroll-direction="horizontal">
            <text class="text">{{ node.name }}</text>
        </scroller>
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
    height: 30vh;
    background-color: @neutral;
    border-radius: 6vh;
    padding: 3vh 7vh;
    align-items: center;
    flex-direction: row;
}

.wrapper:active {
    opacity: 0.6;
}

.icon {
    width: 15vh;
    height: 15vh;
    margin-right: 6vh;
}

.text {
    font-size: 10vh;
    color: @on-neutral;
}
</style>