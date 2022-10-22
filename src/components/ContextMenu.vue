<template>
    <div class="context">
        <button class="context__button"> Отсюда </button>
        <button class="context__button"> Сюда  </button>
    </div>
</template>

<script>
export default {
    name: "ContextMenu"
}
</script>

<style scoped>

.context {
    border-radius: 16px;
    background: white;
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px;
}

.context__button {
    text-align: center;
}

</style>