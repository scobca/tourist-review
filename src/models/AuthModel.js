import BaseModel from "@/models/BaseModel";

class AuthModel {
    static async login(credentials) {
        const resp = await BaseModel.request('auth/login', { data: credentials })
    }
    static async register(credentials) {
        const resp = await BaseModel.request('auth/signup', { data: credentials })
    }
}

export default AuthModel;