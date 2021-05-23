import axios from 'axios'
import API_ROOT from './apiRoot'

const api = axios.create ({
    baseURL : API_ROOT,
    headers: {'Accept': 'application/json'}
})

export const get = (url) => {
    api.get(url)
      .then(data => console.log(data.data))
}


export default api;