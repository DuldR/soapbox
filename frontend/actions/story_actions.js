import * as APIUtil from '../util/story_util'

export const RECEIVE_STORIES = "RECEIVE_STORIES"
export const RECEIVE_ONE_STORY = "RECEIVE_ONE_STORY"



export const receiveStories = (stories) => {
    return {
        type: RECEIVE_STORIES,
        stories
    }
}

export const receiveOneStory = (story) => {
    return {
        type: RECEIVE_ONE_STORY,
        story
    }
}

export const fetchStories = () => (dispatch) => {
    return APIUtil.getStories().then(stories => {
        dispatch(receiveStories(stories))
    })
}

export const fetchOneStory = (story) => (dispatch) => {
    return APIUtil.getStory(story).then(story => {
        dispatch(receiveOneStory(story))
    })
}

export const createStory = (story) => (dispatch) => {
    return APIUtil.createStory(story).then(story => {
        dispatch(receiveOneStory(story))
    })
}