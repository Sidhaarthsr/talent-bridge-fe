const userMutations = {
    setUserIdentifiers(state, info) {
        state.user.email = info.email;
        state.user.oauthId = info.oauthId
    },
    setUserInfo(state, info) {
        state.user = info
    },
    setUserName(state, info) {
        state.user.username = info
    },
    setRole(state, info) {
        state.user.role = info
    },
    setFirstName(state, info) {
        state.user.firstName = info
    },
    setLastName(state, info) {
        state.user.lastName = info
    },
}

export default userMutations;