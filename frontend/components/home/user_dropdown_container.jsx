import { connect } from 'react-redux'
import UserDropdown from './user_dropdown'
import { logout } from '../../actions/session_actions'


const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(UserDropdown)