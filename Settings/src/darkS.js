import React from 'react';
import './darkS.css';
import cx from "classnames"


function DarkSwitch({ rounded = false, isToggled, onToggle }) {

    const sliderCX = cx('slider', {
        rounded: rounded
    })

    return (
        <div className="darkk">
            <h3 className="tag">Dark mode   </h3>
            <label className="switch">

                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className={sliderCX} />
            </label>
        </div>
    );
}

export default DarkSwitch;