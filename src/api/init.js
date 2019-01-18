import axios from 'axios'

const api = axios.create({
<<<<<<< HEAD
    baseURL: "https://protected-scrubland-68099.herokuapp.com"
    // baseURL: "https://localhost:3001"
=======
    // baseURL: "https://protected-scrubland-68099.herokuapp.com"
    baseURL: "http://localhost:3000"
>>>>>>> cdfb1f636d12a81efd4a6da77c6dbd7eb8115573
})

export { api }