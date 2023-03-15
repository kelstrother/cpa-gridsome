<template>
  <div class="layout">
    <header class="header">
      <MobileLogo class="mobile-logo" />
      <HeaderSvg class="desktop-logo" />
      <MobileNav />
      <DesktopNav />
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
        <small class="copyright"
          >&copy; Copyright {{ new Date().getFullYear() }}, David Strother CPA. All Rights
          Reserved</small
        >
      </footer>
    </section>
  </div>
</template>
<script>
import "~/layouts/MainLayout.css";
import HeaderSvg from "~/components/HeaderSvg.vue";
import MobileLogo from "../components/MobileLogo.vue";
import MobileNav from "~/components/MobileNav.vue";
import DesktopNav from "~/components/DesktopNav.vue";
export default {
  name: "MainLayout",
  components: {
    DesktopNav,
    MobileLogo,
    HeaderSvg,
    MobileNav,
  },
};
</script>
