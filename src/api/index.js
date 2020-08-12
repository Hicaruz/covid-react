import axios from "axios"
import { sort } from "./utils"

axios.defaults.baseURL = "https://api.covid19api.com"

const get_countries = async () => {
    const { data } = await axios.get("/countries")
    return sort(data, "Country")
}


export { get_countries }