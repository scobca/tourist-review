<template>
    <section class="register">
        <div class="register__container container">
            <h1 class="register__title"> Регистрация </h1>
            <form action="#" class="register__form" @submit.prevent="register">
                <input type="text" placeholder="Логин" v-model="username">
                <input type="email" placeholder="Почта" v-model="email">
                <input type="password" placeholder="Пароль" v-model="password">
                <input type="submit" value="Зарегистрироваться">
            </form>
            <router-link :to="{ name: 'login'}" class="register__redirect"> Войти </router-link>
        </div>
    </section>
</template>

<script>
import AuthModel from "@/models/AuthModel";

export default {
    name: "RegisterView",
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            AuthModel.register({
                email: this.email,
                password: this.password,
                username: this.username,
            })
        }
    }
}
</script>

<style scoped>

.register__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.register__title {
    font-size: 36px;
    margin-bottom: 48px;
}

.register__form {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 16px;
    max-width: 600px;
}

.register__redirect {
    margin-top: 24px;
}

input {
    height: 48px;
    border: 1px solid #ededed;
}

input[type='submit'] {
    background: var(--accent);
    color: white;
}

input[type='submit']:hover {
    background: var(--accent-dark);
}

</style>