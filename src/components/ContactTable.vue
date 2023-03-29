<template>
  <div class="contact-table-container">
    <div class="contact-info">
      <div class="contact address-container">
        <div
          class="gradient-container"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <MobileHome class="m-home m-icon" />
          <HomeIcon class="home-svg d-icon" />
        </div>
        <address
          class="contact-text address-info"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          11990 Grant Street Suite 550 <br />
          Northglenn, CO 80233
        </address>
      </div>
      <div class="contact number-container">
        <div
          class="gradient-container"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <MobilePhone class="m-phone m-icon" />
          <PhoneIcon class="phone-svg d-icon" />
        </div>
        <p
          class="contact-text phone-info"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          (303)&nbsp; 439-9808
        </p>
      </div>
      <div class="contact fax-container">
        <div
          class="gradient-container"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <MobileFax class="m-fax m-icon" />
          <FaxIcon class="fax-svg d-icon" />
        </div>
        <p
          class="contact-text fax-info"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          (720)&nbsp; 887-7105
        </p>
      </div>
      <div class="contact email-container">
        <div
          class="gradient-container"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <MobileMail class="m-mail m-icon" />
          <MailIcon class="email-svg d-icon" />
        </div>
        <p
          class="contact-text email-info"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          david@strothercpa.com
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MobileHome from "~/assets/icons/mobile-home-contact.svg";
import MobilePhone from "~/assets/icons/mobile-phone-icon.svg";
import MobileFax from "~/assets/icons/mobile-fax-icon.svg";
import MobileMail from "~/assets/icons/mobile-mail-icon.svg";
import HomeIcon from "../assets/icons/home.svg";
import PhoneIcon from "../assets/icons/call.svg";
import FaxIcon from "../assets/icons/fax.svg";
import MailIcon from "../assets/icons/mail.svg";
export default {
  name: "ContactTable",
  components: {
    MobileFax,
    MobileMail,
    MobilePhone,
    MobileHome,
    HomeIcon,
    PhoneIcon,
    FaxIcon,
    MailIcon,
  }
};
</script>
<style scoped>
.contact-table-container {
  display: none;
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //!            780px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 768px) {
  .contact-table-container {
    font-family: var(--serifFont);
    font-weight: 200;
    letter-spacing: 0.25px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid red; */
  /* margin: 0 auto; */
  /* width: max-content; */
  /* height: 65vh; */
}
.contact-info {
  /* border: 1px solid red; */
  border-radius: var(--borderRadius);
  z-index: -2;
  /* padding: 2rem; */
  /* width: 100%; */
  /* height: 85%; */
  background: var(--boxGradient);
  display: grid;
  /* justify-content: center; */
  width: 100%;
  /* align-items: center; */
  gap: 0.5rem;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-rows: 1fr 1fr 1fr 1fr;
  /* grid-template-rows: 1fr; */
  grid-template-columns: 1fr;
  /* box-shadow: var(--mobileBoxShadow); */
  box-shadow: 5px 6px 20px 10px rgba(0, 0, 0, 0.2);
}
.contact {
  border: 1px solid red;
  display: flex;
  gap: .5rem;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  border: 1px groove rgb(255, 255, 255, 0.1);
}
.contact-text {
  text-align: center;
  color: var(--darkWhite);
  font-size: 0.8rem;
}
p a {
  color: var(--darkWhite);
  text-decoration: none;
}
address {
  font-style: normal;
}
.m-icon {
  z-index: 2;
}
.gradient-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border: double 3px transparent;
  border-radius: 50%;
  background-image: var(--boxGradient), var(--btnGradient);
  background-origin: border-box;
  background-clip: content-box, border-box;
  /* display: inline-block; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.15);
}
/* .address-container {
  grid-column: 1;
}
.number-container {
  grid-column: 2;
}
.email-container {
  grid-row: 1;
  grid-column: 3;
}
.fax-container {
  grid-column: 4;
} */
}
</style>
