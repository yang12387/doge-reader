<template>
    <div class="button" :style="{ backgroundColor: color[0] }" @click="$emit('click')">
        <image resize="contain" class="icon" :src="icon"/>
        <text class="text" :style="{ color: color[1] }">{{ text }}</text>
    </div>
</template>

<script>
export default {
    name: 'MainButton',
    props: {
        text: { type: String, required: true },
        icon: { type: String, required: true },
        color: { type: Array, required: true},
    },
}
</script>

<style lang="less" scoped>
.button {
    border-radius: 14vh;
    justify-content: center;
    align-items: center;
}

.button:active {
    opacity: 0.6;
}

.icon {
    width: 100%;
    height:40%;
    margin-bottom: 5%;
}

.text {
    font-size: 9.5vh;
}
</style>