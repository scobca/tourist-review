class BaseModel {

    static baseUrl = 'https://turist-ru.herokuapp.com/api/'

    static request(route, options) {
        return new Promise((resolve, reject) => {

            options.headers = options.headers ?? new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            })

            if (options.data) {
                options.body = JSON.stringify(options.data)
                options.method = options.method ?? 'POST'
            }

            fetch(this.baseUrl + route, options)
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }
}

export default BaseModel;