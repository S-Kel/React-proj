import axios from 'axios'

const api = axios.create({
    baseURL: "https://protected-scrubland-68099.herokuapp.com"
    // baseURL: "https://localhost:3000"
})

export { api }