import { combineReducers } from 'redux'
import userReducer from './user_reducer'
import userIndexReducer from './userIndex_reducer'
import storyReducer from './story_reducer'
import commentReducer from './comment_reducer'
import followReducer from './follow_reducer'
import topicReducer from './topic_reducer'

const entitiesReducer = combineReducers({
    user: userReducer,
    stories: storyReducer,
    comments: commentReducer,
    follows: followReducer,
    topics: topicReducer,
    userIndex: userIndexReducer
    
})

export default entitiesReducer