<template>
  <div class="index-container">
    <section class="hero-section">
      <g-image
        class="mobile-hero"
        alt="The Capitol Building in Denver."
        src="~/assets/images/mobile-capitol-2.jpg"
        :immediate="true"
      />
      <g-image
        src="~/assets/images/tablet-capitol.jpg"
        class="tablet-hero"
        alt="The Capitol Building in Denver."
        :immediate="true"
      />
      <g-image
        class="hero-img"
        alt="The Capitol Building in Denver."
        src="~/assets/images/capitol-1920.jpg"
        :immediate="true"
      />
      <!-- <g-image
        class="hero-img"
        alt="The Capitol Building in Denver."
        src="~/assets/images/transparent-capitol-1920.png"
        :immediate="true"
      /> -->
      <div class="hero-text-container">
        <div class="inside-hero-container">
          <div class="mobile-slogan">
            <p class="m-beyond">Beyond</p>
            <p class="m-the">the</p>
            <p class="m-numbers">Numbers</p>
          </div>
          <div class="headline">
            <p class="beyond">
              Beyond<span class="the">the</span
              ><span class="numbers">Numbers</span>
            </p>
          </div>
          <div class="saying">
            <p class="phrase">
              Ensuring <i class="you">you</i> & your
              <i class="business">business</i><br />
              get the results you deserve.
            </p>
          </div>
        </div>
        <g-link class="hero-link" to="/contact">
          <button class="hero-btn">
            Contact Us!
          </button>
        </g-link>
      </div>
    </section>
    <!-- //!   SERVICES SECTION -->
    <section id="main-content">
      <ServiceScroller class="service-scroller-component" />
      <!-- //!   APPROACH SECTION -->
      <ApproachSection />
      <!-- //!   TESTIMONIAL SECTION -->
      <TestimonialScroller />
    </section>
  </div>
</template>

<script>
import TestimonialScroller from "../components/TestimonialScroller.vue";
import Divider from "~/components/Divider.vue";
import "@/pages/Index.css";
import MobileQuote from "~/components/MobileQuote.vue";
import QuoteSVG from "~/components/QuoteSVG.vue";
import Arrow from "../assets/icons/arrow.svg";
import ServiceScroller from "../components/ServiceScroller.vue";
import ApproachSection from "../components/ApproachSection.vue";
// import ServiceCarousel from "~/components/ServiceCarousel.vue";
export default {
props: {
    immediate: Boolean,
  },
  name: "Home",
  components: {
    ApproachSection,
    TestimonialScroller,
    ServiceScroller,
    MobileQuote,
    Divider,
    Arrow,
    QuoteSVG,
  },
  metaInfo: {
    title: "Home",
    description:
    "Main page for Denver based Certified Public Accountant firm, Strother CPA",
  },
};
</script>
