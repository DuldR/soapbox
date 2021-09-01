import React from 'react'

class UserDropdown extends React.Component {

    constructor(props) {
        super(props)


        this.logout = this.logout.bind(this)
    }


    logout() {
        this.props.logout();
    }


    render () {
        return (
            <ul>
                <li><button className={"logout-button"} onClick={this.logout}>Log out?</button></li>
                <li>Write Story</li>
                <li>Stories</li>
                <li>Stats</li>
                <li>Design your profile</li>
                <li>Settings</li>
            </ul>
        )
    }

}

export default UserDropdown