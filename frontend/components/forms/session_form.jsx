import React from 'react'


class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { username: "", email: "", password: "" }

        this.displayHeader = this.displayHeader.bind(this)
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


    render() {
        return ( 
            <div>
                {this.displayHeader()}
                <br></br>
                <form className="user-form">

                
                    <label>Username:</label>
                    <input className="form-username" type='text'></input>
                    <label>Password</label>
                    <input className="form-password" type='text'></input>
                    <button>Submit</button>
                </form>

            </div>
        
        )
    }
}


export default SessionForm