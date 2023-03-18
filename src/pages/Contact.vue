<template>
  <div class="contact-component-container">
    <div
      class="contact-container"
     >
      <div class="contact-info">
        <div class="contact address-container">
          <div
            class="gradient-container"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <MobileHome class="m-home m-icon"/>
            <HomeIcon class="home-svg d-icon" />
          </div>
          <p
            class="contact-text address-info"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            11990 Grant Street Suite 550 <br />
            Northglenn, CO 80233
          </p>
        </div>
        <div class="contact number-container">
          <div
            class="gradient-container"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
          <MobilePhone class="m-phone m-icon"/>
            <PhoneIcon class="phone-svg d-icon" />
          </div>
          <p
            class="contact-text phone-info"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            303.439.9808
          </p>
        </div>
        <div class="contact fax-container">
          <div
            class="gradient-container"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
          <MobileFax class="m-fax m-icon"/>
            <FaxIcon class="fax-svg d-icon" />
          </div>
          <p
            class="contact-text fax-info"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            720.887.7105
          </p>
        </div>
        <div class="contact email-container">
          <div
            class="gradient-container"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
          <MobileMail class="m-mail m-icon"/>
            <MailIcon class="email-svg d-icon" />
          </div>
          <p
            class="contact-text email-info"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <a href="mailto:">david@strothercpa.com</a>
          </p>
        </div>
      </div>
    </div>
    <div class="form-container">
        <p class="invitation">We'd love to hear from you!</p>
      <form class="form" ref="form" @submit.prevent="sendMail">
        <div class="form-group">
          <label>Name <span class="red">*</span></label>
          <input type="text" name="senders_name" v-model="name" required />
        </div>
        <div class="form-group">
          <label>Email <span class="red">*</span></label>
          <input name="senders_email" type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label>Phone <span class="tel">(123-456-7890)</span></label>
          <input id="telNo" name="phone" type="tel" v-model="phone" />
        </div>
        <div class="form-group">
          <label>Subject <span class="red">*</span></label>
          <input name="subject" type="text" v-model="subject" required />
        </div>
        <div class="form-group message-container">
          <label>Message <span class="red">*</span></label>
          <textarea
            class="text-area"
            name="message"
            type="text"
            v-model="message"
            required
          >
          </textarea>
        </div>
        <div class="form-group contact-btn-container">
          <button class="submit" type="submit" name="send">Submit</button>
          <p class="required"><span class="red">*</span> fields are required</p>
        </div>
      </form>
    </div>
    <!-- </div> -->
    <div v-if="emailSent" class="modal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50px"
        viewBox="0 0 24 24"
        width="50px"
        fill="hsl(38, 33%, 58%)"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
      <p class="thanks">Thank you!</p>
      <p class="message-sent">Your message has been received.</p>
      <button @click="handleClose" class="close-modal">Close</button>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import MobileHome from '~/assets/icons/mobile-home-contact.svg'
import MobilePhone from '~/assets/icons/mobile-phone-icon.svg'
import MobileFax from '~/assets/icons/mobile-fax-icon.svg'
import MobileMail from '~/assets/icons/mobile-mail-icon.svg'
import HomeIcon from "../assets/icons/home.svg";
import PhoneIcon from "../assets/icons/call.svg";
import FaxIcon from "../assets/icons/fax.svg";
import MailIcon from "../assets/icons/mail.svg";
import router from "vue-router";
import "@/pages/Contact.css";

export default {
  name: "Contact",
  components: {
    MobileFax,
    MobileMail,
    MobilePhone,
    MobileHome,
    HomeIcon,
    PhoneIcon,
    FaxIcon,
    MailIcon,
  },
  data() {
    return {
      name: "",
      subject: "",
      phone: "",
      email: "",
      message: "",
      emailSent: false,
      router,
    };
  },

  methods: {
    sendMail() {
      emailjs
        .sendForm(
          "service_nz43ks7",
          "contact_form",
          this.$refs.form,
          "gfHPOIreHQvxUQUKi"
        )
        .then(
          () => {
            this.emailSent = true;
            this.name = "";
            this.subject = "";
            this.email = "";
            this.message = "";
          },
          (error) => {
            alert("Message Not Sent", error);
          }
        );
    },
    handleClose() {
      this.emailSent = false;
      this.$router.push({ path: "/" });
    },
  },
};
metaInfo: {
  title: "Contact";
}
</script>
