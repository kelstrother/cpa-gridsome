<template>
  <nav class="desktop-nav">
    <g-link exact-active-class="nav__active" class="nav__link" to="/"
      >Home</g-link
    >
    <g-link exact-active-class="nav__active" class="nav__link" to="/services"
      >Services</g-link
    >
    <g-link exact-active-class="nav__active" class="nav__link" to="/about"
      >About</g-link
    >
    <g-link exact-active-class="nav__active" class="nav__link" to="/resources"
      >Resources</g-link
    >
    <g-link exact-active-class="nav__active" class="nav__link" to="/contact"
      >Contact</g-link
    >
  </nav>
</template>
<script>
export default {
  name: "DesktopNav",
};
</script>
<style scoped>
.desktop-nav {
  display: none;
}
@media screen and (min-width: 768px) {
  .desktop-nav {
    display: flex;
    gap: 8.5vw;
    background-color: transparent;
    
  }
  .nav__link {
    color: var(--mainGrey);
    font-size: 0.8rem;
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;
    position: relative;
  }
  .nav__link::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    width: 0;
    height: 1px;
    background: var(--lightGrey);
    transition: width 0.25s ease-in-out;
  }
  .nav__link:hover::after {
    width: 75%;
  }
  .nav__active {
    color: var(--mainGrey);
    font-weight: 400;
    position: relative;
  }
  .nav__active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    width: 75%;
    height: 1px;
    background: var(--lightGrey);
  }
}
@media (min-width: 1440px) {
  .nav__link {
    font-size: .9rem;
  }
}
@media (min-width: 1920px) {
  .nav__link {
    font-size: 1rem;
  }
}
</style>
