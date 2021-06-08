import { connect } from 'react-redux'
import CommentIndex from './comment_index'


const mapStateToProps = (state) => ({

    comments: state.entities.comments

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)