<template>
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
export default {
    name: "RecommendedRoutes"
}
</script>

<style scoped>

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

@media screen and (min-width: 1150px) {
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