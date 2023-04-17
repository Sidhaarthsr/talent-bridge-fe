<template>
  <div>
    <portfolio-cards :portfolios="portfolios" />
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import PortfolioCards from "../components/PortfolioCards.vue";
import ApiUtils from "@/utils/ApiUtils";
import { FETCH_FREELANCER_PORTFOLIOS, GET, PORTFOLIO_API } from "@/constants";

export default {
  components: {
    PortfolioCards,
  },
  data() {
    return {
      portfolios: [

      ],
    };
  },
  mounted() {
    this.fetchPortfolios()
  },
  methods: {
    ...mapGetters(['userModule/id']),
    async fetchPortfolios() {
      const apiUtils = new ApiUtils();
      const responseData = await apiUtils.request(GET, PORTFOLIO_API + FETCH_FREELANCER_PORTFOLIOS + this["userModule/id"]())
      console.log(responseData)
      this.portfolios = responseData;
    }
  }
};
</script>
  