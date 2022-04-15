import axios from "axios";


const api = axios.create({baseURL:'https://deploy-eblack.herokuapp.com/'})

export default api;