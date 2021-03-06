import React from 'react'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions/session_actions';


class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { username: "", email: "", password: "" }

        this.displayHeader = this.displayHeader.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addData = this.addData.bind(this)
        this.showSignup = this.showSignup.bind(this)
    }

    displayHeader() {
        if (this.props.formType === "login" ) {
            return <section>
                Lets login!
            </section>
        } else {
            return <section>
                Lets signup!
            </section>
        }
    }

    addData(e) {

        switch(e.currentTarget.classList[0]) {
            case ("form-username"):
                this.setState( { username: e.currentTarget.value } )
                break
            case ("form-password"):
                this.setState( { password: e.currentTarget.value })
                break
            case ("form-email"):
                this.setState( { email: e.currentTarget.value })
                break
            default:
                break
        }

    }

    handleSubmit(e) {
        e.preventDefault();

        const user = Object.assign({}, this.state);

        if (this.props.formType === "signup") { 
            this.props.signup({ user: user })
        } else {
            delete user.email
            this.props.login({ session: user } )
        }
            
    }

    showSignup(e) {

        return (
            <div>
                <label>Email:</label>
                <input className="form-email" onChange={this.addData} type='text'></input>
            </div>
            
        )
    }


    render() {
        return ( 

            <section>
                {this.displayHeader()}
                <br></br>

                <form onSubmit={this.handleSubmit} className="user-form">
                    

                    <label>Username:</label>
                    <input className="form-username" onChange={this.addData} type='text'></input>
                    {this.props.formType === "signup" ? this.showSignup() : null }    
                    <label>Password</label>
                    <input className="form-password" onChange={this.addData} type='text'></input>
                    <button>Submit</button>
                </form>
            </section>
                
        )
    }
}


export default SessionForm