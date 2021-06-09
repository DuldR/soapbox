import React from 'react'


class CommentForm extends React.Component {

    constructor(props) {
        super(props)

        // Might not need story id? Pull it from ownProps
        this.state = { body: "", user_id: props.user.id, story_id: parseInt(props.match.params.storyId)}

        this.handleSubmit = this.handleSubmit.bind(this)
    
    }

    handleSubmit(e) {
        e.preventDefault();
        let comment = { comment: this.state }
        const formData = new FormData();

        formData.append('comment[story_id]', this.state.story_id)
        formData.append('comment[body]', this.state.body)
        formData.append('comment[user_id]', this.state.user_id)

        this.props.createComment(formData)

    }

    update(property) {
        return e => this.setState({[property]: e.target.value});
    }

    render() {
        return (
             <form onSubmit={this.handleSubmit} className="form-comment" id="comment-submit">

                <label >Comment Body: </label>
                <textarea className="form-comment-body" type='text' onChange={this.update("body")}></textarea>
                <br></br>

                <button>Submit</button>

            </form>
        )
    }
}

export default CommentForm