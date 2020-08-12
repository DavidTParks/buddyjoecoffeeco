<template>
  <div>
    <NavBar />
    <nuxt keep-alive />
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
.breadcrumb-style {
    display: flex;
    align-items: center;
    margin-right: .5rem;
    font-size: .875rem;
    color: #4a5568;
}

.rotate {
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
}
</style>