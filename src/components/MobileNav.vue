
<template>
  <div class="mobile-nav-container">
    <button class="nav-btn" @click.prevent="togglePressed">
      <svg fill="#565656" class="burger" viewBox="0 0 100 100" width="40">
        <rect
          :id="this.isPressed ? 'open' : ''"
          class="line"
          :class="this.isPressed ? 'open-top' : 'close-top'"
          width="80"
          height="7"
          x="10"
          :y="this.isPressed ? '45' : '25'"
          rx="5"
        ></rect>
        <rect
          :id="this.isPressed ? 'open' : ''"
          class="line"
          :class="this.isPressed ? 'open-middle' : 'close-middle'"
          width="80"
          height="7"
          x="10"
          y="45"
          rx="5"
        ></rect>
        <rect
          :id="this.isPressed ? 'open' : ''"
          class="line"
          :class="this.isPressed ? 'open-bottom' : 'close-bottom'"
          width="80"
          height="7"
          x="10"
          :y="this.isPressed ? '45' : '65'"
          rx="5"
        ></rect>
      </svg>
    </button>
    <Transition name="slide-fade">
      <nav v-if="isPressed" class="mobile-nav">
        <g-link
          @click.native="togglePressed"
          exact-active-class="nav__active"
          class="nav__link"
          to="/"
          >Home</g-link
        >
        <g-link
          @click.native="togglePressed"
          exact-active-class="nav__active"
          class="nav__link"
          to="/services"
          >Services</g-link
        >
        <g-link
          @click.native="togglePressed"
          exact-active-class="nav__active"
          class="nav__link"
          to="/about"
          >About</g-link
        >
        <g-link
          @click.native="togglePressed"
          exact-active-class="nav__active"
          class="nav__link"
          to="/resources"
          >Resources</g-link
        >
        <g-link
          @click.native="togglePressed"
          exact-active-class="nav__active"
          class="nav__link"
          to="/contact"
          >Contact</g-link
        >
      </nav>
    </Transition>
  </div>
</template>
<script>
export default {
  name: "MobileNav",
  data() {
    return {
      isPressed: false,
    };
  },
  methods: {
    togglePressed() {
      this.isPressed = !this.isPressed;
    },
  },
};
</script>
<style scoped>
.nav-btn {
  background: transparent;
  border: transparent;
}
.line {
  /* transition: y .2s ease-in .2s, rotate .2s ease-in, opacity 0ms .2s; */
  transition: y .2s ease-in .2s, rotate .2s ease-in, opacity 0ms .2s;
  transform-origin: center;
}
#open {
  /* transition: y .2s ease-in, rotate .2s ease-in .2s, opacity 0ms .2s; */
  transition: y .2s ease-in, rotate .2s ease-in .2s, opacity 0ms .2s;
}
.open-top {
  y: 45;
  rotate: 45deg;
}
.open-middle {
  opacity: 0;
}
.open-bottom {
  y: 45;
  rotate: -45deg;
}
.close-top {
  y: 25;
}
.close-bottom {
  y: 65;
}
.close-top,
.close-middle,
.close-bottom {
  rotate: 0deg;
  opacity: 1;
}
.mobile-nav {
  position: absolute;
  top: 10vh;
  right: 0;
  background-color: hsl(38, 58%, 0%, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 91vh;
  align-items: center;
  justify-content: space-evenly;
  width: 55%;
  opacity: 1;
}
.nav__link {
  text-decoration: none;
  color: hsl(38, 58%, 90%, 0.85);
  font-size: 0.8rem;
  letter-spacing: 1px;
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
@keyframes isPressed {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@media screen and (min-width: 768px) {
  .mobile-nav-container {
    display: none;
  }
}
</style>
