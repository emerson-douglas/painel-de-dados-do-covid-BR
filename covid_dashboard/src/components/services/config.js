
import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.brasil.io/v1/dataset/covid19/caso/data/",
})

export default api