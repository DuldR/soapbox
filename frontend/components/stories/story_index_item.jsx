import React from 'react'
import { Link } from 'react-router-dom'

export const StoryIndexItem = (props) => {

    const { story } = props

    return (
        <ul>
            <li className={"story-index-item"}>

                <header>{story.user}</header>

                
                <Link to={`/stories/${story.id}`}>

                    <h1>{story.title}</h1>

                    <article>
                        {story.body}
                    </article>
                        

                </Link>
                
        
    
            </li>
        </ul>
    )
}