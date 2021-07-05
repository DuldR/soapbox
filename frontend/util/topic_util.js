export const getAllTopics = () => {

    return $.ajax({
        method: "GET",
        url: "api/topics"
    })
}