import React from 'react';
import './switch.css';
import cx from "classnames"


function Switch({ rounded = false, isToggled, onToggle }) {

    const sliderCX = cx('slider', {
        rounded: rounded
    })




    return (


        <div className="notif">
            <h3 className="tag">Notifications</h3>
            <label className="switch">

                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className={sliderCX} />
            </label>
        </div>
    );
}

export default Switch;