<template>
  <header id="top" class="header-component-container">
    <a class="skip-to-main" href="#main-content">
  Main Content
  </a>
  
    <MobileLogo />
    <HeaderLogo />
    <MobileNav />
    <DesktopNav />
  </header>
</template>
<script>
import HeaderLogo from "./HeaderLogo.vue";
import MobileLogo from "../components/MobileLogo.vue";
import MobileNav from "~/components/MobileNav.vue";
import DesktopNav from "~/components/DesktopNav.vue";
export default {
  name: "Header",
  components: {
    HeaderLogo,
    MobileLogo,
    DesktopNav,
    MobileNav,
  },
};
</script>
<style>
.header-component-container {
  position: relative;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 11vh;
  padding-inline: 0.75rem;
  box-shadow: 0 1px 10px 10px rgba(0, 0, 0, 0.2);
}
.skip-to-main {
  text-decoration: none;
  font-family: var(--sansFont);
  font-weight: 600;
  padding: var(--ctaTabletPad);
  border: transparent;
  background: var(--lightGrey);
  color: var(--darkWhite);
  position: absolute;
  translate: 15vw -20vh;
  transition: all .45s ease-in-out;
  opacity: 0;
}
.skip-to-main:focus {
  translate: 15vw -2vh;
  opacity: 1;
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! TABLET MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 768px) {
  .header-component-container {
    align-items: flex-end;
    padding: 1rem;
    height: 13vh;
  }
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! 1440px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 1440px) {
  .header-component-container {
    height: 17vh;
  }
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! 1920px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 1920px) {
  .header-component-container {
    height: 14vh;
  }
}
</style>
