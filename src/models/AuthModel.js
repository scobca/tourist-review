import BaseModel from "@/models/BaseModel";
import router from "@/router";
import store from "@/store";

class AuthModel {
    static async login(credentials) {
        const { token } = await BaseModel.request('auth/login', { body: credentials })
        this._auth(token)
    }
    static async register(credentials) {
        const { token } = await BaseModel.request('auth/signup', { body: credentials })
        this._auth(token)
    }
    static logout() {
        localStorage.removeItem('token')
        router.push({ name: 'home' })
        store.commit('updateToken', null)
    }
    static _auth(token) {
        router.push({ name: 'home' })
        localStorage.setItem('token', token)
        store.commit('updateToken', token)
    }
}

export default AuthModel;