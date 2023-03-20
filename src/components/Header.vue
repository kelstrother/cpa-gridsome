<template>
  <header class="header-component-container">
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
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding-inline: 0.75rem;
  box-shadow: 0 1px 10px 10px rgba(0, 0, 0, 0.2);
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //           ! TABLET MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 768px) {
  .header-component-container {
    align-items: flex-end;
    padding: 1rem;
    min-height: 13vh;
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
