import React from 'react';
import ContentEditable from 'react-contenteditable'


class StoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", body: "", user_id: props.user.id }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let story = { story: this.state }
        const formData = new FormData();

        formData.append('story[title]', this.state.title)
        formData.append('story[body]', this.state.body)
        formData.append('story[user_id]', this.state.user_id)


        // if (this.state.photoFile) {
        //     formData.append('story[photo]', this.state.photoFile)
        // }

        this.props.createStory(formData).then(
            this.props.history.push('/index')
        )

    }


    update(property) {

        return e => this.setState({[property]: e.target.value});

    }


    render() {

        return (
            <form onSubmit={this.handleSubmit} className="form-story" id="story-submit">

                <label >Title: </label>
                <input className="form-story-title" type='text' onChange={this.update("title")}></input>
                <br></br>
                {/* <label >Body: </label>
                <textarea className="form-story-body" type='text' onChange={this.update("body")}></textarea> */}

                <ContentEditable className={"form-story-body"} html={this.state.body} onChange={this.update("body")} />

                <button>Submit</button>

            </form>
        )
    }


}

export default StoryForm