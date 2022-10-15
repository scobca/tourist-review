<template>
    <PageHeader/>

    <section class="welcome">
        <div class="welcome__container container">

            <h1 class="welcome__title"> Что такое "Турист.ру"? </h1>

            <p class="welcome__about">
                Приложение о Санкт-Петербурге, делящееся актуальными мероприятиями, событиями дня, гибкими маршрутами, экскурсиями и различным жильем.
            </p>

            <router-link class="welcome__start btn" :to="{ name: 'map' }"> Начать путешествия </router-link>

        </div>
    </section>

    <section class="recommendations">
        <div class="recommendations__container container">

            <section class="recommendations__popular">
                <h2 class="recommendations__subtitle">
                    <img src="@/assets/img/fire.svg" alt="" class="recommendations__icon">
                    Популярные маршруты
                </h2>
                <ul class="recommendations__list">
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/kazan.jpg" alt="" class="recommendation__image">
                    </li>
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/petergof.jpg" alt="" class="recommendation__image">
                    </li>
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/ermitaj.jpg" alt="" class="recommendation__image">
                    </li>
                </ul>
            </section>

            <section class="recommendations__new">
                <h2 class="recommendations__subtitle">
                    <img src="@/assets/img/stars.svg" alt="" class="recommendations__icon">
                    Что-то новое
                </h2>
                <ul class="recommendations__list">
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/model.webp" alt="" class="recommendation__image">
                    </li>
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/house.webp" alt="" class="recommendation__image">
                    </li>
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/forest.webp" alt="" class="recommendation__image">
                    </li>
                </ul>
            </section>

        </div>
    </section>

    <PageFooter/>

</template>

<script>

import AOS from 'aos';
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";

AOS.init();

export default {
    name: "HomeView",
    components: {PageHeader, PageFooter}
}
</script>

<style scoped>

.welcome {
    margin-top: 60px;
}

.welcome__title {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 8vw;
    line-height: 34px;
    white-space: nowrap;
}

.welcome__about {
    margin-top: 26px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    padding: 24px;
    background: #ededed;
    border-radius: 16px;
}

.welcome__start {
    margin-top: 16px;
    width: 100%;
    text-align: center;
}

.recommendations {
    margin: 48px 0;
}

.recommendations__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.recommendations__icon {
    width: 22px;
    margin-right: 8px;
    transform: translateY(20%);
}

.recommendations__subtitle {
    font-size: 18px;
    margin-bottom: 24px;
}

.recommendations__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
}

.recommendation__image {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
}

</style>