export const getComment = (commentId) => {

    return $.ajax({
        method: "GET",
        url: `api/comments/${commentId}`,
    })

}

export const getAllComments = () => {
    return $.ajax({
        method: "GET",
        url: 'api/comments/'
    })
}

export const createComment = (comment) => {

    return $.ajax({
        method: "POST",
        url: "api/comments",
        data: comment
    })

}