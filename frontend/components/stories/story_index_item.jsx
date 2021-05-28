import React from 'react'
import { Link } from 'react-router-dom'

export const StoryIndexItem = (props) => {

    console.log(props)
    return (
        <ul>
            <li>
                {props.story.title}
            </li>
        </ul>
    )
}