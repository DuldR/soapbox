export const selectAllStories = (state) => {
    return Object.values(state.entities.stories)
}

export const selectOneUser = (state) => {
    return Object.values(state.entities.user)[0]
}