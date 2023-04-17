<template>
  <body class="u-body u-image u-image-tiles u-xl-mode bg" data-lang="en">
    <HeaderBar></HeaderBar>
    <section>
      <div class="profile-info">
        <div class="card text-center mx-auto">
          <div class="card-header">
            <h1>
              Profile Information
            </h1>
          </div>
          <div v-if="showSuccess" class="notification success">
            Profile updated successfully.
          </div>
          <div v-if="showError" class="notification error">
            An error occurred while updating profile.
          </div>
          <form>
            <br>
            <div class="form-group">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control profile-input" v-model="firstName" id="firstName" aria-describedby="emailHelp"
                placeholder="Enter First Name">
            </div>
            <br>
            <div class="form-group">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control profile-input" id="lastName" v-model="lastName" aria-describedby="emailHelp"
                placeholder="Enter Last Name">
            </div>
            <br>
            <button type="submit" @click.prevent="updateUser" class="update-button">UPDATE</button>
          </form>
        </div>
      </div>
    </section>
    <FooterBar></FooterBar>
  </body>
</template>
  
<script >
import { mapActions, mapGetters } from 'vuex';
import HeaderBar from '../components/HeaderBar.vue'
import FooterBar from '../components/FooterBar.vue'
// import router from '@/router';

export default
  {
    name: 'profileView',
    data() {
      return {
        userName: '',
        firstName: '',
        lastName: '',
        showSuccess: false,
        showError: false,
      }
    },
    computed: {
      ...mapGetters(['userModule/firstName', 'userModule/lastName']),
      currentFirstName() {
        return this['userModule/firstName']
      },
      currentLastName() {
        return this['userModule/lastName']
      }
    },
    mounted() {
      console.log("Setting first and last names");
      this.firstName = this.currentFirstName
      this.lastName = this.currentLastName
      console.log(this.firstName, this.lastName);
    },
    methods: {
      ...mapGetters(['userModule/user']),
      ...mapActions(['userModule/updateUser']),
      async updateUser() {
        const userState = this['userModule/user']()
        console.log(userState)
        userState.firstName = this.firstName
        userState.lastName = this.lastName
        try {
          await this['userModule/updateUser'](userState)
          this.showSuccess = true
        } catch (error) {
          console.error(error)
          this.showError = true
        }
        setTimeout(() => {
          this.resetNotification()
        }, 2000)
        //router.replace({ path: '/profile', query: { t: Date.now() } })
      },
      resetNotification() {
        this.showSuccess = false
        this.showError = false
      }
    },
    components: {
      HeaderBar,
      FooterBar
    }
  }
</script>
  
<style scoped>

.profile-input {
  margin-left: 300px;
}
.notification {
  margin-left: 600px;
  width: 500px;
  padding: 10px;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;
}

.notification.success {
  background-color: #5cb85c;
  color: #fff;
}

.notification.error {
  background-color: #d9534f;
  color: #fff;
}

.notification.fade-out {
  opacity: 0;
}

.update-button {
  margin-left: 600px;
  margin-top: 20px;
  border-radius: 25px;
  background-color: #1b61ac;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px #999;
}

.update-button:hover {
  box-shadow: 0 8px #999;
  transform: translateY(-4px);
}

header {
  overflow-x: hidden;
  scroll-behavior: none;
  text-rendering: optimizeLegibility;
}

h1 {
  color: #666262;
  justify-content: center;
  min-width: 1700px;
}

.masthead {
  max-height: 70px;
  text-align: left;
  overflow: hidden;
}

.container {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
}

.nav {
  padding-bottom: 0px;
  padding-top: 0px;
}

.bi {
  font-size: 25px;
}

.card {
  padding: 0 0;
  margin-top: 50px;
  width: 50%;
}


label {
  display: flex;
  width: 150px;
  /* adjust this to your desired label width */
  text-align: right;
  margin-right: 40px;
  margin-left: 600px;
}

input {
  display: inline-block;
  width: 500px;
  /* adjust this to your desired input width */
  box-sizing: border-box;
  max-width: 100%;
  margin-left: 600px;
}

.card-header {
  margin-bottom: 60px;
  background-color: transparent;
}
</style>
  