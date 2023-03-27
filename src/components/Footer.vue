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
        <a href="tel:+3034399808" class="f-phone">(303)&nbsp; 439-9808</a>
        <a href="mailto:david@strothercpa.com" class="f-email"
          >david@strothercpa.com</a
        >
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
    <a class="back-to-top" href="#top"><Arrow class="top-arrow"/></a>
    <small class="copyright"
      >&copy; Copyright {{ new Date().getFullYear() }}, David Strother CPA. All
      Rights Reserved</small
    >
  </footer>
</template>
<script>
import Arrow from "~/assets/icons/arrow.svg";
export default {
  name: "Footer",
  components: {
    Arrow,
  },
};
</script>
<style scoped>
.footer {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 8fr 1fr;
  padding-inline: 3vw;
  padding-block: 5vw 0vw;
  gap: 2vw;
  place-items: center;
  background: var(--footerGradient);
}
.footer-logo {
  grid-column: 1;
  grid-row: 2;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
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
  color: var(--darkWhite);
}
.f-contact-top,
.f-contact-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.f-contact-title {
  font-size: 0.9rem;
  margin-block-end: 0.25rem;
}
.f-phone,
.f-email {
  line-height: 1.25;
}
.f-phone,
.f-email,
.f-address {
  font-style: normal;
  font-family: var(--serifFont);
  color: var(--darkWhite);
  font-size: 0.7rem;
  font-weight: 200;
}
.back-to-top {
  position: absolute;
  top: 70%;
  left: 2vw;
  display: grid;
  place-items: center;
}
.top-arrow {
  fill: rgba(183, 183, 183, 0.3);
  rotate: -90deg;
  width: 40px;
}
.copyright {
  grid-row: 3;
  grid-column: 1 / span 3;
  font-family: var(--serifFont);
  font-size: 0.6rem;
  color: var(--xLightGrey);
  margin-block-end: 1.5vw;
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! TABLET MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media (min-width: 768px) {
  .footer {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 8fr 1fr;
  }
  .footer-about {
    grid-row: 1 / span 2;
    grid-column: 2;
    display: flex;
    flex-direction: column;
    max-width: 35vw;
    gap: 2.5vw;
    align-items: flex-start;
  }
  .f-about-content {
    text-indent: 10px;
    font-size: 0.9rem;
    font-family: var(--serifFont);
    font-weight: 200;
    color: var(--darkWhite);
  }
  .f-title {
    font-weight: 600;
    font-size: 1rem;
  }
  .f-about-link {
    text-decoration: none;
    color: var(--darkWhite);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.75px;
  }
  .f-about-link:hover {
    color: var(--mainGold);
  }
  .footer-contact {
    grid-row: 1 / span 2;
  }
  .f-phone,
  .f-email,
  .f-address {
    font-size: 0.9rem;
  }
  .copyright {
    font-size: 0.7rem;
    grid-column: 2 / span 3;
    place-self: end;
    /* width: max-content; */
  }
  .back-to-top {
    top: 80%;
    left: 2vw;
  }
  .top-arrow {
    width: 55px;
  }
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! 1440px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media (min-width: 1440px) {
  .footer {
    gap: 0;
  }
  .footer-logo {
    max-width: 250px;
  }
  .footer-about {
    max-width: 30vw;
  }
  .f-about-content {
    font-size: 0.97rem;
  }
  .f-title {
    font-size: 1rem;
  }
  .f-phone,
  .f-email,
  .f-address {
    font-size: 0.9rem;
  }
  .copyright {
    margin-block-end: 1vw;
  }
  .back-to-top {
    left: 4vw;
    top: 5%;
  }
  .top-arrow {
    width: 55px;
  }
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! 1920px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media (min-width: 1920px) {
  .footer {
    padding-inline: 1rem;
    padding-block: 2vw 0vw;
  }
  .f-about-content {
    font-size: 1rem;
  }
  .back-to-top {
    left: 1vw;
    top: 80%;
  }
}
</style>
