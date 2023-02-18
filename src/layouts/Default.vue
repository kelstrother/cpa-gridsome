<template>
  <div class="layout">
    <header class="header">
      <Logo />
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/services">Services</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/contact">Contact</g-link>
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
import Logo from '~/assets/ds-logo-full-curves.svg'
export default {
  components: {
    Logo
  }
}
</script>



<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  font-family: 'Inter';
  font-size: 1rem;
  position: relative;
  min-height: 100vh;
}
.header {
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 1rem;
  height: 14vh;
  box-shadow: 0 1px 10px 10px rgba(0,0,0,.2);
}
.logo-svg {
  margin-left: 20px;
}
.nav__link {
  margin-left: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: #565656;
  cursor: pointer;
}
main {
  /* padding-bottom: 250px; */
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
