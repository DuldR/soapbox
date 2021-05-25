export const createStory = (story) => {

    return $.ajax({
        method: "POST",
        url: "api/stories",
        data: story
    })

}

export const getStory = (storyId) => {

    return $.ajax({
        method: "get",
        url: `api/stories/${storyId}`
    })

}