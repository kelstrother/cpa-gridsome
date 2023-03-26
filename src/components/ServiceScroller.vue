<template>
  <div class="service-component">
    <h2
      class="service-title"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-in-sine"
    >
      What we do
    </h2>
    <section class="service-scroller">
      <div class="service-box-container snaps-inline">
        <ServiceCard
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
          data-aos-delay="100"
          heading="Strategic Planning"
          description="We provide peace of mind for you and your business. Whether it's seeking to make informed decisions about investments and financing or other strategic initiatives, we've got you covered."
        >
          <g-image class="service-img" src="../assets/images/planning.jpg" alt="A graph displaying rising and falling financial readings." />
        </ServiceCard>
        <ServiceCard
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
          data-aos-delay="200"
          heading="Business Plans"
          description="Transform your business with our expert advice that will help you streamline operations, increase profitability, and achieve your financial goals."
        >
          <g-image class="service-img" src="../assets/images/consulting.jpg" alt="A business meeting taking place around a long table." />
        </ServiceCard>
        <ServiceCard
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
          heading="Taxes"
          description="Whether you're an individual or a business, we have the expertise to help you navigate the complexities of tax laws and regulations."
        >
          <g-image class="service-img" src="../assets/images/taxes.jpg" alt="Tax documents spread out with a calculator on top." />
        </ServiceCard>
      </div>
    </section>
    <div class="service-link-container">
      <g-link class="service-link" to="/services">
        <button class="service-btn">
          Explore Services
          <span class="material-symbols-outlined arrow">
            double_arrow
          </span>
        </button>
      </g-link>
    </div>
  </div>
</template>
<script>
import "~/components/ServiceScroller.css";
import ServiceCard from "../components/ServiceCard.vue";
import FinanceIcon from "~/components/FinanceIcon.vue";
import MoneyIcon from "~/components/MoneyIcon.vue";
import BriefcaseIcon from "~/components/BriefcaseIcon.vue";
export default {
  name: "ServiceScroller",
  components: {
    ServiceCard,
  },
};
</script>
