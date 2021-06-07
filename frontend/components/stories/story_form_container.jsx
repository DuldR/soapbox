import { connect } from 'react-redux'
import StoryForm from './story_form'
import { createStory } from '../../actions/story_actions' 
import { selectOneUser } from '../../reducers/selectors'


const mapStateToProps = (state) => ({

    user: selectOneUser(state)

})

const mapDispatchToProps = dispatch => ({
    createStory: story => dispatch(createStory(story))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm)