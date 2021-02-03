import React from 'react';
import './App.css';

//components 

import LandingPage from '../LandingPage/LandingPage'

import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
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

    //Landing Page only
    // return (
    //   <div className="gradient">
    //     <LandingPage />
    //   </div>
    // )


    //PORTFOLIO PAGE ONLY 

    return (
      // <Provider store={store}>
      <div className="gradient">
        <Header />
        <Portfolio />
        </div>
        // </Provider>
    )

    // if (this.state.landing === 'on') {
    //   return (
    //     <>
    //       <div className="gradient">
    //       </div>

    //       <LandingPage landingToggle={this.state.landing} click={this.handleLanding} />
    //     </>
    //   )

    // }

    // if (this.state.landing === 'off') {
    //   return (
    //     <>
    //       <div className="gradient">
    //       </div>
    //       <Header />
    //       <Portfolio />
    //     </>
    //   )
    // }
  }
}

export default App;
