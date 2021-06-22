// Will need API Util to MAKE a follow

import * as APIUtil from "../util/follow_util"
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS"
export const RECEIVE_ONE_FOLLOW = "RECEIVE_ONE_FOLLOW"
export const REMOVE_FOLLOW = "REMOVE_FOLLOW"


export const receiveFollows = (follows) => {
    return {
        type: RECEIVE_FOLLOWS,
        follows
    }
}

export const receiveOneFollow = (follow) => {
    return { 
        type: RECEIVE_ONE_FOLLOW,
        follow
    }
}

export const removeFollow = (follow) => {
    return {
        type: REMOVE_FOLLOW,
        follow
    }
}

export const fetchFollows = (userId) => (dispatch) => {
    return APIUtil.getAllFollows(userId).then(follows => {
        dispatch(receiveFollows(follows))
    })
}

export const fetchOneFollow = (follow) => (dispatch) => {
    return APIUtil.getFollow(follow).then(follows => {
        dispatch(receiveOneFollow(follows))
        return follows
    })
}

export const createFollow = (follow) => (dispatch) => {
    return APIUtil.createFollow(follow).then(follow => {
        dispatch(receiveOneFollow(follow))
    })
}

export const deleteFollow = (follow) => (dispatch) => {
    return APIUtil.destroyFollow(follow).then((follow) => {
        dispatch(removeFollow(follow))
    })
}
