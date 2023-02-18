<template>
  <Layout>
    <div class="hero-section">
      <g-image class="hero-img" alt="Denver Capitol Building" src="~/assets/capitol-1920.jpg" fit="cover" />
      <div class="hero-text-container">
        <div class="inside-hero-container">
          <div class="headline">
            <p class="beyond">Beyond<span class="the">the</span><span class="numbers">Numbers</span></p>
          </div>
          <div class="saying">
            <p class="phrase">Ensuring <span class="you">you</span> & your <span class="business">business</span><br/> get the results you deserve.</p>
          </div>
          <button class="hero-btn">Schedule A Call</button>
        </div>
      </div>
    </div>
    <section class="approach-container">
        <g-image class="heading" src="~/assets/Approach.png" />
        <p class="summary">With over 40 years of experience in accounting, we  provide expert financial guidance to businesses and individuals throughout the country. Our experience and knowledge in the industry allows us to provide a wide range of accounting and financial services for both individuals and businesses, tailored to meet their unique needs and goals.</p>
    </section>
    <!-- //!   SERVICES SECTION -->
    <div class="services-container">
      <div class="service-box-container">
        <div id="service-1" class="services-box">
          <p class="service-text">Services</p>
          <Money />
          <p class="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt praesentium repellat?</p>
        </div>
        <div id="service-2" class="services-box">
          <p class="service-text">Services</p>
          <Finance />
          <p class="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt praesentium repellat?</p>
        </div>
        <div id="service-3" class="services-box">
          <p class="service-text">Services</p>
          <Briefcase />
          <p class="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas quia recusandae ipsa aperiam neque aliquam dicta, nesciunt praesentium repellat?</p>
        </div>
      </div>
      <g-link to="/services">
        <button class="services-link">All Services</button>
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


  </Layout>
</template>

<script>
import Arrow from '../assets/arrow.svg'
import Finance from '../assets/finance.svg'
import Money from '../assets/money.svg'
import Briefcase from '../assets/Briefcase.svg'
export default {
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

<style>
.hero-section {
  position: relative;
  height: 86vh;
  /* border: 2px solid green; */
}
.hero-img {
  max-width: 100%;
  height: 86vh;
  z-index: -1;
  position: absolute;
}
.hero-text-container {
  display: grid;
  grid-template-columns: 1fr .85fr 3fr 1fr;
  grid-template-rows: 1.5fr 3fr 2fr;
}
.inside-hero-container {
  grid-column: 3/4;
  grid-row: 2/3;
  margin-left: 1.2rem;
}
.beyond {
  font-size: 4rem;
  letter-spacing: -2.5px;
  font-weight: 900;
  color: var(--mainGreen);
  z-index: 0;
}
.the {
  z-index: 2;
  font-size: 2.25rem;
  font-weight: 200;
  color: #fff;
}
.numbers {
  letter-spacing: -2.5px;
  font-weight: 900;
  color: var(--mainGold);
  text-shadow: 1px 2px 3px rgba(0,0,0,.15);
}
.you, .business {
  color: var(--mainGreen);
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
}
.phrase {
  text-shadow: 1px 1px 1px rgba(0,0,0,.15);
  letter-spacing: .01rem;
  color: #fff;
  font-size: 1.5rem;
}
.hero-btn {
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,.15);
  letter-spacing: .04em;
  margin-top: 2rem;
  font-size: 1.25rem;
  padding: var(--ctaPad);
  border-radius: 8px;
  border: none;
  background: rgb(173,130,56);
  background: linear-gradient(140deg, rgb(181, 132, 48) 0%, rgb(223, 181, 108) 100%);
  box-shadow: var(--buttonShadow);
}
.approach-container {
  display: flex;
  height: 50vh;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
}
.heading {
  max-width: 25%;
}
.summary {
  display: flex;
  align-items: center;
  width: 30%;
  line-height: 2;
}
.services-container {
  position: relative;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 30rem;
  width: 100vw;
}
.service-box-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 80%;
  /* padding: 0 10rem; */
}
.services-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  background: var(--boxGradient);
  width: 20%;
  height: 90%;
  line-height: 1.25;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25);

}
#service-1 {

}
#service-2 {

}
#service-3 {

}
.service-description {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 200;
  max-width: 75%;
}
.services-link {
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 10rem;
  height: 3rem;
  border-radius: 8px;
  border: none;
  background: var(--btnGradient);
  color: #fff;
  box-shadow: var(--buttonShadow);
}
.service-backdrop {
  width: 100vw;
  height: 70%;
  position: absolute;
  bottom: 10%;
  z-index: -1;
  background: hsla(0, 0%, 25%, 1);
  background: linear-gradient(135deg, hsla(0, 0%, 25%, 1) 0%, hsla(0, 0%, 15%, 1) 100%);
  background: -moz-linear-gradient(135deg, hsla(0, 0%, 25%, 1) 0%, hsla(0, 0%, 15%, 1) 100%);
  background: -webkit-linear-gradient(135deg, hsla(0, 0%, 25%, 1) 0%, hsla(0, 0%, 15%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#404040", endColorstr="#262626", GradientType=1 );
}
/* .service-area {
  position: relative;
  background: transparent;
  display: flex;
  height: 20rem;
  width: 100vw;
}
.service-container {
  width: 100vw;
  height: 30vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: hsla(0, 0%, 25%, 1);
  background: linear-gradient(45deg, hsla(0, 0%, 25%, 1) 0%, hsla(0, 0%, 15%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(0, 0%, 25%, 1) 0%, hsla(0, 0%, 15%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(0, 0%, 25%, 1) 0%, hsla(0, 0%, 15%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#404040", endColorstr="#262626", GradientType=1 );
}
.section-box-container {
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.service-box {
  width: 25%;
  height: 95%;
  background: hsla(198, 33%, 10%, 0.9);
  background: linear-gradient(135deg, hsla(198, 33%, 10%, 0.9) 0%, hsla(198, 35%, 31%, 0.9) 100%);
  background: -moz-linear-gradient(135deg, hsla(198, 33%, 10%, 0.9) 0%, hsla(198, 35%, 31%, 0.9) 100%);
  background: -webkit-linear-gradient(135deg, hsla(198, 33%, 10%, 0.9) 0%, hsla(198, 35%, 31%, 0.9) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#111D22", endColorstr="#335A6B", GradientType=1 );
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25);
  transition: all .5s ease;
}
.service-box:hover {
  transform: scale(1.02);
}
.service-img {
  width: 100%;
  height: 75%;
  object-fit: cover;
}
.service-text {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-container {
  color: #fff;
  font-family: 'spectral';
  font-weight: 300;
  margin-left: 1rem;
}
.title {
  font-size: .9rem;
}
.date {
  font-size: .75rem;
  font-style: italic;
}
.more {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.arrow-svg {
  cursor: pointer;
  opacity: .8;
}
.service-link :hover {
  opacity: 1;
} */
</style>
