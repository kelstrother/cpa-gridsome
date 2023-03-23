<template>
  <main>
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
      <div class="divider"></div>
    </section>
    <!-- //!   SERVICES SECTION -->
    <div class="service-title-container">
      <h1
        class="service-section-title"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-in-sine"
      >
        What we do
      </h1>
    </div>
    <ServiceScroller class="service-scroller-component"/>
    <ServiceCarousel class="carousel-component "/>
    <div
      data-aos="fade"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="ease-in-out-quart"
      data-aos-duration="1200"
      data-aos-delay="200"
      class="service-divider"
    ></div>
    <!-- //!   APPROACH SECTION -->
    <section class="approach-container">
      <h1
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-easing="ease-in-cubic"
        class="approach-title"
      >
        Who We Are
      </h1>
      <g-image
        alt="Image that says Our Approach"
        class="approach-img"
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-easing="ease-in-cubic"
        src="~/assets/images/approach.png"
      />
      <summary
        class="summary"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="100"
        data-aos-easing="ease-in-cubic"
      >
        With over 40 years of experience in accounting, we provide expert
        financial guidance to businesses and individuals throughout the country.
        Our experience and knowledge in the industry allows us to provide a wide
        range of accounting and financial services for both individuals and
        businesses, tailored to meet their unique needs and goals.
      </summary>
    </section>
    <!-- //!   TESTIMONIAL SECTION -->
    <div
      data-aos="fade"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="ease-in-out-quart"
      data-aos-duration="1200"
      data-aos-delay="200"
      class="testimonial-divider"
    ></div>
    <section class="testimonial-container">
    <div data-aos="zoom-in"
        data-aos-duration="1400"
        data-aos-easing="ease-in-out-quart" class="quote-svg">
      <QuoteSVG  class="quote-svg" />
    </div>
      <p
        class="test-title"
        data-aos="fade-down-right"
        data-aos-duration="1400"
        data-aos-easing="ease-in-out-quart"
      >
        What they<span>&apos;</span>re saying
      </p>
      <div data-aos="zoom-in"
        data-aos-duration="1400"
        data-aos-easing="ease-in-out-quart" class="mobile-quote-container" >
      <MobileQuote class="mobile-quote" />
      </div>
      <BracketSvg class="bracket-svg" />
    </section>
    <section class="test-box-container snaps-inline">
      <div class="test-1 test-box">
        <article class="testimonial-inner">
          <p class="testimonial-text">
            David is a highly knowledgeable CPA. He has experience heading up
            accounting for private companies plus many years as a public
            accountant helping individuals and businesses. I highly recommend
            David
          </p>
        </article>
        <p class="testimonial-author">- Jerri Morgan</p>
      </div>
      <div class="test-2 test-box">
        <article class="testimonial-inner">
          <p class="testimonial-text">
            David is extremely knowledgeable in the world of financial advising
            and tax preparation. I was having trouble with my tax adviser, and
            in only a matter of minutes he was able to identify where my
            previous accountant made mistakes. He is a wealth of knowledge, I
            recommend him to all.
          </p>
        </article>
        <p class="testimonial-author">
          - Dr. Harrison<span>&apos;</span>s Center of Functional Medicine CFN
        </p>
      </div>
      <div class="test-3 test-box">
        <article class="testimonial-inner">
          <p class="testimonial-text">
            David Strother is the most knowledgeable accountant I have ever run
            across. If you are looking for a tax professional for your
            personally or for your business David is your guy!
          </p>
        </article>
        <p class="testimonial-author">- Ken Davis</p>
      </div>
    </section>
  </main>
</template>

<script>
import Divider from "~/components/Divider.vue";
import "@/pages/Index.css";
import BracketSvg from "~/components/BracketSvg.vue";
import MobileQuote from "~/components/MobileQuote.vue";
import QuoteSVG from "~/components/QuoteSVG.vue";
import Arrow from "../assets/icons/arrow.svg";
import Finance from "../assets/icons/finance.svg";
import Money from "../assets/icons/money.svg";
import Briefcase from "../assets/icons/Briefcase.svg";
import ServiceScroller from "../components/ServiceScroller.vue"
import ServiceCarousel from "~/components/ServiceCarousel.vue";
export default {
  props: {
    immediate: Boolean,
  },
  name: "Home",
  components: {
    ServiceCarousel,
    ServiceScroller,
    MobileQuote,
    Divider,
    Arrow,
    Finance,
    Money,
    Briefcase,
    QuoteSVG,
    BracketSvg,
  },
  metaInfo: {
    title: "Home",
  },
};
</script>
