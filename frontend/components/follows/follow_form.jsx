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
        this.likeState = this.likeState.bind(this);
    }

    componentDidMount () {
        // if (this.props.followed === true) {
            this.props.fetchOneFollow(this.follow).then(follow => {
                if (Object.keys(follow).length !== 0 ) {
                    this.setState({ followed: true,
                    follow_id: follow.id})
                } else {
                    this.setState({ followed: false })
                }
            })
        // }
    }

    handleSubmit(e) {

        e.preventDefault();

        this.props.createFollow(this.follow).then(follow => {
            console.log(follow)
            this.setState({followed: true, follow_id: follow.id})
        })
    }

    handleDelete(e) {

        e.preventDefault();

        let follow = { follow: { id: this.state.follow_id}}
        this.props.deleteFollow(follow).then(follow => {
            this.setState({followed: false, follow_id: null})
        })
    }

    likeState() {


        if (this.state.followed === false ) {
            return <h1>Not Liked</h1>
        } else {
            return <h1>Liked!</h1>
        }
    }

    render () {
        return (
            <section>
                {this.likeState()}
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