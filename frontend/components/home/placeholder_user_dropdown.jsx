import React from 'react'
import { Link } from 'react-router-dom'

class UserDropdown extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <ul>
                <li>
                    <Link to='/stories/new'>Write a story</Link>
                </li>
                <li>
                    Stories
                </li>
                <li>
                    Stats
                </li>
            </ul>
        )
    }

}

export default UserDropdown