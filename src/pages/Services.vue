<template>
  <Layout>
    <h1>Services</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <div v-if="showModal" class="pop-up">
      <Modal />
    </div>
    <button @click="toggleModal" >Show Me</button>
  </Layout>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  },
  metaInfo: {
    title: 'Services'
  }
}
</script>
<style>
.pop-up {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>