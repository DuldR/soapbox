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
                    <div>Time Wrote</div>
                    {story.topic == null ? <h4>no tags</h4> : story.topic.topic_name}
                    <span> How Long To Reade </span>
                    <span>Liked?</span>
                </footer>
                
        
    
            </li>
        </ul>
    )
}