import React from 'react'
import { Link } from 'react-router-dom'
import UserDropdownContainer from './user_dropdown_container'


class Greeting extends React.Component{

    constructor(props) {
        super(props)

        this.state = {clicked: false}


        this.loggedIn = this.loggedIn.bind(this)
        this.signup = this.signup.bind(this)
        this.greeting = this.greeting.bind(this)
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

    greeting() {
        const {currentUser} = this.props
        let className = this.state.clicked ? 'nav-login-dropdown show' : 'nav-login-dropdown'

        return (
            <div className={className}>
                <UserDropdownContainer />
            </div>
        )
    }

    showDropdown() {
        this.setState({clicked: !this.state.clicked })
    }


    render() {


        return (
            <div onClick={this.showDropdown} className={"nav-login-container"}>
                Ava
                {this.loggedIn() ? this.signup() : this.greeting()}
            </div>
        )


    }
}

export default Greeting