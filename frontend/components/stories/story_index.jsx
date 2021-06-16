import React from 'react'
import { StoryIndexItem } from './story_index_item'


class StoryIndex extends React.Component {
    constructor(props) {
        super(props);

        this.listStories = this.listStories.bind(this)
    }

    componentDidMount() {
        this.props.fetchStories();
        this.props.fetchFollows(this.props.user.id)
    }

    listStories() {

        if (Object.keys(this.props.stories).length === 0 && this.props.stories.constructor === Object) {
            return <h1> Loading </h1>
        } else {
            const storyIndex = this.props.stories.map((story, idx) => {
                return <StoryIndexItem key={"story-idx-" + idx} story={story} />
            })

            return storyIndex
        }

    }

    render() {

        

        return (
            <div className={"story-index"}>
                {this.listStories()}
            </div>
        )
    }
}

export default StoryIndex
