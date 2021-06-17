import { connect } from 'react-redux'
import { selectOneUser } from '../../reducers/selectors'
import { createFollow } from '../../actions/follow_actions'
import FollowForm from './follow_form'

const mapStateToProps = (state, ownProps) => ({
    user: selectOneUser(state),
    follows: state.entities.follows
})

const mapDispatchToProps = (dispatch) => ({
    createFollow: follow => dispatch(createFollow(follow))
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowForm)