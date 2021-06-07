import { RECEIVE_COMMENTS, RECEIVE_ONE_COMMENT } from './../actions/comment_actions'



const commentReducer = (state = {}, action) => {
    Object.freeze(state);


    switch(action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
        case RECEIVE_ONE_COMMENT:
            return Object.assign({}, state, {[action.comment.id]: action.comment } );
        default:
            return state;
    }
}

export default commentReducer