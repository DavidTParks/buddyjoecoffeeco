<template>
<div>
  {{coffee}}
</div>
</template>



<script>
export default {
  layout: "detail",
  data() {
    return {
      coffee: {},
      products: []
    };
  },
  async fetch() {
    this.coffee = await this.$shopify.product.fetch(this.$route.params.slug);
    this.products = await this.$shopify.product.fetchAll();
  },
  methods: {
    addItemToCart() {
      this.$store.dispatch("coffee/addItemToCart", {
        lineItemID: this.coffee.variants[0].id,
        checkoutID: this.checkout
      });
    },
    removeItemFromCart() {
      this.$store.dispatch("coffee/removeItemFromCart", {
        lineItemID: this.coffee.variants[0].id,
        checkoutID: this.checkout
      });
    }
  },
  computed: {
    checkout() {
      return this.$store.state.coffee.checkoutID;
    },
    cart() {
      return this.$store.state.coffee.cart;
    },
    cartItemsLoading() {
      return this.$store.state.coffee.cartItemsLoading;
    }

  }
};
</script>

<style>
</style>