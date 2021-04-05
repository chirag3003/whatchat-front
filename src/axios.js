import axios from 'axios';


const instance = axios.create({
    // baseURL: ' https://whatchat-back.herokuapp.com/',
    baseURL: 'http://localhost:9000'

})

export default instance;