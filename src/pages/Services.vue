<template>
  <div class="page-container">
      <!-- <h1>Services</h1> -->
    <ServiceScroller />
    <!-- <Carousel /> -->
  </div>
</template>

<script>
import "/src/pages/Services.css";
import Carousel from "~/components/ServiceCarousel.vue";
import ServiceScroller from '~/components/ServiceScroller.vue'
export default {
  name: "Services",
  components: {
    Carousel,
    ServiceScroller,
  },
  metaInfo: {
    title: "Services",
    description: "An in depth guide to services that Strother CPA offers.",
  },
};
</script>
