<template>
    <section class="map">
        <input type="text" class="search" placeholder="Поиск">
    </section>
</template>

<script>


export default {
    data() {
        return {

        }
    },
    methods: {},
    computed: {},
}

</script>

<style scoped>

body {
}

.map {
    position: relative;
    background: white url("@/assets/img/map.jpg") no-repeat;
    background-size: cover;
    padding: 24px;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}

.search {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    bottom: 24px;
    outline: none;
    background: white;
    border: none;
    border-radius: 16px;
    padding: 16px 24px;
    height: 60px;
    font-size: 18px;
    font-family: "IBM Plex Serif", sans-serif;
}

.search::placeholder {

}

</style>