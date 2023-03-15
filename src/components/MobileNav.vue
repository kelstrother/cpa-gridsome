<template>
  <div class="mobile-nav-container">
    <div class="burger" @click="toggleNav">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
    <nav :class="['mobile-nav', { 'nav-active': isActive }]">
      <g-link
        @click.native="toggleNav"
        exact-active-class="nav__active"
        class="nav__link"
        to="/"
        >Home</g-link
      >
      <g-link
        @click.native="toggleNav"
        exact-active-class="nav__active"
        class="nav__link"
        to="/services"
        >Services</g-link
      >
      <g-link
        @click.native="toggleNav"
        exact-active-class="nav__active"
        class="nav__link"
        to="/about"
        >About</g-link
      >
      <g-link
        @click.native="toggleNav"
        exact-active-class="nav__active"
        class="nav__link"
        to="/resources"
        >Resources</g-link
      >
      <g-link
        @click.native="toggleNav"
        exact-active-class="nav__active"
        class="nav__link"
        to="/contact"
        >Contact</g-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "MobileNav",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style scoped>
.mobile-nav-container {
  /* overflow-x: hidden; */
}
.burger {
  display: block;
  height: 25px;
  margin-inline-end: 1rem;
}
.burger div {
  width: 25px;
  height: 2px;
  background-color: var(--mainGrey);
  margin: 4px;
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
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.4s ease-in-out;
}
.nav-active {
  transform: translateX(0);
  opacity: 1;
}
.nav__link {
  text-decoration: none;
  color: hsl(38, 58%, 90%, 0.85);
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: all 0.15s ease-in-out;
}
@media screen and (min-width: 768px) {
  .mobile-nav-container {
    display: none;
  }
}
</style>
