<template>
    <body class="u-body u-image u-image-tiles u-xl-mode bg" data-lang="en">
        <div class="portfolio-wrapper">
            <section style="margin: 50px; border: 2px solid; border-radius: 30px;">
                <div style="margin: 50px;">
                    <div>
                        <h2 style="text-decoration: underline">Add a Portfolio</h2>
                    </div>
                    <div style="margin-top: 40px;">
                        <div>
                            <h5> Content Type</h5>
                        </div>
                        <div style="margin-left: 50px; ">
                            <label style="margin-left: 50px;">
                                <input type="radio" name="content-type" value="ARTICLE" v-model="contentType"> ARTICLE
                            </label>
                            <label style="margin-left: 50px;">
                                <input type="radio" name="content-type" value="CODE" v-model="contentType"> CODE
                            </label>
                            <label style="margin-left: 50px;">
                                <input type="radio" name="content-type" value="OTHERS" v-model="contentType"> OTHERS
                            </label>
                        </div>
                    </div>

                    <div style="margin-top: 40px;">
                        <label for="name">
                            <h5> Title </h5>
                        </label> <br>
                        <input size="80" type="text" id="name" name="name" placeholder="Enter title (max 64 characters)"
                            style="border: 3px solid rgb(187 189 190); border-radius: 20px; padding: 10px; font-size: 16px;"
                            v-model="title">

                    </div>


                    <div style="margin-top: 40px;">
                        <label for="description">
                            <h5> Description</h5>
                        </label><br>
                        <textarea id="description" name="description" rows="8" cols="80"
                            placeholder="Enter description (max 1024 characters)"
                            style="border: 3px solid rgb(187 189 190); border-radius: 20px; padding: 10px; font-size: 16px;"
                            v-model="description"></textarea>

                    </div>

                    <div style="margin-top: 40px;">
                        <label for="sample">
                            <h5> Sample </h5>
                        </label><br>
                        <textarea id="sample" name="sample" rows="8" cols="80"
                            placeholder="Enter sample of your work  (max 2048 characters)"
                            style="border: 3px solid rgb(187 189 190); border-radius: 20px; padding: 10px; font-size: 16px;"
                            v-model="sample"></textarea>

                    </div>

                    <div style="margin-top: 40px; color: aliceblue;">
                        <button class="create-button" type="button" @click="createPortfolio">Submit</button>
                    </div>
                </div>
            </section>
        </div>
    </body>
</template>
  
<script>
import { PORTFOLIO_API, POST } from '@/constants';
import router from '@/router';
import ApiUtils from '@/utils/ApiUtils';
import { mapGetters } from 'vuex';

export default {
    name: 'PortfolioCreator',
    data() {
        return {
            contentType: "",
            title: "",
            description: "",
            sample: "",
            freelancer: "",
            skills: [{ "name": "skill100" }, { "name": "j2ee" }, { "name": "cloud development" }],
            files:[]
        }
    },
    computed: {
        ...mapGetters(['userModule/id']),
        currentUser() {
            return this['userModule/id']
        }
    },
    mounted() {
        this.freelancer = this.currentUser
    },
    methods: {
        async createPortfolio() {
            const apiUtils = new ApiUtils()
            const portfolio = {
                type: this.contentType,
                title: this.title,
                description: this.description,
                sample: this.sample,
                freelancer: this.freelancer,
                skills: this.skills
            }
            console.log(portfolio);

            const responseData = await apiUtils.request(POST, PORTFOLIO_API, portfolio)
            console.log("reached")
            console.log(responseData)
            router.push("/")
        }
    }
};
</script>

<style>
@import url('../assets/style.css');

.create-button {
    margin-left: 0px;
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

.create-button:hover {
    box-shadow: 0 8px #999;
    transform: translateY(-4px);
}

.portfolio-wrapper {
    height: 800px;
    /* set a fixed height */
    overflow-y: auto;
    /* enable vertical scrolling */
}
</style>
 

