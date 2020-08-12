import React, { Component } from 'react';
import { get_countries } from "./api"
import Dashboard from "./Pages/Dashboard"
import Loading from "./Components/Loading"

class App extends Component {

  constructor() {
    super();
    this.state = {
      countries: []
    }
  }

  async componentDidMount() {
    const countries = await get_countries()

    this.setState({ countries })
  }

  render() {
    const self = this.state

    return (
      <>
        {self.countries.length ? <Dashboard {...self}/> : <Loading/>}
      </>
    );
  }
}


export default App;
