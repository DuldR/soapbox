import * as APIUtil from '../util/comment_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_ONE_COMMENT = "RECEIVE_ONE_COMMENT"


export const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

export const receiveOneComment = (comment) => {
    return { 
        type: RECEIVE_ONE_COMMENT,
        comment
    }
}

// export const fetchComments = () => (dispatch) => {
//     return APIUtil.getAllComments().then(comments => {
//         dispatch(receiveComments(comments))
//     })
// }