import React from 'react';

import './LandingPage.css'

class LandingPage extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            landing: 'on'
        }
        this.renderHomePage = this.renderHomePage.bind(this)
    }


    renderHomePage = async () => {
        await this.setState({ landing: 'off' })
        this.props.click(this.state.landing)
    }

    render() {
        return (
            <>
                <div className="content">
                    <div className="title">
                        <h1>Rogueland</h1>
                        <h2>Web Designs</h2>
                        <h3>By Cait Rowland</h3>
                    </div>

                    <div className="view-work-container">
                        <section
                            className="view-work">

                            <button onClick={this.renderHomePage}>Under Construction</button>
                        </section>
                        <section className="view-work-line">

                        </section>

                    </div>
                </div>
            </>)
    }
}
export default LandingPage
