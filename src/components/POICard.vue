<template>
    <div class="poi">
        <button class="poi__close" @click="closePoi"> закрыть </button>

        <h3 class="poi__title">
            {{ $store.state.poi.name }}
            <span class="poi__type"> {{ $store.state.poi.type }} </span>
        </h3>

        <img :src="$store.state.poi?.imageLink" alt="" class="poi__image" v-show="$store.state.poi.imageLink">

    </div>
</template>

<script>

import store from "@/store";

export default {
    name: "POICard",
    data() {
        return {
            area: store.state.poi,
        }
    },
    methods: {
        closePoi() {
            store.commit('setPoi', {})
        }
    }
}
</script>

<style scoped>

.poi {
    border-radius: 16px;
    background: white;
    position: fixed;
    inset: 16px;
    top: 80px;
    bottom: 160px;
    padding: 24px;
    font-family: "Open Sans", sans-serif;
}

.poi__title {
    font-size: 18px;
}

.poi__type {
    font-size: 14px;
    color: #858585;
}

.poi__close {
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 14px;
    color: #858585;
}

</style>