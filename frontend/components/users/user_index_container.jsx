import { connect } from 'react-redux'
import UserIndex from './user_index'

import { fetchUsers } from '../../actions/user_actions'

const mapStateToProps = state => ({

    userIndex: state.entities.userIndex

})

const mapDispatchToProps = dispatch => ({

    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)