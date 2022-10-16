<template>
    <section class="map">
        <div id="map"></div>
        <div class="map__controls">
            <input class="map__input" type="text" placeholder="Куда">
        </div>
    </section>
</template>

<script scoped>

import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapModel from "@/models/MapModel";

mapboxgl.accessToken = 'pk.eyJ1Ijoia29zYWt1cmEiLCJhIjoiY2p4eDR4am8yMDk3czNicGo4dmVmbDE2OSJ9.0eys6-WKigotzfUlrhoLLA';

export default {
    data() {
        return {
            start: 0
        }
    },
    methods: {},
    computed: {},
    mounted() {

        const map = new mapboxgl.Map({
            container: 'map',
            attributionControl: false,
            language: 'ru',
            maxPitch: 1,
            style: 'mapbox://styles/kosakura/ckjrge20p45z819qkybjdp4r0', // Specify which map style to use?
            center: [30.315644, 59.938955], // Specify the starting position
            zoom: 13, // Specify the starting zoom,
            projection: 'globe'
        });

        MapModel.buildRoute(map, {
            "desiredCoordinates": "59.939592, 30.314779",
            "locale": "ru",
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
    z-index: 10000000;
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
    z-index: 10000000;
    box-shadow: 0 0 40px 10px rgba(0, 0, 0, .2);

}


</style>