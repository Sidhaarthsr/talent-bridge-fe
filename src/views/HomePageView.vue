<template>
  <body class="u-body u-image u-image-tiles u-xl-mode bg" data-lang="en">
    <div class="home-wrapper">
      <headerBar />
      <nav>
        <ul>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/portfolios">Portfolios</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link v-if="isClient" to="/freelancers">Freelancers</router-link></li>
          <li><router-link to="/create-project">Post Project</router-link></li>
          <li><router-link to="/invite">Invite People</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
          <li><a v-if="isClient"
              href="https://us-east-2.console.aws.amazon.com/cognito/v2/idp/user-pools/us-east-2_Graf8sUxm/users?region=us-east-2#">Admin</a>
          </li>
          <li class="right-nav-li chat-button">
            <button class="" @click="openChat">
              <img src="../assets/chat.png" alt="Chat" class="sign-out-image">
              Chat
            </button>
          </li>
          <li class="right-nav-li">
            <button class="sign-out-button" @click="signOut">
              <img src="../assets/power.png" alt="Sign Out" class="sign-out-image">
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
      <section class="u-clearfix u-section-1" id="sec-8628">
        <div class="flex-container">
          <div style="display: flex; justify-content: center">
            <div style="-justify-content: center" class="u-clearfix u-sheet u-sheet-1">
              <h1 class="u-text u-text-default u-text-1 headline">THE BRIDGE WHERE PROFESSIONALS CONNECT.
              </h1>
              <h6>CONNECT WITH PROFESSIONALS TO GET YOUR WORK DONE</h6>
              <button v-if='is' class="start-button" @click="findFreelancers">GET STARTED</button>
              <UserReport></UserReport>
            </div>
          </div>
        </div>
      </section>
      <footerBar />
    </div>
  </body>
</template>

<script>
import headerBar from '../components/HeaderBar.vue'
import footerBar from '../components/FooterBar.vue'
import UserReport from '../components/UserReport.vue';
import { Auth } from 'aws-amplify'
import { mapGetters } from 'vuex';
import router from '@/router';

export default {
  name: 'landingPage',
  data() {
    return {
      isAdmin: true,
      isClient: false
    };
  },
  components: {
    headerBar,
    footerBar,
    UserReport
  },
  methods: {
    ...mapGetters(['userModule/username']),
    async printState() {
      console.log(this['userModule/username']());
    },
    async signOut() {
      try {
        await Auth.signOut()
        // Redirect user to the home page or login page after sign out
        this.$router.push('/')
      } catch (error) {
        console.log('Error signing out: ', error)
      }
    }, async openChat() {
      router.push('/chat')
    }, async findFreelancers() {
      router.push('/freelancers')
    }
  },
  computed: {
    ...mapGetters(['userModule/role']),
    currentUserRole() {
      return this['userModule/role']
    }
  },
  mounted() {
    const role = this.currentUserRole;
    this.isAdmin = role == 'ADMIN';
    this.isClient = role == 'CLIENT';
  }
}
</script>

<style scoped>
@import url('../assets/style.css');


.home-wrapper {
  height: 850px;
  /* set a fixed height */
  overflow-y: auto;
  /* enable vertical scrolling */
}

h6 {
  margin-left: 155px;
}

.start-button {
  margin-left: 10px;
  height: 40px;
  margin-bottom: 1px;
  width: 200px;
  border-radius: 25px;
  background-color: #1b61ac;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border: none;
}

.start-button:hover {
  box-shadow: 0 8px #999;
  transform: translateY(-4px);
}


.chat-button {
  margin-left: 600px;
}

.sign-out-button {
  min-height: 34px;
  min-width: 130px;
  margin-top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  background-color: #ffffff;
  border: 1px solid #000000;
}

.sign-out-image {
  margin-top: 0.5px;
  width: 20px;
  margin-right: 5px;
}

.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.right-nav-li {
  background-color: #333333;
  color: rgb(73, 71, 71);
  padding: 8px 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
  border: none;
}

nav {
  background-color: #333;
  height: 50px;
  width: 100%;
  align-items: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  align-items: center;
}

li {
  float: left;
  height: 100%;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  height: 100%;
}

li a:hover {
  background-color: #d0cccc;
}

.active {
  background-color: #4CAF50;
}


.nav-link {
  color: rgb(1, 8, 11);
  font-weight: bold;
  font-size: 24px;
}

h1 {
  color: #666262;
}

.add-black {
  color: black
}

.u-section-1 .u-sheet-1 {
  min-height: 438px;
}

.u-section-1 .u-text-1 {
  font-size: 3.75rem;
  margin: 14px auto 0 105px;
}

.u-section-1 .u-text-2 {
  margin: 14px auto 0 142px;
}

.u-section-1 .u-btn-1 {
  border-style: solid;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0px;
  margin: 20px auto 60px 358px;
}

@media (max-width: 1199px) {
  .u-section-1 .u-btn-1 {
    margin-left: 158px;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-btn-1 {
    margin-left: 0;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-text-1 {
    font-size: 3rem;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-text-1 {
    font-size: 2.25rem;
  }

  .u-section-1 .u-text-2 {
    margin-left: 89px;
  }
}
</style>