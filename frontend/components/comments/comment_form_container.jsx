import { connect } from 'react-redux'
import { selectOneUser } from '../../reducers/selectors'
import { createComment } from '../../actions/comment_actions'
import CommentForm from './comment_form'


const mapStateToProps = (state, ownProps) => ({
    user: selectOneUser(state)

})

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))

})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)