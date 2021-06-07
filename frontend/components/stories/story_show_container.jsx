import { connect } from 'react-redux'
import StoryShow from './story_show'
import { fetchOneStory } from '../../actions/story_actions'

const mapStateToProps = (state, ownProps) => ({
    story: state.entities.stories[ownProps.match.params.storyId]
})

const mapDispatchToProps = (dispatch) => ({
    fetchOneStory: (story) => dispatch(fetchOneStory(story))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryShow)