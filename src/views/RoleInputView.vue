<template>
  <!-- <body class="u-body u-image u-xl-mode" data-lang="en" style="background-position: 50% 50%; background-attachment: scroll; background-image: url(&quot;images/WhatsAppImage2023-03-27at10.32.06PM.jpeg&quot;);"> -->

  <body class="u-body u-image u-image-tiles u-xl-mode bg" data-lang="en">
    <headerBar />
    <section class="u-clearfix u-section-1" id="sec-77e1">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h3 class="u-text u-text-default u-text-1">Are you a</h3>
        <!-- <a href="https://nicepage.cloud" class="u-border-2 u-border-black u-btn u-btn-round u-button-style u-hover-black u-none u-radius-15 u-text-hover-white u-btn-1">FREELANCER</a>
        <a href="https://nicepage.cloud" class="u-border-2 u-border-black u-btn u-btn-round u-button-style u-hover-black u-none u-radius-15 u-text-hover-white u-btn-2">CLIENT</a> -->
        <button @click="storeRole(freelancer)"
          class="u-border-2 u-border-black u-btn u-btn-round u-button-style u-hover-black u-none u-radius-15 u-text-hover-white u-btn-1">{{
            freelancer }}</button>
        <button @click="storeRole(client)"
          class="u-border-2 u-border-black u-btn u-btn-round u-button-style u-hover-black u-none u-radius-15 u-text-hover-white u-btn-2">{{
            client }}</button>
      </div>
    </section>
    <footerBar />
  </body>
</template>

<script>
import headerBar from '../components/HeaderBar.vue'
import footerBar from '../components/FooterBar.vue'
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import router from '../router'

export default {
  name: 'confirmUsername',
  components: {
    headerBar,
    footerBar
  },
  data() {
    return {
      freelancer: "FREELANCER",
      client: "CLIENT"
    };
  },
  methods: {
    ...mapActions(['userModule/setRole', 'userModule/createUser']),
    ...mapGetters(['userModule/username', 'userModule/role', 'userModule/user']),
    async storeRole(role) {
      this['userModule/setRole'](role);
      const userState = this['userModule/user']()
      this['userModule/createUser'](userState)
      router.push('/home');
    }
  }
}
</script>

<style scoped>
@import url('../assets/style.css');

.u-section-1 .u-sheet-1 {
  min-height: 448px;
}

.u-section-1 .u-text-1 {
  margin: 144px auto 0;
}

.u-section-1 .u-btn-1 {
  border-style: solid;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0px;
  margin: 13px auto 0 369px;
  padding: 9px 10px 11px;
}

.u-section-1 .u-btn-2 {
  border-style: solid;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0px;
  margin: -49px 376px 60px auto;
}

@media (max-width: 1199px) {
  .u-section-1 .u-btn-1 {
    margin-left: 169px;
  }

  .u-section-1 .u-btn-2 {
    margin-right: 176px;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-btn-1 {
    margin-left: 0;
  }

  .u-section-1 .u-btn-2 {
    margin-right: 0;
  }
}
</style>