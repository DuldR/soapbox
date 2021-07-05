import * as APIUtil from '../util/topic_util'

export const RECEIVE_TOPICS = "RECEIVE_TOPICS"
export const RECEIVE_ONE_TOPIC = "RECIEVE_ONE_TOPIC"


export const receiveTopics = (topics) => {
    return { 
        type: RECEIVE_TOPICS,
        topics
    }
}

export const receiveOneTopic = (topic) => {
    return {
        type: RECEIVE_ONE_TOPIC,
        topic
    }
}

export const fetchTopics = () => (dispatch) => {
    return APIUtil.getAllTopics().then(topics => {
        dispatch(receiveTopics(topics))
    })
}

export const createTopic = (topic) => (dispatch) => {
    return APIUtil.createTopic(topic).then(topic => {
        dispatch(receiveOneTopic(topic))
    })
}