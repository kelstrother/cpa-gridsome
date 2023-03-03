<template>
  <Main>
    <div class="about-container">
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
  </Main>
</template>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>

<style>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  min-height: 85vh;
  padding-inline: 2rem;
}
.about-content {
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  justify-content: space-between;
  align-items: center;
}
h1 {
  color: var(--mainGrey);
}
.about-img {
  width: 40%;
  height: auto;
  border-radius: 8px;
  box-shadow: var(--btnShadow);
}
p {
  max-width: 500px;
  line-height: 1.5;
}
</style>
