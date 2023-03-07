<template>
  <Main>
    <div class="hero-section">
      <g-image
        class="hero-img"
        alt="Denver Capitol Building"
        src="~/assets/capitol-1920.jpg"
        immediate="true"
      />
      <g-image
        class="mobile-hero"
        src="~/assets/images/flatiron-gradient-mobile.jpg"
      />
      <div class="hero-text-container">
        <div class="inside-hero-container">
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
          <button class="hero-btn">
            Schedule A Free Consultation
          </button>
        </div>
      </div>
    </div>
    <!-- //!   APPROACH SECTION -->
    <section class="approach-container">
      <ApproachSvg
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-easing="ease-in-cubic"
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
      <g-link class="service-cta" to="/services">
        <div class="service-link-container">
          <button class="services-link">
            Explore Services
            <span class="material-symbols-outlined arrow">
              double_arrow
            </span>
          </button>
        </div>
      </g-link>
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
      <BracketSvg class="bracket-svg" />
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
            and tax preparation. I was having trouble with my tax adviser, and
            in only a matter of minutes he was able to identify where my
            previous accountant made mistakes. He is a wealth of knowledge, I
            recommend him to all.
          </p>
        </div>
        <p class="testimonial-author">-Dr. Harrison<span>&apos;</span>s Center of Functional Medicine CFN</p>
      </div>
      <div class="test-3 test-box">
        <div class="testimonial-inner">
          <p class="testimonial-text">
            David Strother is the most knowledgeable accountant I have ever run
            across. If you are looking for a tax professional for your
            personally or for your business David is your guy!
          </p>
        </div>
        <p class="testimonial-author">-Ken Davis</p>
      </div>
    </section>
    <!-- <div class="service-area">
      <section class="service-container"></section>
      <div class="section-box-container">
        <div class="service-box">
          <g-image class="service-img service1" src="~/assets/service-1.jpg" fit="cover"/>
          <div class="service-text">
            <section class="title-container">
              <p class="title">A Beginner's Guide to Filing your Taxes</p>
              <p class="date">January 27, 2023</p>
            </section>
            <section class="more">
              <g-link class="service-link" to="/about">
                <Arrow class="arrow-svg" />
              </g-link>
            </section>
          </div>
        </div>
        <div class="service-box">
          <g-image class="service-img service2" src="~/assets/service-2.jpg" fit="contain"/>
          <div class="service-text">
            <section class="title-container">
              <p class="title">A Beginner's Guide to Filing your Taxes</p>
              <p class="date">January 27, 2023</p>
            </section>
            <section class="more">
              <g-link class="service-link" to="/about">
                <Arrow class="arrow-svg" />
              </g-link>
            </section>
          </div>
        </div>
        <div class="service-box">
          <g-image class="service-img service3" src="~/assets/service-3.jpg" fit="contain"/>
          <div class="service-text">
            <section class="title-container">
              <p class="title">A Beginner's Guide to Filing your Taxes</p>
              <p class="date">January 27, 2023</p>
            </section>
            <section class="more">
              <g-link class="service-link" to="/about">
                <Arrow class="arrow-svg" />
              </g-link>
            </section>
          </div>
        </div>
      </div>
    </div> -->
  </Main>
</template>

<script>
import "@/pages/Index.css";
import BracketSvg from "~/components/BracketSvg.vue"
import QuoteSVG from "~/components/QuoteSVG.vue";
import Arrow from "../assets/icons/arrow.svg";
import Finance from "../assets/icons/finance.svg";
import Money from "../assets/icons/money.svg";
import Briefcase from "../assets/icons/Briefcase.svg";
import ApproachSvg from "~/components/ApproachSvg.vue";
export default {
  name: "Home",
  components: {
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
