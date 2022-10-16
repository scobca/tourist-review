<template>
    <section class="login">
        <div class="login__container container">
            <h1 class="login__title"> Вход </h1>
            <form action="#" class="login__form" @submit.prevent="login">
                <input type="email" placeholder="Почта" v-model="email">
                <input type="password" placeholder="Пароль" v-model="password">
                <input type="submit" value="Войти">
            </form>
            <router-link :to="{ name: 'register'}" class="login__redirect"> Зарегистрироваться </router-link>
        </div>
    </section>
</template>

<script>
import AuthModel from "@/models/AuthModel";

export default {
    data() {
      return {
          email: '',
          password: ''
      }
    },
    name: "LoginView",
    methods: {
        login() {
            AuthModel.login({
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style scoped>

.login {
    margin-top: 80px;
}

.login__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.login__title {
    font-size: 36px;
    margin-bottom: 48px;
}

.login__form {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 16px;
    max-width: 600px;
}

.login__redirect {
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