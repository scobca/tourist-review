<template>
    <content-loader v-show="!mapLoaded"/>
    <section class="map">
        <div id="map"></div>
        <div class="map__controls">
            <input class="map__input" type="text" placeholder="Куда">
        </div>
    </section>
</template>

<script>

import MapModel from "@/models/MapModel";
import ContentLoader from '@/components/ContentLoader'

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

.map__controls {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    position: absolute;
    padding:  24px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.map__input {
    width: 100%;
    outline: none;
    background: white;
    border: none;
    border-radius: 16px;
    padding: 16px 24px;
    height: 56px;
    font-size: 18px;
    font-family: "IBM Plex Serif", sans-serif;
    box-shadow: 0 0 40px 10px rgba(0, 0, 0, .2);

}


</style>