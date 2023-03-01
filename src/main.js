// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import AOS from "aos";
import "aos/dist/aos.css";
// import DefaultLayout from '~/layouts/Default.vue'
import "~/global.css";
// import "~/App.vue";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
    "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Spectral:wght@200;300;400;500;600;700;800&display=swap",
  });
  if (process.isClient) {
    AOS.init()
  }
  // Set default layout as a global component
  // Vue.component('Layout', DefaultLayout)
}
