<template>
  <div class="layout">
    <header class="header">
      <MobileLogo class="mobile-logo"/>
      <DesktopLogo class="desktop-logo"/>
        <div class="burger" @click="toggleNav">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>
          <nav :class="['nav', { 'nav-active' : isActive }]">
            <g-link exact-active-class="nav__active" class="nav__link" to="/">Home</g-link>
            <g-link exact-active-class="nav__active" class="nav__link" to="/services">Services</g-link>
            <g-link exact-active-class="nav__active" class="nav__link" to="/about">About</g-link>
            <g-link exact-active-class="nav__active" class="nav__link" to="/resources">Resources</g-link>
            <g-link exact-active-class="nav__active" class="nav__link" to="/contact">Contact</g-link>
          </nav>
    </header>
    <main>
      <slot/>
    </main>
    <section class="footer-container">
      <footer class="footer"></footer>
    </section>
  </div>
</template>


<script>
import MobileLogo from '../components/MobileLogo.vue'
import DesktopLogo from '../components/DesktopLogo.vue'
export default {
  name: 'Layout',
  components: {
    DesktopLogo,
    MobileLogo
  },
  data() {
    return {
      isActive: false,
      linkActive: false,
      }
    },
    methods: {
      toggleNav() {
        this.isActive = !this.isActive
        this.linkActive = !this.linkActive
      },
    }
  }
</script>



<style>
.layout {
  overflow-x: hidden;
  font-family: 'Inter';
  height: 100vh;
}
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  min-height: 6vh;
}
.mobile-logo {
  margin-inline-start: 1rem;
}
.desktop-logo {
  display: none;
}
.burger {
  display: block;
  height: 25px;
  margin-inline-end: 1.5rem;
}
.burger div {
  width: 25px;
  height: 2px;
  background-color: var(--mainGrey);
  margin: 4px;
}
.nav {
  position: absolute;
  top: 6vh;
  right: 0;
  background-color: var(--lightBlue);
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 90vh;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  transform: translateX(100%);
  transition: all .3s ease-in;
}
.nav-active {
  transform: translateX(0);
}
.nav__link {
  text-decoration: none;
  color: var(--mainGrey);
  font-size: .8rem;
  letter-spacing: 1px;
  opacity: 0;
  transition: all .15s .4s ease-in-out;
}
.nav-link-active {
  opacity: 1;
}
@media screen and (min-width: 780px) {
  .burger {
    display: none;
  }
  .mobile-logo {
    display: none;
  }
  .desktop-logo {
    display: block;
    margin-inline-start: 1rem;
  }
  .header {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1rem;
    min-height: fit-content;
    box-shadow: 0 1px 10px 10px rgba(0,0,0,.2);
  }
  .nav {
    flex-direction: row;
    position: static;
    transform: translateX(0);
    background-color: transparent;
    width: 60%;
    height: auto;
    justify-content: space-around;
  }
  .nav__link {
    opacity: 1;
    font-size: .9rem;
    font-weight: 300;
    cursor: pointer;
    display: block;
    position: relative;
  }
  .nav__link::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: var(--lightGrey);
    transition: width .25s ease-in;
  }
  .nav__link:hover::after {
    width: 100%;
  }
  .nav__active {
    color: var(--mainGrey);
    font-weight: 500;
    position: relative;
    /* border-bottom: 2px solid var(--mainGrey); */
  }
  .nav__active::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: var(--mainGrey);
  }
}

.footer-container {
  position: relative;
  background: transparent;
  width: 100vw;
  height: 300px;
  z-index: -2;
}
.footer {
  position: absolute;
  bottom: 0;
  z-index: 5;
  width: 100vw;
  height: 100%;
  background: hsla(198, 33%, 10%, 1);
  background: linear-gradient(45deg, hsla(198, 33%, 10%, 1) 0%, hsla(198, 35%, 31%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(198, 33%, 10%, 1) 0%, hsla(198, 35%, 31%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(198, 33%, 10%, 1) 0%, hsla(198, 35%, 31%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#111D22", endColorstr="#335A6B", GradientType=1 );
}
</style>
