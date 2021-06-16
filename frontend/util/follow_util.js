export const getAllFollows = (userId) => {

    return $.ajax({
        method: "GET",
        url: `api/users/${userId}/follows`
    })

}