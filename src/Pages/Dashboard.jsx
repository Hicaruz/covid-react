import React, { Component } from 'react';
import CountriesMenu from "../Components/Menu"
import Country from "../Components/Country_info"
import Map from "../Components/Map"
import { Grid } from '@material-ui/core';


class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...props,
            filter_country: "",
            current_country: {},
            dimensions: {
                center: 9,
                siders: 3
            }
        }

        this.controllerFilter = this.controllerFilter.bind(this)
        this.controllerSelect = this.controllerSelect.bind(this)
        this.swapDimensions = this.swapDimensions.bind(this)
    }

    controllerFilter({ target }) {
        const filter_country = target.value
        this.setState({ filter_country })
    }
    controllerSelect(selected) {
        const self = this
        const current = this.state.current_country
        if (!current.Slug) {
            this.setState({ current_country: selected })
            this.swapDimensions()
            return;
        } else if (current.Slug === selected.Slug) {
            this.swapDimensions()
            return;

        }
        this.swapDimensions()
        this.setState({ current_country: selected })
        setTimeout(() => self.swapDimensions(), 500)


    }
    swapDimensions() {
        const { dimensions } = this.state
        dimensions.center = dimensions.center === 9 ? 6 : 9
        this.setState({ dimensions })
    }


    render() {
        const self = this.state
        const controllers = {
            filter: this.controllerFilter,
            select: this.controllerSelect
        }
        return (

            <>
                <div className="root-container">
                    <Grid container spacing={3}>
                        <CountriesMenu
                            countries={self.countries}
                            filter={self.filter_country}
                            controllers={controllers}
                            dimension={self.dimensions}
                        />
                        <Map dimension={self.dimensions} />
                        <Country
                            country={self.current_country}
                            dimension={self.dimensions}
                        />

                    </Grid>
                </div>
            </>
        )
    }
}
export default Dashboard