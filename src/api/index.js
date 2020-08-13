import axios from "axios"
import { sort } from "./utils"

axios.defaults.baseURL = "https://api.covid19api.com"

const get_countries = async () => {
    const { data } = await axios.get("/countries")
    return sort(data, "Country")
}

const get_counntry_data = async (country = "") => {
    const { data } = await axios.get(`/total/country/${country}`)
    return data
}


export { get_countries, get_counntry_data }