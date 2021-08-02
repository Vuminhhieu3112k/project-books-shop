<template>
  <main class="all-product grid__row">
      <Category />
      <ShowProducts />
  </main>
</template>

<script>
import ShowProducts from './showProducts/showProducts.vue'
import Category from './Category/Category.vue'

export default {
  components:{
    Category,
    ShowProducts
  }
}
</script>

<style>

</style>