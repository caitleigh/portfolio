import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import './LandingPage.css'

class LandingPage extends React.Component {

    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderViewWork = () => {
        if (this.state.redirect) {
            return <Redirect to='../ViewWork/ViewWork' />
        }
    }

    render() {
        return (
            <>
                <div className="gradient">
                </div>;
                <div className="title">
                    <h1>Rogueland</h1>
                    <h2>Web Designs</h2>
                    <h3>By Cait Rowland</h3>
                </div>

                <div className="view-work-container" href='../ViewWork/ViewWork.js'>
                    <section
                        className="view-work">

                        <button onClick={this.setRedirect}>Under Construction</button>
                    </section>
                    <section className="view-work-line">

                    </section>

                </div>
            </>)
    }
}
export default LandingPage
