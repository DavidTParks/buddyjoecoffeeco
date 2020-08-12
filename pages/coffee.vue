<template>
  <div class="">
    <div class="grid grid-cols-3 gap-8">
      <template v-for="product in products">
        <div class="relative flex flex-col bg-white rounded-b-lg shadow-md" :key="product.id">
          <div
            class="rounded-t-lg overflow-hidden bg-white flex flex-col"
          >
            <img :src="product.images[0].src" />
          </div>
          <div class="p-4 mt-3 flex-1">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ product.title }}
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500">{{product.description}}</p>
          </div>
          <div class="p-4">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                @click="addItemToCart(product)"
                type="button"
                class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition ease-in-out duration-150"
              >
                Add To Cart
              </button>
            </span>
          </div>
          <span
            class="absolute top-0 my-2 mx-2 left-0 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-blue-100 text-blue-800"
          >
            ${{product.variants[0].price}}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  layout: "inner",
  data() {
    return {
      products: []
    };
  },
  async fetch() {
    this.products = await this.$shopify.product.fetchAll(5);
  },
  methods: {
    addItemToCart(product) {
      this.$store.dispatch("coffee/addItemToCart", {
        lineItemID: product.variants[0].id,
        checkoutID: this.checkout
      });
    },
    removeItemFromCart(product) {
      this.$store.dispatch("coffee/removeItemFromCart", {
        lineItemID: product.variants[0].id,
        checkoutID: this.checkout
      });
    }
  },
  computed: {
    checkout() {
      return this.$store.state.coffee.checkoutID;
    },
    cartItemsLoading() {
      return this.$store.state.coffee.cartItemsLoading;
    },
    cart() {
      return this.$store.state.coffee.cart;
    }
  }
};
</script>
