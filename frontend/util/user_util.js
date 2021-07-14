export const createUser = (user) => {
    return $.ajax({
        method: "POST",
        url: "api/users/",
        data: user
    })
}


export const getUsers = () => {
    return $.ajax({
        method: "GET",
        url: "api/users/"
    })
}