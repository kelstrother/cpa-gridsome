<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="hero-section">
      <g-image class="hero-img" alt="Denver Capitol Building" src="~/assets/capitol-2400.png" />
      <div class="hero-text">
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
      <div class="approach">
        <g-image class="heading" src="~/assets/Approach.png" />
      </div>
      <div class="summary-container">
        <p class="summary">With over 40 years of experience in accounting, we  provide expert financial guidance to businesses and individuals throughout the country. Our experience and knowledge in the industry allows us to provide a wide range of accounting and financial services for both individuals and businesses, tailored to meet their unique needs and goals.</p>
      </div>
    </section>
    <div class="service-area">
      <section class="service-container"></section>
      <div class="box-container">
        <div class="service-box">
          <g-image class="service-img service1" src="~/assets/service-1.jpg" fit="cover"/>
          <div class="service-text">
            <section class="title-container">
              <p class="title">A Beginner's Guide to Filing your Taxes</p>
              <p class="date">January 27, 2023</p>
            </section>
            <section class="more">
              <button class="learn-more"></button>
            </section>
          </div>
        </div>
        <div class="service-box">
          <g-image class="service-img service2" src="~/assets/service-2.jpg" fit="cover"/>
        </div>
        <div class="service-box">
          <g-image class="service-img service3" src="~/assets/service-3.jpg" fit="cover"/>
        </div>
      </div>
    </div>


  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.hero-section {
  position: relative;
  height: 85vh;
}
.hero-img {
  width: 100%;
  height: 85vh;
  border: 1px solid blue;
  z-index: -1;
  position: absolute;
}
.hero-text {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  justify-content: space-evenly;
  align-items: center;
  /* z-index: 5; */
}
.inside-hero-container {
  /* border: 1px solid red; */
  height: 50%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  align-items: start;
}
.slogan {
  border: 1px solid white;
  font-size: 3rem;
  display: flex;
  width: fit-content;
  text-align: left;
  flex-direction: column;
  font-family: 'Inter';
}
.beyond {
  font-size: 3rem;
  word-spacing: -10px;
  font-weight: 900;
  color: var(--main-green);
  /* letter-spacing: -3px; */
  z-index: 0;
}
.the {
  z-index: 2;
  /* letter-spacing: -7px; */
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  /* margin-right: 20px; */
}
.numbers {
  letter-spacing: -1px;
  font-weight: 900;
  color: var(--main-gold);
}
.you, .business {
  color: var(--main-green);
  font-size: 1.5rem;
  font-weight: 500;
  font-style: italic;
}
.phrase-container {
  border: 1px solid green;
  justify-content: start;
  align-items: start;
  text-align: left;
}
.phrase {
  letter-spacing: 0.5px;
  color: #fff;
  font-size: 1.2rem;
}
.hero-btn {
  color: #fff;
  margin-top: 20px;
  padding: 1rem 1.2rem;
  border-radius: 8px;
  border: none;
  background-color: goldenrod;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
}
.approach-container {
  display: flex;
  height: 70vh;
  /* margin: 0 auto; */
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  border: 3px solid red;
}
.approach {
  display: flex;
  width: 60vw;
  height: 70%;
}
.heading {
  width: 50%;
  height: 70%;
}
.summary-container {
  display: flex;
  height: 100%;
  width: 40vw;
}
.service-area {
  position: relative;
  background: transparent;
  display: flex;
  height: 20rem;
  width: 100vw;
}
.service-container {
  width: 100vw;
  height: 15rem;
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
.box-container {
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.service-box {
  width: 28%;
  height: 90%;
  background: hsla(198, 33%, 10%, 0.9);
  background: linear-gradient(45deg, hsla(198, 33%, 10%, 0.9) 0%, hsla(198, 35%, 31%, 0.9) 100%);
  background: -moz-linear-gradient(45deg, hsla(198, 33%, 10%, 0.9) 0%, hsla(198, 35%, 31%, 0.9) 100%);
  background: -webkit-linear-gradient(45deg, hsla(198, 33%, 10%, 0.9) 0%, hsla(198, 35%, 31%, 0.9) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#111D22", endColorstr="#335A6B", GradientType=1 );
}
.service-img {
  width: 100%;
  height: 70%;
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
.learn-more {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--main-gold);
  border: none;
}
</style>
