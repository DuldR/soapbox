
// This sort of works, but we want to get all comments for a specific story.
// export const getComment = (commentId) => {

//     return $.ajax({
//         method: "GET",
//         url: `api/comments/${commentId}`,
//     })

// }

// This is an index. We dont want.
// export const getAllComments = () => {
//     return $.ajax({
//         method: "GET",
//         url: 'api/comments/'
//     })
// }

export const createComment = (comment) => {

    return $.ajax({
        method: "POST",
        url: "api/comments",
        data: comment
    })

}


export const destroyComment = (commentId) => {

    return $.ajax({
        method: "DELETE",
        url: `api/comments/${commentId}`
    })

}

export const updateComment = (comment) => {
    return $.ajax({
        method: "PATCH",
        url: `api/comments/${comment.id}`,
        data: comment
    })
}