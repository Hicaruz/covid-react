import React, { Component } from 'react';
import Loading from "./Loading"
import { get_counntry_data } from "../api"

class Info extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...props,
            historial: []
        }
    }

    async componentDidMount() {
        const { country } = this.props
        const historial = await get_counntry_data(country.Slug)
        this.setState({ historial })
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