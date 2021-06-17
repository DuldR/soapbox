import React from 'react'


class FollowForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = { followable_id: parseInt(props.match.params.storyId), followable_type: this.props.followType, follower_id: this.props.user.id, follower_type: "User"}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        let follow = { follow: this.state }

        this.props.createFollow(follow)
    }

    render () {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                     <button>Like?</button>
                </form>

               

            </section>
        )
    }
}

export default FollowForm