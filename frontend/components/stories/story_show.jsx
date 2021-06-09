import React from 'react'
import CommentIndexContainer from '../comments/comment_index_container'
import CommentFormContainer from '../comments/comment_form_container'
import CommentForm from '../comments/comment_form'

import { Route } from 'react-router-dom'

class StoryShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchOneStory(this.props.match.params.storyId)
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

                <Route path='/stories/:storyId/' component={CommentFormContainer} />

            </section>
        )
    }
}

export default StoryShow