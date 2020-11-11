import React from 'react';
import './LandingPage.css'

// const LandingPage = () => {
//     return (
//         <>
//             <section className="title">
//                 <h1>Rougeland</h1>
//                 <h2>Productions</h2>
//             </section>

//             <section className="view-work">
//                 <p>View Work</p>
//             </section>

//         </>
//     )
// }



/*
 * A simple React component
 */
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationClass: 'gradient'
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        if (this.state.animationClass === 'gradient') {
            this.setState({
                animationClass: 'test paused'
            });
        } else {
            this.setState({
                animationClass: 'gradient'
            });
        }
    }
    render() {
        return <div className={this.state.animationClass}>
            <section className="title">
                <h1>Rougeland</h1>
                <h2>Productions</h2>
            </section>

            <section className="view-work">
                <p>View Work</p>
            </section>
        </div>;
    }
}
export default LandingPage
