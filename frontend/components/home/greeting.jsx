import React from 'react'
import { Link } from 'react-router-dom'
import UserDropdown from './placeholder_user_dropdown'


class Greeting extends React.Component{

    constructor(props) {
        super(props)


        this.loggedIn = this.loggedIn.bind(this)
        this.signup = this.signup.bind(this)
        this.greeting = this.greeting.bind(this)
        this.logout = this.logout.bind(this)
        this.refresh = this.refresh.bind(this)
    }


    loggedIn() {
        return (this.props.currentUser === undefined)
    }

    signup() {
        return (
            <div className={"nav-login"}>
                <Link to="/signup">Signup </Link>

                or

                <Link to="/login"> Login</Link>
            </div>
        )

    }

    logout() {
        this.props.logout();
    }

    refresh(e) {
        e.preventDefault()
        window.location.reload();
    }

    greeting() {
        const {currentUser} = this.props
        return (
            <div className={"nav-login-dropdown"}>
                <h2>AVATAR PLACEHOLDER</h2>
                <button className={"logout-button"} onClick={this.logout}>Log out?</button>
                <UserDropdown />
            </div>
        )
    }

    showDropdown() {
        console.log("Fired")
    }


    render() {


        return (
            <div onClick={this.showDropdown} onclassName={"nav-login-container"}>
                Placeholder
                {/* {this.loggedIn() ? this.signup() : this.greeting()} */}
                {this.greeting()}
            </div>
        )


    }
}

export default Greeting