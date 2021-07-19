export const selectAllStories = (state) => {
    return Object.values(state.entities.stories)
}

export const selectAllComments = (state) => {
    return Object.values(state.entities.comments)
}

export const selectOneUser = (state) => {
    return Object.values(state.entities.user)[0]
}

export const selectAllFollows = state => {
    let user = Object.values(state.entities.follows.userFollows)
    let story = Object.values(state.entities.follows.storyFollows)

    return user.concat(story)
}