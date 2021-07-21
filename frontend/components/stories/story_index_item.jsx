import React from 'react'
import { Link } from 'react-router-dom'

export const StoryIndexItem = (props) => {

    const { story } = props

    return (
        <ul>
            <li>
                <Link to={`/stories/${story.id}`}>
                    {story.title}
                    {story.body}
                </Link>
    
            </li>
        </ul>
    )
}