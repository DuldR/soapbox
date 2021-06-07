import React from 'react';
import { Route, Redirect } from 'react-router-dom'


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
            this.props.history.push('/')
        )

    }

    // handleFile(e) {

    //     const file = e.currentTarget.files[0]
    //     const fileReader = new FileReader();

    //     fileReader.onloadend = () => {
    //         this.setState({photoFile: file, photoUrl: fileReader.result})
    //     }

    //     if (file) {
    //         fileReader.readAsDataURL(file);
    //     }
        

    //     this.setState({photoFile: e.currentTarget.files[0] })
    // }

    // My methodoloy, they provided a better way though
    // addstory(e) {

    //     switch(e.currentTarget.classList[0]) {
    //         case ("form-description"):
    //             this.setState( {description: e.currentTarget.value} )
    //             break
    //         case ('form-seats'):
    //             this.setState( {seats: e.currentTarget.value} )
    //             break
    //         default:
    //             break
    //     }

    // }

    update(property) {

        return e => this.setState({[property]: e.target.value});

    }


    render() {

        return (
            <form onSubmit={this.handleSubmit} className="form-story" id="story-submit">

                <label >Title: </label>
                <input className="form-story-title" type='text' onChange={this.update("title")}></input>
                <br></br>
                <label >Body: </label>
                <input className="form-story-body" type='text' onChange={this.update("body")}></input>

                <button>Submit</button>

            </form>
        )
    }


}

export default StoryForm