import React from "react"

class CommentIndex extends React.Component {

    constructor(props) {
        super(props);

        this.listComments = this.listComments.bind(this)
    }

    listComments() {

        // Need to add UI Loading - This can be changed to show no comments correctly after
        if ( Object.keys(this.props.comments).length === 0) {
            return <h1> Loading </h1>
        } else  {

            const comms = this.props.comments.map ((comment, idx) => {
                return <li key={idx}>
                    {comment.title}
                    {comment.body}
                </li>
            })

            return comms

        }


    }

    render () { 

        return (
            <ul>
                {this.listComments()}
            </ul>
        )
    }
}

export default CommentIndex