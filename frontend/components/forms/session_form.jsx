import React from 'react'


class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { username: "", email: "", password: "" }


    }


    render() {
        return ( 
            <form className="user-form">
                <label>Username:</label>
                <input className="form-username" type='text'></input>
                <label>Password</label>
                <input className="form-password" type='text'></input>
                <button>Submit</button>
            </form>
        )
    }
}


export default SessionForm