import React from 'react';
import { Link } from 'react-router-dom'
import LogoIcon from './logo_icon';

function Logo() {

    return (
        <div className={"group nav-logo-container"}>
            <Link to="/index"> <LogoIcon /> </Link>
            <Link className={"nav-logo"} to="/index">Soapbox</Link>
        </div>
    )
}

export default Logo