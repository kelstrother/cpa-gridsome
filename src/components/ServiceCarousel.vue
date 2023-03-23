<template>
  <div >
    <section class="carousel">
      <button
      data-aos="fade-right"
        data-aos-duration="700"
        data-aos-delay="100"
        data-aos-easing="ease-in-out-quart"
        @click="previousSlide"
        ref="prevButton"
        class="carousel-btn btn-back"
      >
        <ArrowBack />
      </button>
      <div data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine" class="carousel-track-container">
        <div class="carousel-track" ref="track">
          <div class="service-slide current-slide" ref="slide">
            <h2 class="service-name">Tax Preperation</h2>
            <MoneyIcon class="icon" />
            <p class="service-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              reiciendis, harum similique est autem illum omnis asperiores
              nostrum facere culpa.
            </p>
          </div>
          <div class="service-slide" ref="slide">
            <h2 class="service-name">Tax Planning</h2>
            <FinanceIcon class="icon" />
            <p class="service-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              praesentium ex enim unde autem et corporis aut, iste libero
              voluptatem explicabo eligendi.
            </p>
          </div>
          <div class="service-slide" ref="slide">
            <h2 class="service-name">Business Consulting</h2>
            <BriefcaseIcon class="icon" />
            <p class="service-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quisquam quae libero itaque ducimus odio ad, incidunt quidem ex.
            </p>
          </div>
        </div>
      </div>
      <button
      data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="100"
        data-aos-easing="ease-in-out-quart"
        ref="nextButton"
        @click="forwardSlide"
        class="carousel-btn btn-forward"
      >
        <ArrowForward />
      </button>
      <div data-aos="zoom-in"
        data-aos-duration="700"
        data-aos-delay="0"
        data-aos-easing="ease-in-out-quart" @click="navigate" ref="carouselNav" class="carousel-nav">
        <button class="carousel-dot current-slide"></button
        ><button class="carousel-dot"></button
        ><button class="carousel-dot"></button>
      </div>
    </section>
  </div>
</template>
<script>
import "~/components/ServiceCarousel.css";
import ArrowBack from "~/components/ArrowBack.vue";
import ArrowForward from "~/components/ArrowForward.vue";
import MoneyIcon from "~/assets/icons/money.svg";
import FinanceIcon from "~/assets/icons/finance.svg";
import BriefcaseIcon from "~/assets/icons/Briefcase.svg";

export default {
  name: "ServiceCarousel",
  components: {
    ArrowBack,
    ArrowForward,
    MoneyIcon,
    FinanceIcon,
    BriefcaseIcon,
  },
  data() {
    return {};
  },
  mounted() {
    const track = this.$refs.track;
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);
  },
  methods: {
    moveToSlide(track, currentSlide, targetSlide) {
      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    },
    updateDots(currentDot, targetDot) {
      currentDot = this.$refs.carouselNav.querySelector(".current-slide");
      currentDot.classList.remove("current-slide");
      targetDot.classList.add("current-slide");
    },
    //! when click right, move slide to the right
    forwardSlide() {
      const track = this.$refs.track;
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const amountToMove = nextSlide.style.left;
      const currentDot = this.$refs.carouselNav.querySelector(".current-slide");
      const targetDot = currentDot.nextElementSibling;
      this.moveToSlide(track, currentSlide, nextSlide);
      this.updateDots(currentDot, targetDot);
    },
    //! when click left, move slide to the left
    previousSlide() {
      const currentSlide = this.$refs.track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = this.$refs.carouselNav.querySelector('.current-slide')
      const targetDot = currentDot.previousElementSibling;
      this.moveToSlide(this.$refs.track, currentSlide, prevSlide);
      this.updateDots(currentDot, targetDot);
    },
    //! when nav is clicked, move to that slide
    navigate(e) {
      const carouselNav = this.$refs.carouselNav;
      const navDots = Array.from(carouselNav.children);
      const currentDot = this.$refs.carouselNav.querySelector(".current-slide");
      const currentSlide = this.$refs.track.querySelector(".current-slide");
      
      //! what dot was clicked on?
      const targetDot = e.target.closest("button");
      if (!targetDot) return;
      const targetIndex = navDots.findIndex((dot) => dot === targetDot);
      const slides = Array.from(this.$refs.track.children);
      const targetSlide = slides[targetIndex];
      this.moveToSlide(this.$refs.track, currentSlide, targetSlide);
      this.updateDots(currentDot, targetDot);
    },
  },
};
</script>
