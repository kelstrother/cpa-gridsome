<template>
  <div class="layout">
    <header class="header">
      <MobileLogo class="mobile-logo" />
      <HeaderSvg class="desktop-logo" />
      <div class="burger" @click="toggleNav">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
      <nav :class="['nav', { 'nav-active': isActive }]">
        <g-link exact-active-class="nav__active" class="nav__link" to="/">Home</g-link>
        <g-link exact-active-class="nav__active" class="nav__link" to="/services"
          >Services</g-link
        >
        <g-link exact-active-class="nav__active" class="nav__link" to="/about"
          >About</g-link
        >
        <g-link exact-active-class="nav__active" class="nav__link" to="/resources"
          >Resources</g-link
        >
        <g-link exact-active-class="nav__active" class="nav__link" to="/contact"
          >Contact</g-link
        >
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <section class="footer-container">
      <footer class="footer">
        <g-image class="footer-logo" src="../assets/images/footer-logo.png" />
        <div class="footer-about">
          <p class="f-title f-about-title">About Strother CPA</p>
          <p class="f-about-content">
            With over 40 years of experience in accounting, we provide expert financial
            guidance to businesses and individuals throughout the country. Our experience
            and knowledge in the industry allows us to provide a wide range of accounting
            and financial services for both individuals and businesses, tailored to meet
            their unique needs and goals.
          </p>
          <g-link class="f-about-link" to="/about">Learn More</g-link>
        </div>
        <div class="footer-contact">
          <div class="f-contact-top">
            <p class="f-title f-contact-title">Connect With Us</p>
            <p class="f-phone">303.439.9808</p>
            <p class="f-email">david@strothercpa.com</p>
          </div>
          <div class="f-contact-bottom">
            <p class="f-title f-contact-title">Office</p>
            <p class="f-address">
              11990 Grant Street<br />
              Suite 550<br />
              Northglenn, CO 80233
            </p>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import HeaderSvg from '~/components/HeaderSvg.vue'
import MobileLogo from "../components/MobileLogo.vue";
export default {
  name: "Main",
  components: {
    MobileLogo,
    HeaderSvg
  },
  data() {
    return {
      isActive: false,
      linkActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
      this.linkActive = !this.linkActive;
    },
  },
};
</script>

<style>
.layout {
  /* overflow-x: hidden; */
  font-family: "Inter";
  height: 100vh;
}
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  min-height: 10vh;
  box-shadow: 0 1px 20px 10px rgba(0, 0, 0, 0.1);
}
.mobile-logo {
  margin-inline-start: 1rem;
}
.desktop-logo {
  display: none;
}
.burger {
  display: block;
  height: 25px;
  margin-inline-end: 1.5rem;
}
.burger div {
  width: 25px;
  height: 2px;
  background-color: var(--mainGrey);
  margin: 4px;
}
.nav {
  position: absolute;
  top: 6vh;
  right: 0;
  background-color: var(--lightBlue);
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 90vh;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  transform: translateX(100%);
  transition: all 0.3s ease-in;
}
.nav-active {
  transform: translateX(0);
}
.nav__link {
  text-decoration: none;
  color: var(--mainGrey);
  font-size: 0.8rem;
  letter-spacing: 1px;
  opacity: 0;
  transition: all 0.15s 0.4s ease-in-out;
}
.nav-link-active {
  opacity: 1;
}
/*  //! FOOTER SECTION */
.footer-container {
  position: relative;
  width: 100vw;
  height: 35vh;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: var(--boxGradient);
}
/* .footer-logo {
    place-self: center;
    width: 25%;
  }
  .footer-about {
    display: none;
  }
  .f-about-content {
    text-indent: 10px;
    font-size: 10px;
  }
  .f-title {
    color: var(--mainGold);
    font-weight: 500;
    font-size: .8rem;
  }
  .f-about-link {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: .75px;
  }
  .footer-contact {
    display: flex;
    height: auto;
    justify-content: space-evenly;
    align-items: top;
    color: #fff;
  }
  .f-contact-top, .f-contact-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
  }
  .f-contact-title {
    margin-block-end: .5rem;
  }  */
@media screen and (min-width: 768px) {
  .burger {
    display: none;
  }
  .mobile-logo {
    display: none;
  }
  .desktop-logo {
    display: block;
    margin-inline-start: 1rem;

  }
  .header {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1rem;
    min-height: fit-content;
    box-shadow: 0 1px 10px 10px rgba(0, 0, 0, 0.2);
  }
  .nav {
    flex-direction: row;
    position: static;
    transform: translateX(0);
    background-color: transparent;
    width: 60%;
    height: auto;
    justify-content: space-around;
  }
  .nav__link {
    opacity: 1;
    font-size: 0.9rem;
    font-weight: 300;
    cursor: pointer;
    display: block;
    position: relative;
  }
  .nav__link::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: var(--lightGrey);
    transition: width 0.25s ease-in;
  }
  .nav__link:hover::after {
    width: 100%;
  }
  .nav__active {
    color: var(--mainGrey);
    font-weight: 500;
    position: relative;
  }
  .nav__active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: var(--mainGrey);
  }
  .footer {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 8fr 1fr;
    padding-inline: 1rem;
    font-size: 0.8rem;
    place-items: center;
    gap: 2rem;
    color: #fff;
  }
  .footer-logo {
    grid-row: 2/3;
    grid-column: 1;
  }
  .footer-about {
    grid-row: 2/3;
    grid-column: 2;
    display: flex;
    flex-direction: column;
    height: 60%;
    max-width: 50%;
    align-items: flex-start;
    justify-content: space-between;
  }
  .f-title {
    color: var(--mainGold);
    font-weight: 600;
    font-size: 0.9rem;
  }
  .f-about-link {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
  .footer-contact {
    grid-row: 2/3;
    grid-column: 3;
    line-height: 1.5;
  }
  .f-contact-top {
    margin-block-end: 2rem;
  }
  .f-contact-title {
    margin-block-end: 1rem;
  }
}
</style>
