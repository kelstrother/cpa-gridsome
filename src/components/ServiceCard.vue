<template>
  <div class="service-box">
    <h2 class="service-name">{{ heading }}</h2>
    <slot></slot>
    <p class="service-description">
      {{ description }}
    </p>
  </div>
</template>

<script>
import '@/components/ServiceCard.css'
export default {
  name: "ServiceCard",
  props: ["heading", "description"]
};
</script>