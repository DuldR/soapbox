import React from 'react'
import { Link } from 'react-router-dom'

export const StoryIndexItem = (props) => {

    const { story } = props

    return (
        <ul className={"story-index-container"}>
            <li className={"story-index-item"}>

                <header>{story.user}</header>

                
                <Link to={`/stories/${story.id}`}>

                    <h1>{story.title}</h1>

                    <article>
                        {story.body}
                    </article>
                        

                </Link>

                <footer>
                    <div>{story.created}</div>
                    {story.time < 1 ? <span>Less than a min read </span> : <span>{story.time} min read </span>}
                    {story.topic == null ? <span>no tags</span> : <span>
                        {story.topic.topic_name}
                    </span>}
                    
                    <span>Liked?</span>
                </footer>
                
        
    
            </li>
        </ul>
    )
}