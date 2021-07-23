import React from 'react'


class TopicIndex extends React.Component {


    constructor(props) {
        super(props)

        this.listTopics = this.listTopics.bind(this)
    }

    componentDidMount() {
        this.props.fetchTopics()
    }

    listTopics() {
        if (Object.keys(this.props.topics).length === 0) {
            return <h1>loading</h1>
        } else {
            const topicIndex = this.props.topics.map((topic, idx) => {
                return <li key={"topic-" + idx}>{topic.topic_name}</li>
            })

            return topicIndex

        }
    }

    render() {

        return ( 
            
            <article>
                <header>Recommended Topics</header>
                <ul className={'dashboard-box-topics'}>
                    {this.listTopics()}
                </ul>

            </article>
            
        )
    }
}

export default TopicIndex