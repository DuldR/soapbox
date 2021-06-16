export const getAllFollows = (userId) => {

    return $.ajax({
        method: "GET",
        url: `api/users/${userId}/follows`
    })

}

// Can use a form data here
export const createFollow = (follow) => {

    return $.ajax({
        method: "POST",
        url: "api/follows",
        data: follow,
    })

}

export const destroyComment = (followId) => {

    return $.ajax({
        method: "DELETE",
        url: `api/follows/${followId}`
    })

}