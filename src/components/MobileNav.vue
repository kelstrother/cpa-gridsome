<template>
  <article class="mobile-nav-container">
    <button class="nav-btn" @click.prevent="togglePressed">
      <span
        :class="this.isPressed ? 'nav-open o-top' : 'nav-closed x-top'"
        class="bar top"
      ></span>
      <span
        :class="this.isPressed ? 'nav-open o-middle' : 'nav-closed x-middle'"
        class="bar"
      ></span>
      <span
        :class="this.isPressed ? 'nav-open o-bottom' : 'nav-closed x-bottom'"
        class="bar bottom"
      ></span>
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
  </article>
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: transparent;
  width: 35px;
  height: 30px;
}
.bar {
  display: inline-block;
  height: 2px;
  width: 100%;
  background: var(--mainGrey);
}

.o-top {
  translate: 0 7.5px;
  rotate: 45deg;
}
.o-middle {
  opacity: 0;
}
.o-bottom {
  translate: 0 -7.5px;
  rotate: -45deg;
}
.nav-closed {
  transition: translate .3s ease-in .3s, rotate .3s ease-in, opacity 0ms linear .2s;
  transform-origin: center;
}
.nav-open {
  transition: translate .3s ease-in, rotate .3s ease-in .3s, opacity 0ms linear .2s;

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
  height: 90vh;
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
  margin-block-end: 2rem;
}
.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  translate: 100% 0;
  opacity: 0;
}
@media screen and (min-width: 768px) {
  .mobile-nav-container {
    display: none;
  }
}
</style>
