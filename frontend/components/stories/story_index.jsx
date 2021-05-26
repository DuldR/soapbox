import React from 'react'


class StoryIndex extends React.Component {
    constructor(props) {
        super(props);

        this.listStories = this.listStories.bind(this)
    }

    componentDidMount() {
        this.props.fetchStories();
    }

    listStories() {

        if (Object.keys(this.props.stories).length === 0 && this.props.stories.constructor === Object) {
            return <h1> Loading </h1>
        } else {
            const storyIndex = this.props.stories.map((story, idx) => {
                return <li key={"story- " + idx}>
                    {story.body}
                </li>
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
