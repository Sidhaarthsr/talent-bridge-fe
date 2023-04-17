
import { createStore } from 'vuex'
import userModule from './modules/user/index.js';

const store = createStore({
  modules: {
    userModule : userModule
  }
});

export default store;