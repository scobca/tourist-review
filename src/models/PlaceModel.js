import BaseModel from "@/models/BaseModel";

class PlaceModel {
    static async search(q, loc='spb') {
        return await BaseModel.request('map/suggest?' + new URLSearchParams({ q, loc }))
    }
    static async getByName(q, loc='spb') {
        return await BaseModel.request('map/location?' + new URLSearchParams({ q, loc }))
    }
    static async getById(id) {
        return await BaseModel.request(`place?id=${id}`)
    }
}

export  default PlaceModel