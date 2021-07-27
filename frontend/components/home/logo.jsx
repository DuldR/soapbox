import React from 'react';
import { Link } from 'react-router-dom'
import img from '../../images/mount.jpg'

function Logo() {
    const logo = "Whats good"

    return (
        <div>
            <img src={img} />
            <Link className={"nav-logo"} to="/index">Soapbox</Link>
        </div>
    )
}

export default Logo