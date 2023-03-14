<template>
  <!-- <MainLayout> -->
  <div class="">
  <div class="hero-section">
    <g-image
      class="mobile-hero"
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
            Ensuring <span class="you">you</span> & your
            <span class="business">business</span><br />
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
  </div>
  <!-- //!   APPROACH SECTION -->
  <section class="approach-container">
    <p class="responsive-approach">Our Approach</p>
    <ApproachSvg
      data-aos="fade-right"
      data-aos-duration="900"
      data-aos-easing="ease-in-cubic"
      class="approach-svg"
    />
    <p
      class="summary"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-in-cubic"
    >
      With over 40 years of experience in accounting, we provide expert
      financial guidance to businesses and individuals throughout the country.
      Our experience and knowledge in the industry allows us to provide a wide
      range of accounting and financial services for both individuals and
      businesses, tailored to meet their unique needs and goals.
    </p>
  </section>
  <!-- //!   SERVICES SECTION -->
  <div class="services-container">
    <div class="service-box-container snaps-inline">
      <div
        id="service-1"
        class="services-box"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <p class="service-title">Services</p>
        <Money />
        <p class="service-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt
          praesentium repellat?
        </p>
      </div>
      <div
        id="service-2"
        class="services-box"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
        data-aos-delay="100"
      >
        <p class="service-title">Services</p>
        <Finance />
        <p class="service-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt
          praesentium repellat?
        </p>
      </div>
      <div
        id="service-3"
        class="services-box"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
        data-aos-delay="200"
      >
        <p class="service-title">Services</p>
        <Briefcase />
        <p class="service-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt
          praesentium repellat?
        </p>
      </div>
    </div>
    <div class="service-link-container">
      <g-link class="service-cta" to="/services">
        <button class="services-link">
          Explore Services
          <span class="material-symbols-outlined arrow">
            double_arrow
          </span>
        </button>
      </g-link>
    </div>
    <section class="service-backdrop"></section>
  </div>
  <section class="testimonial-container">
    <QuoteSVG class="quote-svg" />
    <p
      class="test-title"
      data-aos="fade-down-right"
      data-aos-duration="1400"
      data-aos-easing="ease-in-out-quart"
    >
      What they<span>&apos;</span>re saying
    </p>
    <MobileQuote class="mobile-quote" />
    <BracketSvg class="bracket-svg" />
  </section>
  <div class="test-box-container snaps-inline">
    <div class="test-1 test-box">
      <div class="testimonial-inner">
        <p class="testimonial-text">
          David is a highly knowledgeable CPA. He has experience heading up
          accounting for private companies plus many years as a public
          accountant helping individuals and businesses. I highly recommend
          David
        </p>
      </div>
      <p class="testimonial-author">-Jerri Morgan</p>
    </div>
    <div class="test-2 test-box">
      <div class="testimonial-inner">
        <p class="testimonial-text">
          David is extremely knowledgeable in the world of financial advising
          and tax preparation. I was having trouble with my tax adviser, and in
          only a matter of minutes he was able to identify where my previous
          accountant made mistakes. He is a wealth of knowledge, I recommend him
          to all.
        </p>
      </div>
      <p class="testimonial-author">
        -Dr. Harrison<span>&apos;</span>s Center of Functional Medicine CFN
      </p>
    </div>
    <div class="test-3 test-box">
      <div class="testimonial-inner">
        <p class="testimonial-text">
          David Strother is the most knowledgeable accountant I have ever run
          across. If you are looking for a tax professional for your personally
          or for your business David is your guy!
        </p>
      </div>
      <p class="testimonial-author">-Ken Davis</p>
    </div>
  </div>
  <!-- </MainLayout> -->
</div>
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
import ApproachSvg from "~/components/ApproachSvg.vue";
export default {
  props: {
    immediate: Boolean,
  },
  name: "Home",
  components: {
    MobileQuote,
    Divider,
    Arrow,
    Finance,
    Money,
    Briefcase,
    QuoteSVG,
    ApproachSvg,
    BracketSvg,
  },
  metaInfo: {
    title: "Home",
  },
};
</script>
