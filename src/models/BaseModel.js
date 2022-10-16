class BaseModel {

    static baseUrl = 'https://turist-ru.herokuapp.com/api/'

    static request(route, options) {
        return new Promise((resolve, reject) => {

            const method = options.method ?? 'GET';

            const headers = options.headers ?? new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            })

            if (options.body) options.body = JSON.stringify(options.body)

            fetch(this.baseUrl + route, options)
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }
}