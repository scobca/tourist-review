<template>
    <section class="day-event" >
        <div class="day-event__container container">

            <h2 class="day-event__title">
                <img src="@/assets/img/fire.svg" alt="" class="recommendations__icon" >
                Событие дня
            </h2>

            <div class="day-event__info">
                <div class="day-event__card" @click="openEvent">
                    <img :src="this?.event?.event?.images[0]?.image" alt="" class=day-event__image>
                    <div class="day-event__about">
                        <h3 class="day-event__subtitle"> {{ this.event?.event?.title }} </h3>
                        <p class="day-event__description" v-html="this.event?.event?.description"></p>
<!--                        <button class="btn day-event__map" @click="openEvent"> На карту </button>-->
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import EventsModel from "@/models/EventsModel";
import router from "@/router";

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
            router.push({
                name: 'map',
                query: { place: this.event.place?.id }
            })
        }
    }
}
</script>

<style scoped>

.day-event__container {
    padding-top: 120px;
    padding-bottom: 80px;

}

.day-event__card {
    background: #ededed;
    border-radius: 16px;
    display: grid;
    cursor: pointer;
    grid-template-columns: 3fr 5fr;
}

.day-event__title {
    font-size: 22px;
}

.day-event__image {
    border-radius: 16px;
    height: 300px;
    cursor: pointer;
    aspect-ratio: 1;
    object-fit: cover;
    background: #ededed;
}

.day-event__info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    gap: 32px;
}

.day-event__about {
    position: relative;
    height: 100%;
    padding: 16px;
}

.day-event__map {
    margin-top: 16px;
    background: transparent;
    color: var(--accent);
    border: 1px solid var(--accent)
}

.day-event__subtitle {
    font-size: 32px;
    margin-bottom: 16px;
}

.day-event__subtitle::first-letter {
    text-transform: uppercase;
}

.day-event__description {
    font-size: 18px;
    line-height: 1.4em;
}

.recommendations__icon {
    width: 22px;
    margin-right: 8px;
    transform: translateY(20%);
}


@media screen and (max-width: 1150px) {
    .day-event__info {
        padding-top: 32px;
        flex-direction: column;
    }
    .day-event__image {
        width: 100%;
        height: auto;
    }

}


@media screen and (min-width: 1150px) {
    .day-event__title {
        font-size: 36px;
        margin-bottom: 32px;
    }
    .recommendations__icon {
        width: 32px;
    }
    .day-event__info {
        padding-top: 32px;
        flex-direction: row;
    }
    .day-event__card {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        gap: 32px
    }
    .day-event__about {
        padding: 0;
    }
}


</style>