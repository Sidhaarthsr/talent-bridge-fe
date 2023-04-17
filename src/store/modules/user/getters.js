const userGetters = {
    user: state => state.user,
    id: state => state.user.id,
    username: state => state.user.username,
    role: state => state.user.role,
    email: state => state.user.email,
    firstName: state => state.user.firstName,
    lastName: state => state.user.lastName
}

export default userGetters;