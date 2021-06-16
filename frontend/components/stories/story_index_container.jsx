import { connect } from 'react-redux'
import { selectAllStories } from '../../reducers/selectors'


import { fetchStories } from '../../actions/story_actions'
import { fetchFollows } from '../../actions/follow_actions'


import StoryIndex from './story_index'


const mapStateToProps = (state) => ({

    stories: selectAllStories(state),
    user: state.entities.user

})

const mapDispatchToProps = (dispatch) => ({

    fetchStories: () => dispatch(fetchStories()),
    fetchFollows: (userId) => dispatch(fetchFollows(userId))

})

export default connect(mapStateToProps, mapDispatchToProps)(StoryIndex)