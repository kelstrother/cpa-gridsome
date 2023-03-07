// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import anime from 'animejs/lib/anime.es.js'
import AOS from "aos";
import "aos/dist/aos.css";
// import DefaultLayout from '~/layouts/Default.vue'
import "~/global.css";

export default function(Vue, { router, head, isClient }) {
  head.bodyAttrs = { class: "global-body" };
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Spectral:wght@200;300;400;500;600;700;800&display=swap",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0",
  });
  if (process.isClient) {
    AOS.init({
      offset: 200,
      duration: 900,
    });
  }
  // Set default layout as a global component
  // Vue.component('Layout', DefaultLayout)
}
