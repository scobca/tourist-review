<template>
    <header class="header">
        <div class="header__container container">
            <router-link :to="{ name: 'home' }" class="header__logo logo">
                <img src="@/assets/img/full-logo.svg" class="header__logo logo__image_full">
                <img src="@/assets/img/logo.svg" alt="Турист.ру" class="header__logo logo__image_short">
            </router-link>
            <button class="header__burger" @click="toggleMenu">
                <img src="@/assets/img/bars.svg" alt="">
            </button>
            <nav class="header__menu menu" :class="{ 'header__menu_show': this.$store.state.menu }">
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link :to="{ name: 'home' }" class="menu__link"> Главная </router-link>
                    </li>
                    <li class="menu__item">
                        <router-link :to="{ name: 'map' }" class="menu__link"> Карта </router-link>
                    </li>
                    <template v-if="this.$store.state.token">
                        <li class="menu__item">
                            <router-link :to="{ name: 'home' }" @click="logout" class="menu__link"> Выйти </router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="menu__item">
                            <router-link :to="{ name: 'login' }" class="menu__link"> Войти </router-link>
                        </li>
                        <li class="menu__item">
                            <router-link :to="{ name: 'register' }" class="menu__link"> Зарегистрироваться </router-link>
                        </li>
                    </template>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import router from "@/router";
import AuthModel from "@/models/AuthModel";

export default {
    name: "PageHeader",
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        },
        logout() {
            AuthModel.logout();
        }
    },
    mounted() {
        router.beforeEach((to, from) => {
            this.$store.commit('closeMenu')
        })
    }
}
</script>

<style scoped>

@font-face {
    font-family: 'Open Sans';
    src: url("@/assets/fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf");
    font-display: swap;
}

.header {
    height: 70px;
    /*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);*/
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
    /*border-bottom: 1px solid #ededed;*/
    z-index: 100;
    width: 100%;
    background: white;
    font-family: "Open Sans";
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px;
}

.header__logo {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.logo__image_full {
    display: none;
}

router-link:hover .logo__text {
    color: black !important;
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
    .logo__image_full {
        display: block;
    }
    .logo__image_short {
        display: none;
    }
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