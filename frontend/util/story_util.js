export const createStory = (story) => {

    return $.ajax({
        method: "POST",
        url: "api/stories",
        data: story,
        contentType: false,
        processData: false
    })

}

export const getStory = (storyId) => {

    return $.ajax({
        method: "GET",
        url: `api/stories/${storyId}`
    })

}

// Might need to set up a filter maybe?
export const getStories = () => {

    return $.ajax({
        method: "GET",
        url: `api/stories/`
    })

}

export const destroyStory = (storyId) => {

    return $.ajax({
        method: "DELETE",
        url: `api/stories/${storyId}`
    })

}

export const updateStory = (story) => {
    return $.ajax({
        method: "PATCH",
        url: `api/stories/${story.id}`,
        data: story
    })
}