<template>
    <section class="events">
        <div class="events__container container">

            <h2 class="events__title">
                <img src="@/assets/img/stars.svg" alt="" class="events__icon">
                Найди события города
            </h2>

            <input type="text" class="events__input" placeholder="Выставки, музеи.." @input="search">

            <ul class="events__list">
                <li class="events__item event" v-for="event in events">
                    <img :src="event?.first_image?.image" alt="" class="event__image" v-if="event.first_image" @click="openEvent">
                    <h3 class="event__title"> {{ event.title }} </h3>
                    <p class="event__description" v-html="event.description"/>
                    <button class="event__map" @click="openEvent"> На карту </button>
                </li>
            </ul>

        </div>
    </section>
</template>

<script>
import EventsModel from "@/models/EventsModel";
import router from "@/router";

export default {
    name: "EventSearch",
    data() {
        return {
            events: []
        }
    },
    methods: {
        async search(e) {
            if (e.target.value.length >= 3) {
                this.events = await EventsModel.search(e.target.value);
            }
        },
        openEvent() {
            router.push({
                name: 'map',
                params: {
                    coords: this.event.place.coords
                }
            })
        }
    }
}
</script>

<style scoped>
.events {
    margin: 48px 0;
}

.event__map {
    position: absolute;
    left: 24px;
    bottom: 24px;
    font-size: 16px;
}

.event__map:hover {
    color: var(--accent)
}

.events__container {
    padding-bottom: 240px;
}

.events__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
}


.event {
    position: relative;
    width: 100%;
    background: #ededed;
    border-radius: 16px;
    padding-bottom: 32px;
}

.event__image {
    width: 100%;
    border-radius: 16px;
    height: 240px;
    object-fit: cover;
    cursor: pointer;
}

.event__title {
    padding: 24px;
    font-size: 24px;
    line-height: 1.1em;
}

.event__description {
    padding: 24px;
    line-height: 1.4em;
}

.events__input {
    height: 48px;
    font-size: 18px;
    background: #ededed;
    padding: 8px 24px;
    outline: none;
    margin-bottom: 64px;
}

.events__input::placeholder {
    font-weight: normal;
    color: #858585;
}

.events__container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

.events__icon {
    width: 22px;
    margin-right: 8px;
    transform: translateY(20%);
}

.events__title {
    font-size: 22px;
    margin-bottom: 32px;
}

.recommendation {
    overflow: hidden;
    border-radius: 8px;
}

.recommendation__image {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
    transition: .3s;
    background: #ededed;
}

.recommendation__image:hover {
    transform: scale(1.05);
}

@media screen and (min-width: 700px) {
    .events__list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width:  1250px) {
    .events__list {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (min-width: 1150px) {
    .events__container {
    }
    .events__title{
        font-size: 36px;

    }
    .events__icon {
        width: 32px;
    }
    .events__image {
        aspect-ratio: 3/1;
    }
}
</style>