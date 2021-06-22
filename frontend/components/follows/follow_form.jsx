import React from 'react'
import { getFollow } from '../../util/follow_util'


class FollowForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = { followed: this.props.followed, follow_id: null }

        this.follow = { follow: { followable_id: parseInt(this.props.match.params.storyId), followable_type: this.props.followType, follower_id: this.props.user.id, follower_type: "User"} }

        // this.state = { followable_id: parseInt(props.match.params.storyId), followable_type: this.props.followType, follower_id: this.props.user.id, follower_type: "User"}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount () {
        // if (this.props.followed === true) {
            getFollow(this.follow).then(follow => this.setState({
                follow_id: follow[0].id,
                followed: !this.state.followed
            }))
        // }
    }

    handleSubmit(e) {

        e.preventDefault();

        this.props.createFollow(this.follow)
    }

    handleDelete(e) {

        e.preventDefault();

        let follow = { follow: { id: this.state.follow_id}}
        this.props.deleteFollow(follow)
  
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