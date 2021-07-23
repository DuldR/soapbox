import React from 'react'

class FollowIndex extends React.Component {
    constructor(props) {
        super(props)

        this.listFollows = this.listFollows.bind(this)
    }

    componentDidMount() {
        
    }

    listFollows() {
        if (this.props.follows.empty === 0) {
            return <h1> Loading </h1>
        } else {

            // This is gonna bork up. Titles dont match up with users. Will need to refactor
            const followIndex = this.props.follows.map((follow, idx) => {
                return <li key={"follow-" + idx}>
                    {follow.title}
                </li>
            })
            return followIndex
        }

        
    }

    render () {
        return (
            <ul className={'dashboard-box-items'}>
                {this.listFollows()}
            </ul>
        )
    }
}

export default FollowIndex