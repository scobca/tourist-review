<template>
    <section class="login">
        <div class="login__container container">
            <h1 class="login__title"> Вход </h1>
            <form action="#" class="login__form" @submit.prevent="login">
                <input type="email" placeholder="Почта" v-model="email" :class="{ 'input-invalid': error.param === 'email' }">
                <input type="password" placeholder="Пароль" v-model="password" :class="{ 'input-invalid': error.param === 'password' }">
                <input type="submit" value="Войти">
            </form>
            <router-link :to="{ name: 'register'}" class="login__redirect"> Зарегистрироваться </router-link>
            <span class="error"> {{ this.error }} </span>
        </div>
    </section>
</template>

<script>
import AuthModel from "@/models/AuthModel";

export default {
    data() {
      return {
          email: '',
          password: '',
          error: ''
      }
    },
    name: "LoginView",
    methods: {
        async login() {
            const data = await AuthModel.login({
                email: this.email,
                password: this.password
            });
            if (data.error) {
                this.error = data.error.msg;
            } else this.error = ''
        }
    }
}
</script>

<style scoped>

.input-invalid {
    border: 1px solid var(--accent)
}


.login {
    margin-top: 80px;
}

.error {
    margin-top: 32px;
    color: #F56060;
}

.login__container {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
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