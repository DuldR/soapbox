import React from 'react'


class FollowForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = { followable_id: parseInt(props.match.params.storyId), followable_type: this.props.followType, follower_id: this.props.user.id, follower_type: "User"}
    }

    render () {
        return (
            <h1>Test</h1> 
        )
    }
}

export default FollowForm