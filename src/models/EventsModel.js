import BaseModel from "@/models/BaseModel";

class EventsModel {
    static async day() {
        return await BaseModel.request('event/day');
    }
    static async search(q, loc='spb', lang='ru') {
        return await BaseModel.request('event/search?' + new URLSearchParams({
            q, loc, lang
        }))
    }
    static async getEvent(id) {
        return await BaseModel.request(`event?id=${id}`)
    }
}

export default EventsModel