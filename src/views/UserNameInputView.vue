<script>
import headerBar from '../components/HeaderBar.vue'
import footerBar from '../components/FooterBar.vue'
import router from '../router'
import { mapActions, mapGetters } from 'vuex'
import { getNameFromEmail, parseNameFromEmail } from '@/utils/EmailUtils'

export default {
    name: 'usernameForm',
    components: {
        headerBar,
        footerBar
    },
    data() {
        return {
            username: '',
            firstname: '',
            lastname: ''
        };
    },
    computed: {
        ...mapGetters(['userModule/email']),
        computedDefaultUsername() {
            const email = this['userModule/email']
            return getNameFromEmail(email)
        },
        computedName() {
            const email = this['userModule/email']
            return parseNameFromEmail(email)
        }
    },
    mounted() {
        console.log("mounted")
        this.username = this.computedDefaultUsername
        this.firstname = this.computedName.first
        this.lastname = this.computedName.last
    },
    methods: {
        ...mapActions(['userModule/setUserName', 'userModule/setFirstName', 'userModule/setLastName']),
        async storeUsername() {
            this['userModule/setUserName'](this.username);
            this['userModule/setFirstName'](this.firstname);
            this['userModule/setLastName'](this.lastname);
            router.push('/role');
        },
    }
}
</script>

<template>
    <body class="u-body u-image u-image-tiles u-xl-mode bg" data-lang="en">
        <headerBar />
        <section class="u-clearfix u-section-1" id="sec-8111">
            <div class="u-clearfix u-sheet u-sheet-1">
                <div class="u-form u-form-1">
                    <form @submit.prevent="storeUsername" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                        source="email" name="form" style="padding: 10px;">
                        <div class="u-form-email u-form-group">
                            <label for="email-9a17" class="u-label u-label-1">Username</label>
                            <input type="text" v-model="username" placeholder="Please enter the username" id="email-9a17"
                                name="username"
                                class="u-border-1 u-border-grey-30 u-grey-5 u-input u-input-rectangle u-radius-7 u-input-1"
                                required="true" autofocus="autofocus">
                        </div>
                        <div class="u-form-email u-form-group">
                            <label for="email-9a17" class="u-label u-label-1">First Name</label>
                            <input type="text" v-model="firstname" placeholder="Please enter your first name"
                                id="email-9a17" name="username"
                                class="u-border-1 u-border-grey-30 u-grey-5 u-input u-input-rectangle u-radius-7 u-input-1"
                                required="true" autofocus="autofocus">
                        </div>
                        <div class="u-form-email u-form-group">
                            <label for="email-9a17" class="u-label u-label-1">Last Name</label>
                            <input type="text" v-model="lastname" placeholder="Please enter your last name" id="email-9a17"
                                name="username"
                                class="u-border-1 u-border-grey-30 u-grey-5 u-input u-input-rectangle u-radius-7 u-input-1"
                                required="true" autofocus="autofocus">
                        </div>
                        <button class="u-btn u-btn-round u-btn-submit u-button-style u-radius-7">Submit</button>
                        <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                        <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors
                            then try again. </div>
                    </form>
                </div>
            </div>
        </section>
        <footerBar />
    </body>
</template>


<style scoped>
@import url('../assets/style.css');


.u-section-1 .u-sheet-1 {
    min-height: 400px;
}

.u-section-1 .u-form-1 {
    height: 178px;
    width: 570px;
    margin: 73px auto 60px;
}

.u-section-1 .u-label-1 {
    font-size: 1.875rem;
}

.u-section-1 .u-input-1 {
    background-image: none;
}

@media (max-width: 767px) {
    .u-section-1 .u-form-1 {
        width: 540px;
    }
}

@media (max-width: 575px) {
    .u-section-1 .u-form-1 {
        width: 340px;
    }
}
</style>