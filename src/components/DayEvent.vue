<template>
    <section class="event" v-show="event.event">
        <div class="event__container container">

            <h2 class="event__title">
                <img src="@/assets/img/fire.svg" alt="" class="recommendations__icon" >
                Событие дня
            </h2>

            <div class="event__card" @click="openEvent">
                <img :src="event?.event?.images[0]?.image" class="event__image">
                <h3 class="event__subtitle"> {{ event?.event?.title }} </h3>
            </div>

        </div>
    </section>
</template>

<script>
import EventsModel from "@/models/EventsModel";
import router from "@/router";
import store from "@/store";

export default {
    name: "DayEvent",
    data() {
        return {
            event: {}
        }
    },
    async created() {
        this.event = await EventsModel.day()
    },
    methods: {
        openEvent() {
            store.commit('setOpenPlace', this.event.place.coords)
            router.push({ name: 'map' })
        }
    }
}
</script>

<style scoped>

.event {
    margin-top: 140px;
}

.event__card {
    cursor: pointer;
    padding: 24px;
    position: relative;
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dedede;
    border-radius: 16px;
    overflow: hidden;
}

.event__image {
    position: absolute;
    border: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    filter: brightness(60%);
    transition: all .3s;
}

.event__title {
    margin-bottom: 16px;
    font-size: 22px;
}

.event__subtitle {
    z-index: 10;
    font-family: IMBPlex, "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4em;
    letter-spacing: 0em;
    text-align: left;
    color: white;
}

.event__subtitle::first-letter {
    text-transform: uppercase;
}

</style>