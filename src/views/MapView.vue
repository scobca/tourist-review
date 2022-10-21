<template>
    <content-loader v-show="!mapLoaded"/>
    <section class="map">
        <div id="map"/>
        <MapControls/>
        <ModalLoader v-show="$store.state.dataLoading"/>
        <POICard v-show="store.state.poi.name"/>
    </section>
</template>

<script>

import MapModel from "@/models/MapModel";
import ContentLoader from '@/components/ContentLoader'
import PageHeader from "@/components/PageHeader";
import EventsModel from "@/models/EventsModel";
import MapControls from "@/components/MapControls";
import PlaceModel from "@/models/PlaceModel";
import ModalLoader from "@/components/ModalLoader";
import POICard from "@/components/POICard";
import store from "@/store";

export default {
    data() {
        return {
            store,
            place: null,
            event: null,
            mapLoaded: false
        }
    },
    methods: {
        async searchById(id) {
            this.place = await PlaceModel.getById(id)
            if (this.place?.coords) {
                if (MapModel.userGeolocation) {
                    MapModel.buildRoute(`${this.place.coords.lat}, ${this.place.coords.lon}`)
                }
            }
            // this.$router.replace({'query': null});
        }
    },
    computed: {},
    async created() {
        const id =this.$route.query?.place
        if (id)  this.searchById(id)

    },
    async mounted() {
        MapModel.init();
        MapModel.map.on('load', () => {
            this.mapLoaded = true;
        })
    },
    components: {
        POICard,
        ModalLoader,
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