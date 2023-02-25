<template>
  <Main>
  <Transition name="page">
    <router-view />
  </Transition>
  </Main>
</template>

<script>
import Main from './layouts/Main.vue'
export default {
  components: {
    Main
  },
  metaInfo() {
    return {
     
    }
  }
}
</script>
<style>
  .page-enter-active {
    transition: opacity .4s ease-in-out;
  }
  .page-enter{
    opacity: 0;
  }
</style>
