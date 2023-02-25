<template>
  <Main>
    <div class="hero-section">
      <g-image class="hero-img" alt="Denver Capitol Building" src="~/assets/capitol-1920.jpg" />
      <g-image class="mobile-hero" src="~/assets/images/flatiron-gradient-mobile.jpg"/>
      <div class="hero-text-container">
        <div class="inside-hero-container">
          <div class="headline">
            <p class="beyond">Beyond<span class="the">the</span><span class="numbers">Numbers</span></p>
          </div>
          <div class="saying">
            <p class="phrase">Ensuring <span class="you">you</span> & your <span class="business">business</span><br/> get the results you deserve.</p>
          </div>
          <button class="hero-btn">Schedule A Free Consultation</button>
        </div>
      </div>
    </div>
    <!-- //!   APPROACH SECTION -->
    <section class="approach-container">
        <g-image class="heading" src="~/assets/Approach.png" />
        <p class="summary">With over 40 years of experience in accounting, we  provide expert financial guidance to businesses and individuals throughout the country. Our experience and knowledge in the industry allows us to provide a wide range of accounting and financial services for both individuals and businesses, tailored to meet their unique needs and goals.</p>
    </section>
    <!-- //!   SERVICES SECTION -->
    <div class="services-container">
      <div class="service-box-container snaps-inline">
        <div id="service-1" class="services-box">
          <p class="service-title">Services</p>
          <Money />
          <p class="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt praesentium repellat?</p>
        </div>
        <div id="service-2" class="services-box">
          <p class="service-title">Services</p>
          <Finance />
          <p class="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt praesentium repellat?</p>
        </div>
        <div id="service-3" class="services-box">
          <p class="service-title">Services</p>
          <Briefcase />
          <p class="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt praesentium repellat?</p>
        </div>
      </div>
      <g-link class="service-cta" to="/services">
        <div class="service-link-container">
          <button class="services-link">Explore Services</button>
        </div>
      </g-link>
      <section class="service-backdrop"></section>
    </div>
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
import '@/pages/Index.css'
import Arrow from '../assets/icons/arrow.svg'
import Finance from '../assets/icons/finance.svg'
import Money from '../assets/icons/money.svg'
import Briefcase from '../assets/icons/Briefcase.svg'
export default {
  name: 'Home',
  components: {
    Arrow,
    Finance,
    Money,
    Briefcase,
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

