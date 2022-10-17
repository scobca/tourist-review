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
                <img src="@/assets/img/logo.svg" alt="" data-aos="fade-up" data-aos-duration="700" class="welcome__illustration">
            </div>
            
            
        </div>
    </section>

    <RecommendedRoutes/>

</template>

<script>

import AOS from 'aos';
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import RecommendedRoutes from "@/components/RecommendedRoutes";

AOS.init();

export default {
    name: "HomeView",
    components: {RecommendedRoutes, PageHeader, PageFooter}
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
        padding: 240px 32px;
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

}


</style>