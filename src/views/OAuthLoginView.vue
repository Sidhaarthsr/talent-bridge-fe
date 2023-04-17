<template>
  <div>
    <body class = "u-body u-image u-image-tiles u-xl-mode bg">
      <h1 class="welcome-message">
      Welcome to TalentBridge
    </h1>
    <authenticator @signIn="onSignIn">

    </authenticator>
    </body>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import router from "../router"
import "@aws-amplify/ui-vue/styles.css";
import { Authenticator } from "@aws-amplify/ui-vue";
import { Auth } from '@aws-amplify/auth'
import store from "@/store";
import ApiUtils from "@/utils/ApiUtils";
import { FETCH_USER_BY_OAUTH_API, GET, USER_API, } from "@/constants";

const apiUtils = new ApiUtils();
async function onSignIn() {
  try {
    const user = await Auth.currentAuthenticatedUser()
    const existingUser = await apiUtils.request(GET,
      USER_API + FETCH_USER_BY_OAUTH_API + user.attributes.sub)
    console.log(existingUser);
    //const responseData = await apiUtils.request(PUT, USER_API, existingUser)
    //console.log(responseData);
    if (existingUser) {
      await store.dispatch("userModule/setUserInfo", existingUser)
      router.push("/home")
    } else {
      const oauthAttributes = { email: user.attributes.email, oauthId: user.attributes.sub }
      await store.dispatch("userModule/setUserIdentifiers", oauthAttributes)
      router.push('/user-name')
    }
  } catch (error) {
    console.error('Error getting current authenticated user:', error)
  }
}

onMounted(async () => {
  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log('Mounted... User authenticated:', user)
    onSignIn()
  } catch (error) {
    console.error('Error getting current authenticated user:', error)
  }
})


</script>

<style>
@import url('../assets/style.css');

</style>