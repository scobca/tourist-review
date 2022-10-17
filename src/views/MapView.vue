<template>
    <content-loader v-show="!mapLoaded"/>
    <section class="map">
        <div id="map"></div>
        <div class="map__controls">
            <form action="" class="map__form">
                <input class="map__input" type="text" placeholder="Откуда">
                <input class="map__input" type="text" placeholder="Куда">
                <input class="map__submit" type="submit" value="Построить">
            </form>
        </div>
    </section>
</template>

<script>

import MapModel from "@/models/MapModel";
import ContentLoader from '@/components/ContentLoader'
import PageHeader from "@/components/PageHeader";

export default {
    data() {
        return {
            mapLoaded: false
        }
    },
    methods: {},
    computed: {},
    mounted() {

        MapModel.init();

        MapModel.map.on('load', () => this.mapLoaded = true )

        MapModel.buildRoute({
            "desiredCoordinates": "59.939592, 30.314779",
            "points": [
                "59.956526, 30.310432",
                "59.939592, 30.314779"
            ],
            "ratio": "0",
            "filter": [
                "TOURISM",
                "POI",
                "PEDESTRIAN_AREA",
                "HISTORICAL_OBJECT",
                "RELIGIOUS_OBJECT",
                "VIEW_POINT",
                "PIECE_OF_ART",
                "CULTURAL_OBJECT",
                "MONUMENT"
            ]
        })

    },
    components: {
        PageHeader,
        'content-loader': ContentLoader
    }
}

</script>

<style scoped>

.map {
    overflow: hidden;
}

#map {
    width: 100vw;
    height: 100vh;
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

.map__controls {
    border-radius: 8px 8px 0 0;
    background: white;
    grid-gap: 8px;
    position: fixed;
    bottom: 0;
    padding:  24px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.map__form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
}

.map__input {
    width: 100%;
    outline: none;
    background: #ededed;
    border: none;
    border-radius: 8px;
    padding: 8px 24px;
    height: 40px;
    font-size: 16px;
    font-family: "IBM Plex Serif", sans-serif;
}

map__input::placeholder {
    color: #858585;
}

.map__submit {
    background: var(--accent);
    color: white;
}



</style>