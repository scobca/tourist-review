<template>
    <div class="map__controls">
        <form action="" class="map__form">
            <input class="map__input" type="text" placeholder="Куда" @input="searchPlace" v-model="query">
            <button class="map__delete " @click.prevent="deleteRoute"> &cross; </button>
            <input class="map__input map__geo" type="text" placeholder="Откуда" @input="searchGeo" v-model="geo">
            <!--            <input class="map__submit" type="submit" value=">">-->
        </form>
        <ul class="suggestions">
            <li class="suggest" v-for="suggest in suggestions" @click="findPlace(suggest)"> {{ suggest }} </li>
        </ul>
        <ul class="suggestions">
            <li class="suggest" v-for="suggest in geolocations" @click="findGeo(suggest)"> {{ suggest }} </li>
        </ul>
    </div>
</template>

<script>
import PlaceModel from "@/models/PlaceModel";
import MapModel from "@/models/MapModel";

export default {
    name: "MapControls",
    data() {
        return {
            geo: '',
            query: '',
            suggestions: [],
            geolocations: []
        }
    },
    methods: {
        deleteRoute() {
            this.geo = ''
            this.query = ''
            this.suggestions = []
            this.geolocations = []
            MapModel.deleteRoute()
        },
        async searchPlace() {
            if (this.query.length < 3) return false
            if( this.query.length === 0) this.suggestions = []
            this.geolocations = []
            this.suggestions = (await PlaceModel.search(this.query.trim())).suggestions
        },
        async searchGeo() {
            if (this.geo.length < 3) return false
            if( this.geo.length === 0) this.geolocations = []
            this.suggestions = []
            this.geolocations = (await PlaceModel.search(this.geo.trim())).suggestions
            this.geolocations.unshift('Моё местоположение')
        },
        async findGeo(name) {
            this.geo = name;
            this.suggestions = []
            this.geolocations = []

             const geo = this.geo === 'Моё местоположение' ? MapModel.userGeolocation : this.geo;

            if (this.geo && this.query) {
                MapModel.buildRoute(
                    this.query,
                    geo
                )
            }


        },
        async findPlace(name) {
            this.query = name
            this.suggestions = []
            this.geolocations = []

            const geo = this.geo === 'Моё местоположение' ? MapModel.userGeolocation : this.geo;

            if (this.geo && this.query) {
                MapModel.buildRoute(
                    this.query,
                    geo
                )
            }

            //
            // if (MapModel.userGeolocation.lat && MapModel.userGeolocation.lon) {
            //     MapModel.buildRoute(name)
            // } else MapModel.buildRoute(name, this.geo)

        }
    }
}
</script>

<style scoped>
.map__geo {
    grid-column: 1/-1;
}

.map__delete {
    background: var(--accent);
    color: white;
    height: 100%;
    display: flex;
    border-radius: 8px  ;
    justify-content: center;
    align-items: center;
}


.map__controls {
    border-radius: 8px 8px 0 0;
    background: transparent;
    grid-gap: 8px;
    position: fixed;
    top: 0;
    padding:  16px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.map__form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 48px;
    grid-template-rows: 48px 48px;
    grid-gap: 6px;
}

.suggestions {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    max-height: 30vh;
    overflow-y: scroll;
}

.suggest {
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    text-align: left;
    cursor: pointer;
    background: white;
}

.suggest:hover {
    background: #ededed;
}

.map__input {
    width: 100%;
    outline: none;
    background: white;
    border: none;
    border-radius: 8px;
    padding: 8px 24px;
    height: 100%;
    font-size: 16px;
    font-family: "IBM Plex Serif", sans-serif;
}

.map__input::placeholder {
    color: #858585;
}
</style>