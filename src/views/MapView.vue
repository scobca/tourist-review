<template>
    <content-loader v-show="!mapLoaded"/>
    <section class="map">
        <div id="map"></div>
        <MapControls/>
    </section>
</template>

<script>

import MapModel from "@/models/MapModel";
import ContentLoader from '@/components/ContentLoader'
import PageHeader from "@/components/PageHeader";
import EventsModel from "@/models/EventsModel";
import MapControls from "@/components/MapControls";

export default {
    data() {
        return {
            event: null,
            mapLoaded: false
        }
    },
    props: ['coords', 'id'],
    methods: {},
    computed: {},
    async created() {

        if (this.$route.query.place) {
            this.event = await EventsModel.getEvent(this.$route.query.place)
        }

        console.log(this.event);

    },
    async mounted() {

        MapModel.init();

        MapModel.map.on('load', () => {
            this.mapLoaded = true;
        })

    },
    components: {
        MapControls,
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

</style>