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
        <article
          class="service-box"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <h2 class="service-name">Tax Preperation</h2>
          <div class="icon-container">
          <MoneyIcon class="icon" />
          </div>
          <p class="service-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo
            fugit modi esse praesentium voluptate exercitationem saepe sapiente
            veritatis.
          </p>
        </article>
        <article
          class="service-box"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
          data-aos-delay="100"
        >
          <h2 class="service-name">Tax Planning</h2>
          <FinanceIcon class="icon" />
          <p class="service-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt
            praesentium.
          </p>
        </article>
        <article
          class="service-box"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
          data-aos-delay="200"
        >
          <h2 class="service-name">Business Consulting</h2>
          <BriefcaseIcon class="icon" />
          <p class="service-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            officia alias distinctio laborum? Quibusdam, exercitationem. Optio,
            quidem fuga.
          </p>
        </article>
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
import FinanceIcon from "~/components/FinanceIcon.vue";
import MoneyIcon from "~/components/MoneyIcon.vue";
import BriefcaseIcon from "~/components/BriefcaseIcon.vue";
export default {
  name: "ServiceScroller",
  components: {
    FinanceIcon,
    MoneyIcon,
    BriefcaseIcon,
  },
};
</script>
