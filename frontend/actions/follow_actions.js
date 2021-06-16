// Will need API Util to MAKE a follow
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS"
export const RECEIVE_ONE_FOLLOW = "RECEIVE_ONE_FOLLOW"


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
