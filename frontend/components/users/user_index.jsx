import React from 'react'


class UserIndex extends React.Component {
    constructor(props) {
        super(props)

        this.listUsers = this.listUsers.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    listUsers() {
        if (this.props.userIndex.length === 0) {
            return <h1>loading</h1>
        } else {
            const userIndex = this.props.userIndex.map((user, idx) => {
                return <li key={"user-" + idx}>{user.username}</li>
            })

            return userIndex

        }

    }


    render () {

        return (
            <ul className={'dashboard-box-items'}>
                {this.listUsers()}
            </ul>
        )
    }
}

export default UserIndex