import React from 'react';
import { Link } from 'react-router-dom'

function Logo() {
    const logo = "Whats good"

    return <Link className={"nav-logo"} to="/index">Soapbox</Link>
}

export default Logo