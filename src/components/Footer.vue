<template>
  <footer class="footer">
    <g-image class="footer-logo" src="../assets/images/footer-logo-4.png" />
    <div class="footer-about">
      <p class="f-title f-about-title">About Strother CPA</p>
      <p class="f-about-content">
        With over 40 years of experience in accounting, we provide expert
        financial guidance to businesses and individuals throughout the country.
        Our experience and knowledge in the industry allows us to provide a wide
        range of accounting and financial services for both individuals and
        businesses, tailored to meet their unique needs and goals.
      </p>
      <g-link class="f-about-link" to="/about">Learn More</g-link>
    </div>
    <div class="footer-contact">
      <div class="f-contact-top">
        <p class="f-title f-contact-title">Connect With Us</p>
        <a href="tel:+3034399808" class="f-phone">303.439.9808</a>
        <a href="mailto:david@strothercpa.com" class="f-email">david@strothercpa.com</a>
      </div>
      <div class="f-contact-bottom">
        <p class="f-title f-contact-title">Office</p>
        <address class="f-address">
          11990 Grant Street<br />
          Suite 550<br />
          Northglenn, CO 80233
        </address>
      </div>
    </div>
    <small class="copyright"
      >&copy; Copyright {{ new Date().getFullYear() }}, David Strother CPA. All
      Rights Reserved</small
    >
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 8fr 1fr;
  padding-inline: 1rem;
  place-items: center;
  width: 100vw;
  height: 35vh;
  background: var(--footerGradient);
}
.footer-logo {
  grid-column: 1;
  grid-row: 2;
  width: 40vw;
}
.footer-about {
  display: none;
}
.f-title {
  color: var(--mainGold);
  font-weight: 500;
  font-size: 0.8rem;
}
.footer-contact {
  grid-row: 1 / span 3;
  grid-column: 3;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
  color: var(--textLight);
}
.f-contact-top,
.f-contact-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.f-contact-top {
}
.f-contact-title {
  margin-block-end: 0.5rem;
}
.f-phone,
.f-email {
  line-height: 1.5;
}
.f-phone,
.f-email,
.f-address {
  color: var(--textLight);
  font-size: 0.8rem;
  font-weight: 300;
  
}
.copyright {
  grid-row: 3;
  grid-column: 1 / span 3;
  font-size: 0.6rem;
  color: #9c9c9c;
  margin-block-end: 0.5rem;
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! TABLET MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 768px) {
  .footer {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 8fr 1fr;
    gap: 0.5rem;
    padding-inline: 1rem;
  }
  .footer-logo {
    width: 100%;
  }
  .footer-about {
    grid-row: 1 / span 2;
    grid-column: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 85%;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  .f-about-content {
    text-indent: 10px;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--textLight);
  }
  .f-title {
    color: var(--mainGold);
    font-weight: 600;
    font-size: 0.9rem;
  }
  .f-about-link {
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.75px;
  }
  .f-about-link:hover {
    color: var(--mainGold);
  }
  .footer-contact {
    grid-row: 1 / span 2;
  }
  .copyright {
    font-size: 0.7rem;
  }
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! 1440px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 1440px) {
  .footer {
    gap: 0;
    padding-inline: 2rem;
    padding-block-start: 1rem;
  }
  .footer-about {
    max-width: 45%;
    height: 90%;
  }
  .footer-logo {
    width: 50%;
  }
  .copyright {
    grid-column: 1;
  }
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! 1920px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
</style>
