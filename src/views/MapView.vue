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

export default {
    data() {
        return {
            start: 0
        }
    },
    methods: {},
    computed: {},
    mounted() {

        mapboxgl.accessToken = 'pk.eyJ1Ijoia29zYWt1cmEiLCJhIjoiY2p4eDR4am8yMDk3czNicGo4dmVmbDE2OSJ9.0eys6-WKigotzfUlrhoLLA';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/kosakura/ckjrge20p45z819qkybjdp4r0', // Specify which map style to use
            center: [30.315644, 59.938955], // Specify the starting position
            zoom: 13, // Specify the starting zoom,
            projection: 'globe'
        });

        map.on('load', () => {
            map.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [-122.483696, 37.833818],
                            [-122.483482, 37.833174],
                            [-122.483396, 37.8327],
                            [-122.483568, 37.832056],
                            [-122.48404, 37.831141],
                            [-122.48404, 37.830497],
                            [-122.483482, 37.82992],
                            [-122.483568, 37.829548],
                            [-122.48507, 37.829446],
                            [-122.4861, 37.828802],
                            [-122.486958, 37.82931],
                            [-122.487001, 37.830802],
                            [-122.487516, 37.831683],
                            [-122.488031, 37.832158],
                            [-122.488889, 37.832971],
                            [-122.489876, 37.832632],
                            [-122.490434, 37.832937],
                            [-122.49125, 37.832429],
                            [-122.491636, 37.832564],
                            [-122.492237, 37.833378],
                            [-122.493782, 37.833683]
                        ]
                    }
                }
            })
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