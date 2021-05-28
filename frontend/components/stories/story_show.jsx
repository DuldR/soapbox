import React from 'react'


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
            <ul>
                <li>
                    {story.title}
                </li>
            </ul>
        )
    }
}

export default StoryShow