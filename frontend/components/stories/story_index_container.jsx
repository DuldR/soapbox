import { connect } from 'react-redux'
import { selectAllStories } from '../../reducers/selectors'
import StoryIndex from './story_index'
import { fetchStories } from '../../actions/story_actions'


const mapStateToProps = (state) => ({

    stories: selectAllStories(state)

})

const mapDispatchToProps = (dispatch) => ({

    fetchStories: () => dispatch(fetchStories())

})

export default connect(mapStateToProps, mapDispatchToProps)(StoryIndex)