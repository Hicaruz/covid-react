import React, { Component } from 'react';
import Loading from "./Loading"
import { get_counntry_data } from "../api"
import axios from "axios"
class Info extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...props,
            historial: [],
            news: []
        }

        this.LoadNews = this.LoadNews.bind(this)
    }

    async componentDidMount() {
        const { country } = this.props
        const historial = await get_counntry_data(country.Slug)
        this.setState({ historial })
        this.LoadNews(country)

    }

    async LoadNews({ Country }) {
        const path = "https://newsapi.org/v2/everything?"
        const apikey = "66eeb17e6c844da5aa0e8d1b88ec070e"
        const sort = "popularity"
        const topic = "coronavirus"
        const [start, end] = get_date()
        const url = `${path}apiKey=${apikey}&q=${Country}+${topic}&from=${start}&to=${end}&sortBy=${sort}`

        const { data: news } = await axios.get(url)
        this.setState({ news: news.articles.slice(0, 10) })
    }
    render() {
        const self = this.state
        if (!self.historial.length) {
            return (<Loading />)
        }

        return (
            <>
            </>
        )
    }
}

export default Info

function get_date() {
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const start = `${year}-${month + 1}-01`
    const end = `${year}-${month + 1}-30`
    return [start, end]
}
