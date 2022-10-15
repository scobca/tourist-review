<template>

    <section class="welcome">
        <div class="welcome__container container">

            <div class="welcome__content">
                <h1 class="welcome__title"> Что такое "Турист.ру"? </h1>
                <p class="welcome__about"> Приложение о Санкт-Петербурге, делящееся актуальными мероприятиями, событиями дня, гибкими маршрутами, экскурсиями и различным жильем. </p>
                <router-link class="welcome__start btn" :to="{ name: 'map' }"> Начать путешествия </router-link>
            </div>

            <div class="welcome__illustrations" data-aos="fade-up" data-aos-duration="700">
                <img src="@/assets/img/logo.svg" alt="" class="welcome__illustration">
                <img src="@/assets/img/logo.svg" alt=""  data-aos="fade-up" data-aos-duration="700" class="welcome__illustration">
            </div>
            
            
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
                    <li class="recommendations__item recommendation" data-aos="zoom-in">
                        <img src="@/assets/img/kazan.jpg" alt="" class="recommendation__image">
                    </li>
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/petergof.jpg" alt=""  data-aos="zoom-in" class="recommendation__image">
                    </li>
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/ermitaj.jpg" alt=""  data-aos="zoom-in" class="recommendation__image">
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
                        <img src="@/assets/img/model.webp" alt="" data-aos="zoom-in" class="recommendation__image">
                    </li>
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/house.webp" alt="" data-aos="zoom-in" class="recommendation__image">
                    </li>
                    <li class="recommendations__item recommendation">
                        <img src="@/assets/img/forest.webp" alt="" data-aos="zoom-in" class="recommendation__image">
                    </li>
                </ul>
            </section>

        </div>
    </section>

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
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
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

.welcome__illustrations {
    display: none;
    width: 100%;
    height: 100%;
}

.welcome__illustration {
    position: absolute;
}

.welcome__illustration:nth-child(1) {
    width: 200px;
    z-index: 10;
    transform: translate(40%, 10%);
}

.welcome__illustration:nth-child(2) {
    width: 300px;
}

@media screen and (min-width: 700px) {
    .welcome__title {
        font-size: 56px;
    }
}

@media screen and (min-width: 1150px) {
    .welcome__container {
        padding: 180px 32px;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
    }
    .welcome__title {
        text-align: left;
    }
    .welcome__about {
        width: 400px;
    }
    .welcome__start {
        padding: 12px 24px;
        width: auto;
    }
    .welcome__illustrations {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .recommendations__container {
        gap: 104px;
    }
    .recommendations__subtitle {
        font-size: 36px;
        margin-bottom: 32px;
    }
    .recommendations__icon {
        width: 32px;
    }
    .recommendation__image {
        aspect-ratio: 3/1;
    }
}


</style>