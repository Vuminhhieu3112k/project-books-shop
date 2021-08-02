<template>
  <div class="grid">
      <div class="banner">
          <img src="../../../assets/img/banner.png" alt="" class="banner__image">
      </div>
      <Service />
      <Popular />
      <productPortfolio />
  </div>
</template>


<script>
import Popular from './popular/popular.vue'
import Service from './service/service.vue'
import productPortfolio from './productPortfolio/productPortfolio.vue'
export default {
  components:{
    Service,
    Popular,
    productPortfolio
  }
}
</script>

<style>

</style>