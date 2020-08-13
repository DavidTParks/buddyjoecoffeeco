<template>
  <div class="w-full relative mb-8 sm:mb-4 bg-white rounded-lg shadow-lg overflow-hidden">
    <nuxt-link class="cursor-pointer" :to="`/coffees/${product.id}`">
      <!-- <img class="object-cover h-96 sm:h-72 w-full overflow-hidden rounded-lg shadow-lg" :src="product.images[0].src" :alt="product.images[0].altText"> -->
      <img
        class="object-cover h-96 sm:h-72 w-full overflow-hidden"
        :src="
          $shopify.image.helpers.imageForSize(product.variants[0].image, {
            maxWidth: 500,
            maxHeight: 500
          })
        "
        :alt="product.images[0].altText"
      />
    </nuxt-link>
    <div class="py-4 text-center">
      <span
        class="flex items-center absolute top-0 left-0 rounded-full py-2 px-4 bg-gray-900 text-white m-2 shadow text-base"
      >
        <p class>${{ product.variants[0].price }}</p>
      </span>
      <h3
        class="mt-2 text-center text-xl leading-9 font-semibold font-display text-gray-900 truncate"
      >
        {{ product.title }}
      </h3>
    </div>
    <div class="p-4">
    <div class="mt-2 flex flex-col">
      <p class="mb-3">
        Quantity: {{ quantity }} {{ quantity > 1 ? "bags" : "bag" }}
      </p>
      <div class="inline-flex">
        <span class="relative z-0 inline-flex shadow-sm">
          <button
            @click="decrementQuantity"
            type="button"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Previous"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" class="minus w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            @click="incrementQuantity"
            type="button"
            class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Next"
          >
            <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </span>
      </div>
    </div>
    <div class="mt-4 mb-6">
      <label
        for="location"
        class="block text-sm leading-5 font-medium text-gray-700"
        >Type</label
      >
      <select
        v-model="selectedType"
        id="location"
        class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      >
        <option value="Whole Bean" selected>Whole Bean</option>
        <option value="Ground">Ground</option>
      </select>
    </div>
    <div class="flex items-center justify-center">
      <button
        @click="addItemToCart"
        class="flex items-center justify-center w-full text-center rounded-lg bg-gray-800 px-6 py-4 text-base leading-6 font-semibold font-display text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
      >
        ${{quantity * 14.99}} Add To Cart
      </button>
    </div>
    </div>
    <!-- <svg @click="addItemToCart" class="h-8 absolute top-0 right-0 m-2 text-gray-900 fill-current" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg> -->
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: {
    product: Object
  },
  data() {
    return {
      selectedType: "Whole Bean",
      quantity: 1
    };
  },
  methods: {
    addItemToCart(coffee) {
      if (this.selectedType === "Whole Bean") {
        this.$store.dispatch("coffee/addItemToCart", {
          lineItemID: this.product.variants[0].id,
          quantity: this.quantity,
          checkoutID: this.checkout
        });
      } else {
        this.$store.dispatch("coffee/addItemToCart", {
          lineItemID: this.product.variants[1].id,
          quantity: this.quantity,
          checkoutID: this.checkout
        });
      }
    },
    removeItemFromCart() {
      this.$store.dispatch("coffee/removeItemFromCart", {
        lineItemID: this.product.variants[0].id,
        checkoutID: this.checkout
      });
    },
    decrementQuantity() {
      if(this.quantity > 1) {
        this.quantity--;
      }
    },
    incrementQuantity() {
      if(this.quantity < 3) {
        this.quantity++;
      }
    },
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
