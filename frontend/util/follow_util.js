export const getAllFollows = (userId) => {

    return $.ajax({
        method: "GET",
        url: `api/users/${userId}/follows`
    })

}

export const getFollow = (follow) => {

    return $.ajax({
        method: "GET",
        url: "api/follow",
        data: follow,
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

export const destroyFollow = (followId) => {

    return $.ajax({
        method: "DELETE",
        url: `api/follows`,
        data: followId
    })

}