<template>
    <div>
        <template v-if="$fetchState.pending">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pt-6">
                <content-placeholders v-for="n in 9"  :rounded="true" :key="n">
                    <content-placeholders-img />
                    <content-placeholders-heading />
                </content-placeholders>
            </div>
        </template>
        <template v-else-if="$fetchState.error">
            <h3>Error fetching candles</h3>
        </template>
        <template v-else>
            <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:pr-0 pt-6">
                <template v-for="coffee in products">
                    <ProductCard v-if="coffee.availableForSale" class="my-4 sm:my-0" :key="coffee.id" :product="coffee"></ProductCard>
                </template>
            </div>
            <div v-else class="px-6 pt-6">
                <h3>No Products Found</h3>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'product-list',
    data() {
        return {
            products: []
        }
    },
    async fetch() {
      this.products = await this.$shopify.product.fetchAll(5);
    },
}
</script>