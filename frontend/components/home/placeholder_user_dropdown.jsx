import React from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from './greeting_container'

class UserDropdown extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <ul className={"nav-user-search"}>
                <li>
                    <a href="#" >
                        <i className={"fas fa-search"}></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className={"far fa-bookmark"}></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className={"far fa-bell"}></i>
                    </a>
                </li>

                <li>
                    <Link to="/new">
                        <i className={"fas fa-pen"}></i>
                    </Link>
                </li>

                <li>
                    <GreetingContainer />
                </li>
            </ul>
        )
    }

}

export default UserDropdown