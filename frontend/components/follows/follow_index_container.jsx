import { connect } from 'react-redux'
import FollowIndex from './follow_index'
import { selectAllFollows } from '../../reducers/selectors'

export const mapStateToProps = state => ({

    follows: selectAllFollows(state)

})


export const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(FollowIndex)