import React from 'react'


class FollowForm extends React.Component {

    constructor(props) {
        super(props)

        this.follow = { follow: { followable_id: parseInt(this.props.match.params.storyId), followable_type: this.props.followType, follower_id: this.props.user.id, follower_type: "User"} }

        // this.state = { followable_id: parseInt(props.match.params.storyId), followable_type: this.props.followType, follower_id: this.props.user.id, follower_type: "User"}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleSubmit(e) {

        e.preventDefault();

        this.props.createFollow(this.follow)
    }

    handleDelete() {

        
        if (this.props.followType === "Story") {
            if (this.props.follows.storyFollows.followable_id) {
                console.log("You do like this.")
            } else {
                console.log("You DONT like this")
            }
        }
    }

    render () {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                     <button>Like?</button>
                </form>

                <form onSubmit={this.handleDelete}>
                     <button>Baleete?</button>
                </form>

               

            </section>
        )
    }
}

export default FollowForm