export const getComment = (commentId) => {

    return $.ajax({
        method: "GET",
        url: `api/comments/${commentId}`,
    })

}