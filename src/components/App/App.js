import React from 'react';
import './App.css';

//components 

import LandingPage from '../LandingPage/LandingPage'
import HomePage from '../HomePage/HomePage'
// import Footer from '../Footer/Footer'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      landing: 'on'
    }

    this.handleLanding = this.handleLanding.bind(this)
  }


  handleLanding(payload) {
    if (this.state.landing === 'on') {
      this.setState({
        landing: payload
      })
    }
  }


  render() {

    if (this.state.landing === 'on') {
      return (
        <LandingPage landingToggle={this.state.landing} click={this.handleLanding} />
      )

    }

    if (this.state.landing === 'off') {
      return (
        <HomePage />
      )
    }
  }
}

export default App;
