import React from 'react'
import { Link } from 'react-router-dom'

export const StoryIndexItem = (props) => {

    const { story } = props
    
    return (
        <ul>
            <li>
                {story.title}
            </li>

            <li>
                {story.body}
            </li>
        </ul>
    )
}