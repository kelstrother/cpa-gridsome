<template>
  <MainLayout>
    <div
      class="contact-container"
      data-aos="fade"
      data-aos-duration="900"
      data-aos-easing="ease-in-out-quart"
    >
      <div class="contact-info">
        <div class="contact address-container">
          <div
            class="gradient-container"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <HomeIcon class="home-svg" />
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
            <PhoneIcon class="phone-svg" />
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
            <FaxIcon class="fax-svg" />
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
            <MailIcon class="email-svg" />
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
      <div class="form-container">
        <p class="invitation">We'd love to hear from you!</p>
        <p class="subtext">
          Fill out this form and we will get back to you as soon as possible.
        </p>
        <p class="required"><span class="red">* </span>fields are required</p>
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
          <div class="form-group">
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
          <div class="form-group">
            <button class="submit" type="submit" name="send">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="emailSent" class="modal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50px"
        viewBox="0 0 24 24"
        width="50px"
        fill="rgb(32, 77, 37)"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
      <p class="thanks">Thank you! Your message has sent.</p>
      <button @click="handleClose" class="close-modal">Close</button>
    </div>
  </MainLayout>
</template>

<script>
import anime from "animejs/lib/anime.es";
import emailjs from "@emailjs/browser";
import HomeIcon from "../assets/icons/home.svg";
import PhoneIcon from "../assets/icons/call.svg";
import FaxIcon from "../assets/icons/fax.svg";
import MailIcon from "../assets/icons/mail.svg";
import router from "vue-router";
import "@/pages/Contact.css";

export default {
  name: "Contact",
  components: {
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
