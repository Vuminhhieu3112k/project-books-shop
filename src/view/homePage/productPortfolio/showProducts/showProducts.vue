<template>
  <div class="main-content">
    <div class="content">
      <form action="" class="form">
        <div class="form__inner grid__row">
          <div class="form-box">
            <i class="fas fa-bars form-box__icon--left form-box__icon"></i>
          </div>
          <div class="form__search">
            <input
              type="text"
              name="main-search"
              id="search"
              placeholder="Tìm kiếm sách bạn muốn tìm..."
            />
          </div>
          <div class="form-box">
            <i class="fas fa-search form-box__icon--right form-box__icon"></i>
          </div>
        </div>
      </form>

      <div class="main-product">
        <div class="product__lists grid__row justify-space-between">
          <div class="product__items"  v-for="(item,index) in product" :key="index">
            <img
              src="../../../../assets/img/product/cao_pax.jpg"
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
  </div>
</template>

<script>
export default {
  data(){
    return {
      product:[0,1,2,3,1,2,3,4]
    }
  }
};
</script>

<style>
</style>