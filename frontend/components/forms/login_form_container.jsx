import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({

    formType: 'login'

})

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)