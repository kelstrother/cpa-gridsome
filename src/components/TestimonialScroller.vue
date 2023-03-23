<template>
  <div class="testimonial-component">
    <div class="testimonial-header">
      <div
        data-aos="zoom-in"
        data-aos-duration="1400"
        data-aos-easing="ease-in-out-quart"
        class="desktop-quote-container"
      >
        <QuoteSVG class="desktop-quote" />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1400"
        data-aos-easing="ease-in-out-quart"
        class="mobile-quote-container"
      >
        <MobileQuote class="mobile-quote" />
      </div>
      <p
        class="testimonial-title"
        data-aos="fade-down-right"
        data-aos-duration="1400"
        data-aos-easing="ease-in-out-quart"
      >
        <em>
          What they<span>&apos;</span>re saying
        </em>
      </p>
    </div>
    <section class="testimonial-scroll-container snaps-inline">
      <article class="testimonial-box-container">
        <div class="testimonial-box">
          <p class="testimonial-text">
            David is a highly knowledgeable CPA. He has experience heading up
            accounting for private companies plus many years as a public
            accountant helping individuals and businesses. I highly recommend
            David
          </p>
        </div>

        <p class="testimonial-author">- Jerri Morgan</p>
      </article>
      <article class="testimonial-box-container">
        <div class="testimonial-box">
          <p class="testimonial-text">
            David is extremely knowledgeable in the world of financial advising
            and tax preparation. I was having trouble with my tax adviser, and
            in only a matter of minutes he was able to identify where my
            previous accountant made mistakes. He is a wealth of knowledge, I
            recommend him to all.
          </p>
        </div>

        <p class="testimonial-author">
          - Dr. Harrison<span>&apos;</span>s Center of Functional Medicine CFN
        </p>
      </article>
      <article class="testimonial-box-container">
        <div class="testimonial-box">
          <p class="testimonial-text">
            David Strother is the most knowledgeable accountant I have ever run
            across. If you are looking for a tax professional for your
            personally or for your business David is your guy!
          </p>
        </div>

        <p class="testimonial-author">- Ken Davis</p>
      </article>
    </section>
  </div>
</template>
<script>
import MobileQuote from "~/components/MobileQuote.vue";
import QuoteSVG from "~/components/QuoteSVG.vue";
import "./TestimonialScroller.css";
export default {
  name: "TestimonialScroller",
  components: {
    MobileQuote,
    QuoteSVG,
  },
};
</script>
