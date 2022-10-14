<template>
    <div class="header">
        <h1>Турист.ру</h1>
    </div>

    <div class="menu">
        <p class="button">Карта</p>
        <p class="button">Аренда</p>
        <p class="button">Аккаунт</p>
    </div>
    <div class="discriprion">
        <div class="h_wi">
            <h2>Что такое "Турист.ру"?</h2>
            <p>Проект для гостей города Санкт-Петербург.
                Мы предлагаем ленту актуальных событий, карту для построения маршрута, поиск экскурсий в городе,
                события дня и многое другое.
            </p>
        </div>




        <div class="h_wwc">
            <h2>Что умеет "Турист.ру"?</h2>
            <ul>
                <li>Создание интересного маршрута с учетом достопримечательностей и просто красивых мест</li>
                <li>Посуточная или долгосрочная аренда жилья в городе</li>
                <li>Интерактивная лента событий города</li>
            </ul>
        </div>
    </div>
</template>

<script>

import AOS from 'aos';

AOS.init();

export default {
    name: "HomeView"
}
</script>

<style scoped>

</style>