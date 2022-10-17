<template>
    <section class="register">
        <div class="register__container container">
            <h1 class="register__title"> Регистрация </h1>
            <form action="#" class="register__form" @submit.prevent="register">
                <input type="text" placeholder="Логин" v-model="username" :class="{ 'input-invalid': error.param === 'username' }">
                <input type="email" placeholder="Почта" v-model="email" :class="{ 'input-invalid': error.param === 'email' }">
                <input type="password" placeholder="Пароль" v-model="password" :class="{ 'input-invalid': error.param === 'password' }">
                <input type="submit" value="Зарегистрироваться">
            </form>
            <router-link :to="{ name: 'login'}" class="register__redirect"> Войти </router-link>
            <span class="error"> {{ error.msg }} </span>
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
            password: '',
            error: {}
        }
    },
    methods: {
        async register() {
            const data = await AuthModel.register({
                email: this.email,
                password: this.password,
                username: this.username,
            })
            if (data.error) {
                this.error = data.error
            } else this.error = {}
        }
    }
}
</script>

<style scoped>

.input-invalid {
    border: 1px solid var(--accent)
}

.error {
    margin-top: 32px;
    color: #F56060;
}

.register {
    margin-top: 80px;
}

.register__container {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
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