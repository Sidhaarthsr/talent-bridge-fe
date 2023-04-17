import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports.js';
import store from './store'

Amplify.configure(awsconfig);

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')