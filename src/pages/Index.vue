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
      <!-- <ServiceCarousel class="carousel-component " /> -->
      <!-- //!   APPROACH SECTION -->
      <ApproachSection />
      <!-- <section class="approach-container">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-cubic"
          class="approach-title"
        >
          Who We Are
        </h1>
        <p
          class="summary"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
          data-aos-easing="ease-in-cubic"
        >
          With over 40 years of experience in accounting, we provide expert
          financial guidance to businesses and individuals throughout the
          country. Our experience and knowledge in the industry allows us to
          provide a wide range of accounting and financial services for both
          individuals and businesses, tailored to meet their unique needs and
          goals. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p
          class="summary"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
          data-aos-easing="ease-in-cubic"
        >
          Aut incidunt magni suscipit repellendus dolore harum voluptatem quo
          expedita repellat sed, laboriosam nesciunt natus veniam consequatur!
          Perferendis excepturi odit inventore quae velit perspiciatis vitae
          possimus quas delectus accusamus ratione consequuntur minima et
          distinctio, totam ducimus amet officiis tempora porro voluptas enim?
        </p>
      </section> -->
      <!-- //!   TESTIMONIAL SECTION -->
      <TestimonialScroller />
      <!-- <a class="back-to-top" href="#top">^</a> -->
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
  },
};
</script>
