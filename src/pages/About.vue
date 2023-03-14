<template>
  <div>
    <div
      class="about-container"
      data-aos="fade"
      data-aos-duration="900"
      data-aos-easing="ease-in-out-quart"
    >
      <h1>About us</h1>
      <div class="about-content">
        <g-image
          class="about-img"
          src="~/assets/images/business-man.jpg"
          blur="0"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae,
          consequuntur rerum illum odit fugit assumenda rem dolores inventore
          iste reprehenderit maxime! Iusto.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "/src/pages/About.css";
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>
