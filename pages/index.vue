<template>
  <div class="bg-gray-100 min-h-screen">
    <Hero2/>
    <!-- <DoublePhotoSection/> -->
    <MeetTheBuddies/>
    <PricingSection/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Hero2 from '~/components/Hero2.vue'
import StatList from '~/components/StatList.vue'
import PhotoSection from '~/components/PhotoSection.vue'
import PricingSection from '~/components/PricingSection.vue'
import DoublePhotoSection from '~/components/DoublePhotoSection.vue'
import MeetTheBuddies from '~/components/MeetTheBuddies.vue'
export default {
  components: {
    Hero,
    Hero2,
    StatList,
    PhotoSection,
    PricingSection,
    MeetTheBuddies,
    DoublePhotoSection
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

html {
  scroll-behavior: smooth;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
