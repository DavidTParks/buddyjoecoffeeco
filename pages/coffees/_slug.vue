<template>
  <div class="min-h-screen pb-24 pt-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <template v-if="$fetchState.pending">
        <content-placeholders class="pt-4" :rounded="true">
          <content-placeholders-img />
        </content-placeholders>
      </template>
      <template v-else-if="$fetchState.error">
        <p>Error while fetching posts: {{ error }}</p>
      </template>
      <template v-else>
        <ul class="flex items-center py-2 sm:py-4 mt-4">
          <li class="breadcrumb-style">
            <nuxt-link class="mr-2" to="/">Home</nuxt-link>
            <svg
              class="h-4 w-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="#4A5568"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li class="breadcrumb-style">
            <nuxt-link class="mr-2" to="/coffee">Coffee</nuxt-link>
            <svg
              class="h-4 w-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="#4A5568"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li class="breadcrumb-style">{{coffee.title}}</li>
        </ul>
        <div class="flex flex-col pt-4 py-12 sm:flex-row">
          <div class="w-full sm:w-1/2">
            <img
              class="h-96 sm:h-144 w-full object-contain bg-gray-100"
              :src="$shopify.image.helpers.imageForSize(coffee.variants[0].image, {maxWidth: 1000, maxHeight: 1000})"
              :alt="coffee.images[0].altText"
            />
          </div>
          <div class="w-full sm:w-1/2 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-0">
            <div class="flex items-center">
              <h3
                class="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:leading-10 text-left"
              >${{coffee.variants[0].price}}</h3>
              <div
                v-if="coffee.availableForSale"
                class="bg-gray-200 text-gray-900 rounded-full py-2 px-4 ml-4 text-xs uppercase tracking-wider"
              >In Stock</div>
            </div>
            <h1
              class="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-left"
            >{{coffee.title}}</h1>
            <p
              class="text-base text-gray-900 mt-4 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-xl lg:mx-0"
            >{{coffee.description}}</p>
            <div class="mt-12 flex flex-col">
              <p class="mb-3">Quantity: {{quantity}} {{ quantity > 1 ? 'bags' : 'bag'}}</p>
              <div class="inline-flex">
                <span class="relative z-0 inline-flex shadow-sm">
                  <button @click="decrementQuantity" type="button" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="minus w-6 h-6"><path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>
                  <button @click="incrementQuantity" type="button" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                    <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                  </button>
                </span>
              </div>
            </div>
            <div class="mt-12 mb-6">
              <label for="location" class="block text-sm leading-5 font-medium text-gray-700">Type</label>
              <select v-model="selectedType" id="location" class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                <option value="Whole Bean" selected>Whole Bean</option>
                <option value="Ground">Ground</option>
              </select>
            </div>
            <div class="flex items-center justify-center flex-col mt-12">
              <button
                @click="addItemToCart"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Add To Cart
              </button>
            </div>
            <div>
            </div>
          </div>
        </div>

      </template>
    </div>
  </div>
</template>


<script>
export default {
  layout: "detail",
  data() {
    return {
      quantity: 1,
      coffee: {},
      collections: [],
      products: [],
      selectedType: 'Whole Bean'
    };
  },
  head() {
    return {
      title: `${this.coffee.title} - Buddy Joe Coffee Co.`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.coffee.description
        },
        //Open Graph og:image:secure_url
        {
          name: "og:title",
          content: `${this.coffee.title} - Buddy Joe Coffee Co.`
        },
        { name: "og:description", content: this.coffee.description },
        { name: "og:image", content: `${this.coffee.images[0].src}` },
        {
          name: "og:image:secure_url",
          content: `${this.coffee.images[0].src}`
        },
        {
          name: "og:url",
          content: `https://buddyjoecoffeeco.com/coffee/${this.$route.params.slug}`
        },
        { name: "og:type", content: "article" }
      ]
    };
  },
  async fetch() {
    this.coffee = await this.$shopify.product.fetch(this.$route.params.slug);
    this.collections = await this.$shopify.collection.fetchAllWithProducts();
    this.products = await this.$shopify.product.fetchAll();
  },
  methods: {
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
    addItemToCart() {
      if(this.selectedType === 'Whole Bean') {
        this.$store.dispatch("coffee/addItemToCart", {
          lineItemID: this.coffee.variants[0].id,
          quantity: this.quantity,
          checkoutID: this.checkout
        });
      } else {
        this.$store.dispatch("coffee/addItemToCart", {
          lineItemID: this.coffee.variants[1].id,
          quantity: this.quantity,
          checkoutID: this.checkout
        });
      }
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