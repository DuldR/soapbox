import { combineReducers } from 'redux'
import userReducer from './user_reducer'
import storyReducer from './story_reducer'

const entitiesReducer = combineReducers({
    user: userReducer,
    stories: storyReducer
    
})

export default entitiesReducer