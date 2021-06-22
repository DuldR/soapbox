import React from 'react'
import CommentIndexContainer from '../comments/comment_index_container'
import CommentFormContainer from '../comments/comment_form_container'
import FollowFormContainer from '../follows/follow_form_container'

import { Route } from 'react-router-dom'

class StoryShow extends React.Component {

    constructor(props) {
        super(props)

     

        this.followButton = this.followButton.bind(this)
    }

    componentDidMount() {
        let lookUpFollow = {follow: {followable_id: this.props.match.params.storyId, followable_type: "Story", follower_id: this.props.user_id} }

        this.props.fetchOneStory(this.props.match.params.storyId)
        this.props.fetchOneFollow(lookUpFollow)
    }


    followButton () {

        if (this.props.follow === true) {
            return <h1> YOu like this! </h1>
        } else {
            return <h1> YOU DONT! LIKT HIS</h1>
        }

    }

    render () {

        if (this.props.story === undefined) {
            return <h1>Loading</h1>
        } 
        const { story } = this.props


        return (

            <section>
                <ul>
                    {story.title}
                </ul>
                
                <CommentIndexContainer />     
                {/* <CommentFormContainer /> */}
                {this.followButton()}
                <Route path='/stories/:storyId/' component={CommentFormContainer} />
                <Route path='/stories/:storyId/' render={(props) => (
                        <FollowFormContainer {...props} story={this.props.story} followed={this.props.follow} followType={"Story"}/>
                    )} 
                />
            </section>
        )
    }
}

export default StoryShow