import { connect } from 'react-redux'
import TopicIndex from './topic_index'

import { fetchTopics } from '../../actions/topic_actions'




const mapStateToProps = (state) => ({

    topics: state.entities.topics
})
 
const mapDispatchToProps = dispatch => ({
    fetchTopics: () => dispatch(fetchTopics())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicIndex)