<template>
  <body class="u-body u-grey-10 u-xl-mode bg" data-lang="en">
    <headerBar />
    <section class="u-clearfix u-section-1" id="sec-1088">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div style="margin-left:40px;margin-top:40px;color:rgb(89, 162, 5);" v-if="disabled === false">
          <h3>Invitation Sent Sucessfully </h3>
        </div>

        <h2 class="u-text u-text-1">
          <span style="font-weight: 700; font-size: 3.75rem;" class="u-text-palette-2-base">Send Invite </span>&nbsp;<span
            style="font-size: 2.25rem;">To Your Friends</span>
        </h2>
        <div class="u-form u-form-1">
          <form class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="email" name="form"
            style="padding: 10px;">
            <div class="u-form-group u-form-name">
              <label style="margin-top:50px; font-size: 30px;" for="name-7b12" class="u-custom-font u-label u-label-1"
                @click="sendInvitation">Email </label>
              <input type="email" v-model="email" placeholder="Please enter the email of the invitee" id="name-7b12"
                name="name" class="u-input u-input-rectangle" required="">
            </div>

            <!-- <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
            <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
            <input type="hidden" value="" name="recaptchaResponse">
            <input type="hidden" name="formServices" value="1340416e1ee91447ae76810cc33d07c0"> -->
          </form>
          <div>
            <button @click="sendInvitation" class="u-btn u-btn-round u-btn-submit u-button-style u-radius-7">Send
              Invite</button>
          </div>
        </div>
      </div>
    </section>
    <footerBar />

  </body>
</template>

<script>
import headerBar from '../components/HeaderBar.vue'
import footerBar from '../components/FooterBar.vue'
import { mapGetters } from 'vuex';
import ApiUtils from '@/utils/ApiUtils';
import { POST } from '@/constants';
import { USER_API, INVITE_API } from '@/constants';
export default {
  name: 'postProject',
  components: {
    headerBar,
    footerBar
  },
  computed: {
    ...mapGetters(['loggedinUser', 'isEmailSent']),
  },
  data() {
    return {
      email: "",
      disabled: true

    }
  },

  //   updated(){
  //    console.log("EMAIL  ********** "+ this.email)
  //   },
  methods: {
    async sendInvitation() {
      const apiUtils = new ApiUtils();
      apiUtils.request(POST, USER_API + INVITE_API, undefined, { email: this.email })
    }
  }

}
</script>

<style scoped>
@import url('../assets/style.css');

.u-section-1 .u-sheet-1 {
  min-height: 564px;

}

.u-section-1 .u-text-1 {
  font-weight: 700;
  margin: 7px 48px 0 647px;
}

.u-section-1 .u-form-1 {
  height: 540px;
  margin: -100px 536px 0 34px;
}

.u-section-1 .u-label-1 {
  font-family: Poppins;
}

.u-section-1 .u-label-2 {
  font-family: Poppins;
}

.u-section-1 .u-label-3 {
  font-family: Poppins;
}

.u-section-1 .u-form-group-4 {
  margin-left: 0;
}

.u-section-1 .u-label-4 {
  font-family: Poppins;
}

.u-section-1 .u-form-group-5 {
  margin-left: 0;
}

.u-section-1 .u-label-5 {
  font-family: Poppins;
}

.u-section-1 .u-btn-1 {
  font-family: Poppins;
  background-image: none;
}

@media (max-width: 1199px) {
  .u-section-1 .u-text-1 {
    margin-right: 34px;
    margin-left: 495px;
  }

  .u-section-1 .u-form-1 {
    width: 570px;
    margin-right: 370px;
    margin-left: 0;
  }

  .u-section-1 .u-btn-1 {
    border-style: solid;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-text-1 {
    margin-left: 275px;
  }

  .u-section-1 .u-form-1 {
    margin-right: 150px;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-text-1 {
    margin-left: 95px;
  }

  .u-section-1 .u-form-1 {
    width: 540px;
    margin-top: -87px;
    margin-right: 0;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-text-1 {
    margin-left: 0;
  }

  .u-section-1 .u-form-1 {
    width: 340px;
  }
}

input {
  background-color: #FFFFFF;
}
</style>