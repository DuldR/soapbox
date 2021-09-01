import React from 'react'
import { Link } from 'react-router-dom'
import UserDropdown from './placeholder_user_dropdown'


class Greeting extends React.Component{

    constructor(props) {
        super(props)

        this.state = {clicked: false}


        this.loggedIn = this.loggedIn.bind(this)
        this.signup = this.signup.bind(this)
        this.greeting = this.greeting.bind(this)
        this.logout = this.logout.bind(this)
        this.refresh = this.refresh.bind(this)
        this.showDropdown = this.showDropdown.bind(this)
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
        let className = this.state.clicked ? 'nav-login-dropdown-show' : 'nav-login-dropdown'

        return (
            <div className={className}>
                <h2>AVATAR PLACEHOLDER</h2>
                <button className={"logout-button"} onClick={this.logout}>Log out?</button>
                <UserDropdown />
            </div>
        )
    }

    showDropdown() {
        this.setState({clicked: !this.state.clicked })
    }


    render() {


        return (
            <div onClick={this.showDropdown} className={"nav-login-container"}>
                Placeholder
                {/* {this.loggedIn() ? this.signup() : this.greeting()} */}
                {this.greeting()}
            </div>
        )


    }
}

export default Greeting