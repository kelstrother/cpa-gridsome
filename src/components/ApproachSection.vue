<template>
  <section class="approach-container">
    <h1
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-in-cubic"
      class="approach-title"
    >
      Who We Are
    </h1>
    <p
      class="summary"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="100"
      data-aos-easing="ease-in-cubic"
    >
      With over 40 years of experience in accounting, we provide expert
      financial guidance to businesses and individuals throughout the country.
      Our experience and knowledge in the industry allows us to provide a wide
      range of accounting and financial services for both individuals and
      businesses, tailored to meet their unique needs and goals. Lorem ipsum
      dolor sit amet, consectetur adipisicing elit.
    </p>
    <p
      class="summary"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="100"
      data-aos-easing="ease-in-cubic"
    >
      Aut incidunt magni suscipit repellendus dolore harum voluptatem quo
      expedita repellat sed, laboriosam nesciunt natus veniam consequatur!
      Perferendis excepturi odit inventore quae velit perspiciatis vitae
      possimus quas delectus accusamus ratione consequuntur minima et
      distinctio, totam ducimus amet officiis tempora porro voluptas enim?
    </p>
  </section>
</template>
<script>
export default {
  name: "ApproachSection",
};
</script>
<style scoped>
.approach-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90vw;
  gap: 1.5rem;
  margin-block: 10%;
  align-items: center;
  margin: 0 auto;
}
.approach-title {
  font-family: var(--serifFont);
  font-style: italic;
  font-size: 3rem;
  font-weight: 200;
  width: max-content;
  color: var(--lightGrey);
  margin-inline-end: 6vw;
  margin-block-end: 2rem;
  text-shadow: var(--lgTextShadow);
}
.summary {
  font-family: var(--serifFont);
  font-size: 0.9rem;
  font-weight: 200;
  width: 80%;
  text-indent: 0.7rem;
  color: var(--mainGrey);
  /* margin-block: .75rem; */
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //!            768px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 768px) {
  .approach-container {
    margin-block: 10%;
  }
  .approach-title {
    font-size: 5rem;
  }
  .summary {
    font-size: 1.3rem;
    width: 80%;
  }
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //!           1440px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 1440px) {
  .approach-title {
    font-size: 7rem;
    margin-inline-end: 12vw;
  }
  .summary {
    width: 50%;
    font-size: 1.2rem;
  }
}
/*//*\\\\\\\\////////////////////////////////////*/
/* //!           1920px MEDIA QUERY            */
/* //&\\\\\\\\//\\\\\\\\\\\\\\\\\\//////////////*/
@media screen and (min-width: 1920px) {
  .approach-title {
    margin-inline-end: 8vw;
  }
  .summary {
    width: 35%;
  }
}
</style>
