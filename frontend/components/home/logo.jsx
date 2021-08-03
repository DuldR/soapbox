import React from 'react';
import { Link } from 'react-router-dom'
import img from '../../images/soap.png'

function Logo() {
    const logo = "Whats good"

    return (
        <div className={"group nav-logo-container"}>
            <img className={"nav-logo-image"} src={img} />
            <Link className={"nav-logo"} to="/index">Soapbox</Link>
        </div>
    )
}

export default Logo