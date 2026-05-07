<template>
    <div class="card" :class="{ 'card-active': active }" @click="$emit('click')">
        <text class="text">{{ text }}</text>
    </div>
</template>

<script>
export default {
    name: "MenuCard",
    props: {
        text: { type: String, required: true },
        active: { type: Boolean, default: false }
    }
}
</script>

<style lang="less" scoped>
@import "../styles/md-color.less";

.card {
    margin-bottom: 5vh;
    padding: 6vh 8vh;
    flex-direction: row;
    border-radius: 8vh;
    align-items: center;
    background-color: @neutral;
}

.card-active {
    background-color: @primary;
}

.text {
    color: @on-neutral;
    font-size: 10vh;
}
</style>