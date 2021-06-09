import { connect } from 'react-redux'
import { selectOneUser } from '../../reducers/selectors'
import CommentForm from './comment_form'


const mapStateToProps = (state, ownProps) => ({
    user: selectOneUser(state)

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)