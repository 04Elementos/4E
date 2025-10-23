<template>
    <span class="top-left rgb">+</span>
    <span class="top-right rgb">+</span>
    <span class="bottom-left rgb">+</span>
    <span class="bottom-right rgb">+</span>
</template>

<style scoped>
span {
    position: absolute;
    font-family: monospace;
    font-weight: bold;
    font-size: 35px;
    color: white;
    line-height: 1;
    user-select: none;
}

.top-left{
    top: -19px;
    left: -12px;
}

.top-right{
    top: -19px;
    right: -12px;
}

.bottom-left{
    bottom: -19px;
    left: -12px;
}

.bottom-right{
    bottom: -19px;
    right: -12px;
}
</style>