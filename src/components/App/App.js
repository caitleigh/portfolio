import React from 'react';
import './App.css';

//components 

import LandingPage from '../LandingPage/LandingPage'
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
        <p>This will be the home</p>
      )
    }
    return (
      <>
        <LandingPage landingToggle={this.state.landing} click={this.handleLanding} />
      </>

    );
  }
}

export default App;
