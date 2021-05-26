export const selectAllStories = (state) => {
    return Object.values(state.entities.stories)
}