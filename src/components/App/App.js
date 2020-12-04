import React from 'react';
import './App.css';

//components 

import LandingPage from '../LandingPage/LandingPage'
// import Footer from '../Footer/Footer'

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      landing: 'on'
    }

            this.handleLanding = this.handleLanding.bind(this)
  }


  handleLanding(payload) {
    if (this.state.landing === 'on') {
      console.log('in if')
      this.setState({
        landing: payload
      })
    }
  }

  toggleView() {
    console.log("in toggle")
    if (this.state.landing === "on") {

    } else {
      
    }
  }

  render() {
    return (
      <>
        {/* <p>/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</p>

      <h1>Portfolio Under Construction</h1>
      
      <p>/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</p> */}
        <LandingPage landingToggle={this.state.landing} click={this.handleLanding}/>

        {/* <Footer/> */}

      </>

    );
  }
}

export default App;
