<template>
  <div class="product">
    <div class="popular">
      <h3 class="product__title">Phổ biến</h3>
      <div class="product__lists grid__row justify-space-between">
        <div class="product__items" v-for="(item,index) in popular" :key="index">
          <img
            src="../../../assets/img/product/cao_pax.jpg"
            alt=""
            class="product__image"
          />
          <a href="" class="product__link">
            <h4 class="product__name">Cáo Pax</h4>
            <span class="product__desc">Tiểu thuyết</span>
          </a>
          <span class="product__price"> <a href="">92.800đ</a> </span>
          <div class="product__choose">
            <div class="product-choose__cart">
              <span class="product-choose__add">
                <button class="product-chosse__btn">
                  <i class="fas fa-plus"></i>
                </button>
              </span>
              <div class="product-choose__buynow">
                <a href="" class="product-choose__link">Mua ngay</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            popular:[1,2,3,4,5]
        }
    }
};
</script>

<style>
</style>