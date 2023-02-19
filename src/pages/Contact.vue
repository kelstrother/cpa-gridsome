<template>
  <Layout>
    <div class="contact-container">
      <div class="contact-info">
        <div class="contact address-container">
          <div class="green-container">
            <HomeIcon class="home-svg" />
          </div>
          <p class="address">11990 Grant Street Suite 550 <br> Northglenn, CO 80233</p>
        </div>
        <div class="contact number-container">
          <div class="gold-container">
            <PhoneIcon class="phone-svg" />
          </div>
          <p>303.439.9808</p>
        </div>
        <div class="contact fax-container">
          <div class="gold-container">
            <FaxIcon class="fax-svg" />
          </div>
          <p>720.887.7105</p>
        </div>
        <div class="contact email-container">
          <div class="green-container">
            <MailIcon class="email-svg" />
          </div>
          <p><a href="mailto:">david@strothercpa.com</a></p>
        </div>
      </div>
      <div class="form-container">
        <p class="invitation">We'd love to hear from you!</p>
        <p class="subtext">Fill out this form and we will get back to you as soon as possible.</p>
        <p class="required"><span class="red">* </span>fields are required</p>
        <form 
        class="form"
        ref="form"
        @submit.prevent="sendMail"
        >
          <div class="form-group">
            <label>Name <span class="red">*</span></label>
            <input 
            type="text"
            name="senders_name"
            v-model='name'
            required
            >
          </div>
          <div class="form-group">
            <label>Email <span class="red">*</span></label>
            <input
            name="senders_email"
            type="email"
            v-model='email'
            required
            >
          </div>
          <div class="form-group">
            <label>Phone <span class="tel">(123-456-7890)</span></label>
            <input 
            id="telNo" 
            name="phone" 
            type="tel" 
            v-model='phone'
            />
          </div>
          <div class="form-group">
            <label>Subject <span class="red">*</span></label>
            <input 
            name="subject"
            type="text"
            v-model='subject'
            required
            >
          </div>
          <div class="form-group">
            <label>Message <span class="red">*</span></label>
            <textarea
            class="text-area"
            name="message"
            type="text"
            v-model='message'
            required
            >
            </textarea>
          </div>
          <div class="form-group">
            <button
            class="submit"
            type="submit"
            name="send"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="emailSent" class="modal">
      <svg  xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="rgb(32, 77, 37)"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
      <p class="thanks">Thank you! Your message has sent.</p>
      <button @click="handleClose" class="close-modal">Close</button>
    </div>
  </Layout>
</template>

<script>
import emailjs from '@emailjs/browser'
import HomeIcon from '../assets/home.svg'
import PhoneIcon from '../assets/call.svg'
import FaxIcon from '../assets/fax.svg'
import MailIcon from '../assets/mail.svg'
import router from 'vue-router'
import '@/pages/Contact.css'

export default {
  name: 'Contact',
  components: {
    HomeIcon,
    PhoneIcon,
    FaxIcon,
    MailIcon
  },
  data () {
    return {
      name: '',
      subject: '',
      phone: '',
      email: '',
      message: '',
      emailSent: false,
      router
    }
  },

  methods: {
    sendMail() {
      emailjs.sendForm('service_nz43ks7', 'contact_form', this.$refs.form, 'gfHPOIreHQvxUQUKi')
        .then(() => {
          this.emailSent = true
          this.name = ''
          this.subject = ''
          this.email = ''
          this.message = ''
        }, (error) => {
          alert('Message Not Sent', error)
        });
    },
    handleClose() {
      this.emailSent = false
      this.$router.push({ path: "/" })
    }
  },
}
metaInfo: {
  title: 'Contact'
}
</script>