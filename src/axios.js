import axios from 'axios'

const instance = axios.create({
    baseURL:'https://veggy-2a3c0.firebaseio.com/'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

export default instance;