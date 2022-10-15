<template>
    <header class="header">
        <div class="header__container container">
            <router-link :to="{ name: 'home' }" class="header__logo">
                <img src="@/assets/img/logo.svg" alt="Турист.ру" class="header__logo">
            </router-link>
            <button class="header__burger" @click="toggleMenu">
                <img src="@/assets/img/bars.svg" alt="">
            </button>
            <nav class="header__menu menu" :class="{ 'header__menu_show': this.menu }">
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link :to="{ name: 'home' }" class="menu__link"> Войти </router-link>
                    </li>
                    <li class="menu__item">
                        <router-link :to="{ name: 'home' }" class="menu__link"> Зарегистрироваться </router-link>
                    </li>
                    <li class="menu__item">
                        <router-link :to="{ name: 'home' }" class="menu__link"> Поддрежка </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "PageHeader",
    data() {
        return {
            menu: false
        }
    },
    methods: {
        toggleMenu() {
            this.menu = !this.menu
        }
    }
}
</script>

<style scoped>

.header {
    height: 70px;
    /*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);*/
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
    /*border-bottom: 1px solid #ededed;*/
    z-index: 100;
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px;
}

.header__logo {
    height: 100%;
}

.header__burger {
    z-index: 100;
}

.header__menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70vw;
    padding: 86px 26px;
    background: white;
    z-index: 10;
    transform: translateX(100%);
    transition: all .3s;
}

.header__menu_show {
    box-shadow: 0 0 100vw 100vw rgba(0, 0, 0, .5);
    transform: translateX(0);
}


.menu__list {
    size: 18px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
@media screen and (min-width: 1150px) {
    .header__burger {
        display: none;
    }
    .header__menu {
        position: relative;
        background: transparent;
        box-shadow: none;
        width: auto;
        padding: 0;
        transform: none;
    }
    .header__menu .menu__list {
        flex-direction: row;
    }
}

</style>