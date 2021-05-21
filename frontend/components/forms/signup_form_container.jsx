import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    
    formType: 'signup'

})

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)