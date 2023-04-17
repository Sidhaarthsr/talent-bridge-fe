<script>
import headerBar from '../components/HeaderBar.vue'
import footerBar from '../components/FooterBar.vue'
export default {
    name: 'faqSection',
    components: {
        headerBar,
        footerBar
    }
}
</script>

<template>
    <body class="u-body u-image u-image-tiles u-xl-mode bg">
        <headerBar />
            <div class="faq-header">
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to commonly asked questions about our product, TalentBridge</p>
            </div>
            <div class="faq-list">
              <div class="faq-item">
                <div class="faq-question">
                  <span class="faq-question-icon">+</span>
                  <h3 class="faq-question-title">What is the process for posting a job on the Freelancer platform?</h3>
                </div>
                <div class="faq-answer">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <span class="faq-question-icon">+</span>
                  <h3 class="faq-question-title">Is it possible to cancel a job after it has been posted on the platform?</h3>
                </div>
                <div class="faq-answer">
                  <p>Please refer to the user manual or contact our support team for assistance.</p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <span class="faq-question-icon">+</span>
                  <h3 class="faq-question-title">How does the payment system work on the platform?</h3>
                </div>
                <div class="faq-answer">
                  <p>We accept all major credit cards and PayPal.</p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <span class="faq-question-icon">+</span>
                  <h3 class="faq-question-title">How can I request payment for completed work on the platform?</h3>
                </div>
                <div class="faq-answer">
                  <p>We accept all major credit cards and PayPal.</p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <span class="faq-question-icon">+</span>
                  <h3 class="faq-question-title">What should I do if I am unable to meet a deadline for a job?</h3>
                </div>
                <div class="faq-answer">
                  <p>We accept all major credit cards and PayPal.</p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <span class="faq-question-icon">+</span>
                  <h3 class="faq-question-title">How can I invite other users to join the Freelancer platform?</h3>
                </div>
                <div class="faq-answer">
                  <p>We accept all major credit cards and PayPal.</p>
                </div>
              </div>
            </div>
    <footerBar />
</body>
</template>

<style scoped>
@import url('../assets/style.css');

.faq {
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 20px;
    text-align: center;
  }
  
  .faq-header {
    margin-top: 0px;
    margin-bottom: 60px;
  }
  
  .faq-header h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .faq-header p {
    font-size: 20px;
    color: #999;
    line-height: 1.5;
  }
  
  .faq-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-bottom: 0px;
  }
  
  .faq-item {
    max-width: 400px;
    text-align: left;
  }
  
  .faq-question {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .faq-question-icon {
    font-size: 36px;
    margin-right: 20px;
    color: #2196f3;
    transition: transform 0.2s ease;
  }
  
  .faq-question-icon:hover {
    transform: rotate(45deg);
  }
  
  .faq-question-title {
    font-size: 24px;
    margin: 0;
    color: #333;
  }
  
  .faq-answer {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    display: none;
    animation: fadeIn 0s ease forwards;
  }
  
  .faq-item:active .faq-answer {
    display: block;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
</style>