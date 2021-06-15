import { combineReducers } from 'redux'
import userReducer from './user_reducer'
import storyReducer from './story_reducer'
import commentReducer from './comment_reducer'
import followReducer from './follow_reducer'

const entitiesReducer = combineReducers({
    user: userReducer,
    stories: storyReducer,
    comments: commentReducer,
    follows: followReducer
    
})

export default entitiesReducer