import React from 'react';

import './TBD.css'

const TBD = (props) => {

    let classNameOptions = [props.addClassName, "prev-container", "tbd"];

    let newClassName = ''

    if (props.addClassName === "hide") {
        newClassName = classNameOptions.join();
    } else {
        newClassName = [classNameOptions[1], classNameOptions[2]].join().replace(',', ' ')
    }

    return (
        <div className={newClassName}>
            <h4 className={classNameOptions[0]}>More Projects Coming Soon</h4>
        </div>
    )

}

export default TBD