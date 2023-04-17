<template>
  <!-- <body class="u-body u-image u-xl-mode" data-lang="en" style="background-position: 50% 50%; background-attachment: scroll; background-image: url(&quot;images/WhatsAppImage2023-03-27at10.32.06PM.jpeg&quot;);"> -->
  <section style="margin: 50px; border: 2px solid; border-radius: 5px;">
    <div
      style="display:flex flex-direction: column;  flex-wrap: wrap; align-content: space-between; margin-left: 50px;margin-bottom: 50px">
      <div style="padding-top: 20px;">
        <h2 style="text-decoration: underline">Analytics - User Engagement</h2>
      </div>

      <div style="display:flex;flex-direction: column;padding-top: 50px;">

        <div style="display:flex;align-content:space-between">
          <div>
            <h5>FreeLancer level </h5>
          </div>
          <div style="margin-left:100px;">
            <h5>New FreeLancer </h5>
          </div>
        </div>
        <div style="display:flex;align-content:space-between">
          <div>
            <h5>Next evaluation </h5>
          </div>
          <div style="margin-left:107px;">
            <h5>14th April 2023 </h5>
          </div>
        </div>
        <div style="display:flex;align-content:space-between">
          <div>
            <h5>Response time</h5>
          </div>
          <div style="margin-left:115px;">
            <h5>0</h5>
          </div>
        </div>

      </div>


      <div style="display:flex ;align-content:space-around;padding-top: 50px;">
        <div>
          <div class="circle">
            100%
          </div>
          <h6>&nbsp; &nbsp;Response Rate</h6>
        </div>

        <div style="margin-left:30px;">
          <div class="circle">
            67%
          </div>
          <h6>&nbsp; &nbsp; Order Completion</h6>
        </div>

        <div style="margin-left:30px;">
          <div class="circle">
            88%
          </div>
          <h6> &nbsp; &nbsp; On-time Delivery</h6>
        </div>
        <div style="margin-left:30px;">
          <div class="circle">
            95%
          </div>
          <h6> &nbsp; &nbsp; &nbsp;Positive rating</h6>
        </div>

      </div>

    </div>

  </section>
</template>
  
<script>


export default {
  name: 'User-engagement',


};
</script>
 

<style>.circle {
  width: 180px;
  height: 180px;
  line-height: 180px;
  border-radius: 50%;
  font-size: 30px;
  color: #fff;
  text-align: center;
  background: #000
}</style>
