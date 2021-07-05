export const getAllTopics = () => {

    return $.ajax({
        method: "GET",
        url: "api/topics"
    })
}

export const createTopic = (topic) => {
    return $.ajax({
        method: "POST",
        url: "api/topics",
        data: topic
    })
}

export const destroyTopic = (topicId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/topics/${topicId}`
    })
}