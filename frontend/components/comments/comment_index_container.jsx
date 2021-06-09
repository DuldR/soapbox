import { connect } from 'react-redux'
import CommentIndex from './comment_index'
import { selectAllComments} from '../../reducers/selectors'


const mapStateToProps = (state) => ({

    comments: selectAllComments(state)

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)