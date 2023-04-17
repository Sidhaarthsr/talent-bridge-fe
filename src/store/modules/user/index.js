import userMutations from './mutations.js';
import userActions from './actions.js';
import userGetters from './getters.js';

const userModule = {
  namespaced: true,
  state() {
    return {
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        oauthId: '',
        isExistingUser: '',
        role: '',
        username: ''
      }
    }
  },
  mutations: userMutations,
  actions: userActions,
  getters: userGetters
}

export default userModule;