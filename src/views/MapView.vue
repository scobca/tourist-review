<template>
    <section class="map">
        <div id="map"></div>
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
    mounted() {
        ymaps.ready(function() {
            const piter = new ymaps.Map(document.getElementById('map'), {
                center: [59.94, 30.32],
                zoom: 9,
                controls: []
            });
        })
    }
}

</script>

<style scoped>

body {

}

#map {
    width: 100vw;
    height: 100%;
}

.map {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}

.search {
    box-shadow: 0 0 104px 4px rgba(0, 0, 0, .5);
    position: absolute;
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