<template>
    <div class="error"> {{ $store.state.routeError }} </div>
    <div class="information" v-show="$store.state.route?.distanceInMeters">
        <div class="information__distance"> {{ Math.round($store.state.route.distanceInMeters) }} м </div>
        <div class="information__time"> {{ Math.round($store.state.route.timeInMinutes) }} мин </div>
        <button @click="deleteRoute" class="information__delete">
            <img src="@/assets/img/trash.svg" alt="">
        </button>
    </div>
    <div class="controls" :class="{ 'controls_options': showOptions, 'controls_search': showSearch, 'controls_circle': routeType === 'circle' }">
        <div class="suggestions">
            <div class="suggest" v-for="suggest in suggestions" @click="selectSuggest(suggest)">{{ suggest }}</div>
        </div>
        <div class="controls__desk">
            <button class="controls__nav controls__icon" @click="geolocate">
                <img src="@/assets/img/location-arrow.svg" alt="">
            </button>
            <input type="text" class="controls__search" placeholder="Поиск" v-model="query" @focus="openSearch('query')" @blur="closeSearch" @input="loadSuggestions(this.query)">
            <button class="controls__settings controls__icon" :class="{ 'controls__settings_active': showOptions }" @click="toggleOptions">
                <img src="@/assets/img/gear.svg" alt="">
            </button>
        </div>
        <div class="controls__info">
            <div class="search">
                <input type="text" class="controls__from" placeholder="Откуда" ref="fromInput" v-model="departure" @focus="openSearch('departure')" @blur="closeSearch" @input="loadSuggestions(this.departure)">
            </div>
            <div class="options">
                <form action="#" class="options__form">
                    <input id="msc" name="city" value="msk" type="radio" v-model="city" class="options__input">
                    <label for="msc" class="options__label">Москва</label>
                    <input id="spb" name="city" value="spb" type="radio" v-model="city" class="options__input">
                    <label for="spb" class="options__label">Питер</label>
                    <input id="kzn" name="city" value="kzn" type="radio" v-model="city" class="options__input">
                    <label for="kzn" class="options__label">Казань</label>
                </form>
                <form action="#" class="options__type">
                    <span class="options__title">Вид маршрута</span>
                    <div class="options__type-wrap">
                        <input id="direct" name="city" value="direct" type="radio" v-model="routeType" @change="buildRoute" class="options__input">
                        <label for="direct" class="options__label"> Прямой </label>
                        <input id="circle" name="city" value="circle" type="radio" v-model="routeType" @change="buildRoute" class="options__input">
                        <label for="circle" class="options__label"> Круговой </label>
                    </div>
                </form>
                <form action="#" class="options__ratio" v-show="routeType === 'direct'">
                    <span class="options__title">Кол-во интересных мест</span>
                    <input type="range" v-model="ratio" min="0" max="1.5" step=".5" class="options__range" @change="buildRoute">
                </form>
                <form action="#" class="options__minutes" v-show="routeType === 'circle'">
                    <span class="options__title">Продолжительность</span>
                    <input type="range" v-model="minutes" min="30" max="120" step="30" class="options__range" @change="buildRoute">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PlaceModel from "@/models/PlaceModel";
import MapModel from "@/models/MapModel";
import ModalLoader from "@/components/ModalLoader";
import { debounce } from "lodash";
import store from "@/store";

export default {
    name: "MapControls",
    components: {ModalLoader},
    data() {
        return {
            buildedRoute: {},
            showOptions: false,
            showSearch: false,
            query: '',
            departure: '',
            city: 'kzn',
            suggestions: [],
            currentField: '',
            ratio: .5,
            routeType: 'direct',
            minutes: 60
        }
    },
    watch: {
        city(newCity, oldCity) {
            this.query = '';
            this.departure = '';
            this.suggestions = [];
            this.deleteRoute();
            store.commit('setCity', newCity);
            MapModel.map.flyTo({
                center: this.city === 'msk' ? [37.617698, 55.755864] : this.city === 'spb' ? [30.315877, 59.939099] : [49.106414, 55.796127],
                zoom: 10
            })
        }
    },
    methods: {
        async buildRoute() {
            if (this.departure) {
                if ((this.routeType === 'direct' && this.query) || this.routeType === 'circle' ) {
                    this.suggestions = []
                    store.commit('setLoadingStatus', true)
                    if (this.departure === 'Моё местоположение') {
                        this.buildedRoute = await MapModel.buildRoute(this.query, MapModel.userGeolocation, this.ratio, this.routeType, this.minutes   )
                    } else {
                        this.buildedRoute = await MapModel.buildRoute(this.query, this.departure, this.ratio, this.routeType, this.minutes )
                    }
                    store.commit('setLoadingStatus', false)
                }
            }
        },
        deleteRoute() {
            MapModel.deleteRoute()
        },
        toggleOptions() {
            this.showOptions = !this.showOptions
        },
        openSearch(type) {
            this.currentField = type;
            this.showSearch = true
            this.showOptions = false;
        },
        closeSearch() {
            this.showSearch = false
        },
        geolocate() {
            MapModel.geolocateControls.trigger();
            this.departure = 'Моё местоположение';
            this.showSearch = true;
        },
        selectSuggest(suggest) {
            this.suggestions = [];
            console.log(suggest, this.currentField)
            this[this.currentField] = suggest;
            if (this.currentField === 'query') this.$refs.fromInput.focus()
            this.buildRoute();
        },
        loadSuggestions: debounce( async function (query) {
            if (query.length < 3) this.suggestions = []
            else {
                store.commit('setLoadingStatus', true)
                this.suggestions = (await PlaceModel.search(query)).suggestions.slice(0, 2);
                this.suggestions.push('Моё местоположение')
                store.commit('setLoadingStatus', false)
            }
        }, 700)
    }
}
</script>

<style scoped>

.error {
    position: fixed;
    left: 16px;
    right: 16px;
    top: 24px;
    height: 40px;
    z-index: 10;
    color: red;
    text-align: center;
    padding: 8px 16px;
    margin: 0 auto;
    pointer-events: none;
}

.controls__build {
    display: inline-block;
    background: #3887be;
    border-radius: 12px;
}

.information {
    position: fixed;
    top: 24px;
    left: 16px;
    right: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
}

.information__delete,
.information__distance,
.information__time {
    height: 40px;
    background: white;
    padding: 12px 24px;
    border-radius: 8px;
    text-align: center;
    color: #222;
    font-family: "Open Sans";
}

.information__delete {
    justify-self: flex-end;
    align-self: flex-end;
    place-self: flex-end;
}

.information__delete img {
    width: 16px;
}

.information__time i {
    margin-left: 4px;
}

.controls {
    max-width: 600px;
    position: fixed;
    bottom: 24px;
    width: 100%;
    padding: 0 16px;
    transition: transform .3s;
    transform: translateY(64px);
}

.controls__settings {
    transition: 1s;
}

.controls__settings_active {
    color: #3887be !important;
    transform: rotateZ(180deg);
}

.options, .search {
    position: absolute;
}

.controls__info {
    position: relative;
    height: 56px;
}


.controls_options {
    transform: translateY(-160px);
}

.controls_options .search {
    display: none;
}

.controls_search .options {
    display: none;
}

.controls_search .search {
    opacity: 1;
}

.controls_search {
    transform: translateY(0);
}

.controls_options .options {
    margin-top: 8px;
}

.controls_search .search {
    margin-top: 8px;
}

.controls__desk {
    height: 56px;
    width: 100%;
    padding: 4px;
    background: white;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 48px 1fr 48px;
    justify-content: center;
    align-items: center;
}

.controls__icon img {
    height: 100%;
    width: 18px;
    color: #aeaeae;
    outline: none;
}

.controls__icon img:hover {
    color: #3887be;
}

.controls__search {
    outline: none;
    height: 100%;
    width: 100%;
    background: #f8f8f8;
    text-align: center;
}



.controls__from::placeholder,
.controls__search::placeholder {
    color: #aeaeae;
    transition: .3s;
}

.controls__from:focus::placeholder,
.controls__search:focus::placeholder {
    opacity: 0;
}

.controls__from {
    outline: none;
    width: 100%;
    height: 100%;
    text-align: center;
}

.search,
.options {
    width: 100%;
    background: white;
    border-radius: 12px;
    margin-top: 24px;
    overflow: hidden;
    transition: all .3s;
}

.options__form {
}

.search {
    height: 56px;
}

.options__form {
    height: 56px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ededed;
}

.options__input {
    display: none;
}

.options__input:checked + .options__label {
    color: #3887be;
}

.options__label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    font-family: "Open Sans";
    text-align: center;
    cursor: pointer;
}

.options__label:hover {
    color: #3887be;
}

.suggestions {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 8px;
    margin-bottom: 16px;
}

/*.suggestions::after {*/
/*    content: '';*/
/*    height: 2px;*/
/*    width: 60%;*/
/*    background: #f8f8f8;*/
/*    margin: 0 auto;*/
/*}*/

.suggest {
    display: flex;
    justify-content: left;
    align-items: center;

    height: 56px;
    width: 100%;

    padding: 8px 16px;

    border-radius: 12px;
    background: #f8f8f8;
    font-family: "Open Sans";
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    cursor: pointer;
}

.suggest:hover {
    color: #3887be;
}

.options__title {
    padding-top: 14px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Open Sans";
    color: #858585;
}

.options__ratio,
.options__minutes {
    border-bottom: 1px solid #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.options__type-wrap {
    height: 56px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid #ededed;
}

</style>