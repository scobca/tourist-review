<template>
    <div class="map__controls">
        <form action="" class="map__form">
            <input class="map__input" type="text" placeholder="Куда" @input="searchPlace" v-model="query">
            <!--            <input class="map__submit" type="submit" value=">">-->
        </form>
        <ul class="suggestions">
            <li class="suggest" v-for="suggest in suggestions" @click="findPlace(suggest)"> {{ suggest }} </li>
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
            query: '',
            suggestions: []
        }
    },
    methods: {
        async searchPlace() {
            if (this.query.length < 3) return false
            if( this.query.length === 0) this.suggestions = []
            this.suggestions = (await PlaceModel.search(this.query.trim())).suggestions
        },
        async findPlace(name) {

            const placeCoords = await PlaceModel.getByName(name)

            this.query = ''
            this.suggestions = []

            MapModel.buildRoute(`${placeCoords.x}, ${placeCoords.y}`)

        }
    }
}
</script>

<style scoped>
.map__submit {
    background: var(--accent);
    color: white;
    height: 100%;
    display: flex;
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
    grid-template-columns: 1fr;
    grid-template-rows: 48px;
    grid-gap: 6px;
}

.suggestions {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    max-height: 30vh;
    overflow: scroll;
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