<template>
  <div class="grid container">
    <div class="main-content">
      <div class="product-detail grid__row">
        <div class="product-detail__image">
          <img src="../../../assets/img/product_detail/1.jpg" alt="" />
        </div>
        <div class="product-detail__info">
          <h4 class="product-info__title">Tên sản phẩm tự sign</h4>

          <ul class="product-info__attribute">
            <li class="product-info__item">
              <span>Mã sản phẩm:</span>
            </li>
            <li class="product-info__item">
              <span>Tác giả:</span>
            </li>
            <li class="product-info__item">
              <span>Dịch giả:</span>
            </li>
            <li class="product-info__item">
              <span>Nhà xuất bản:</span>
            </li>
            <li class="product-info__item">
              <span>Số trang:</span>
            </li>
            <li class="product-info__item">
              <span>Kích thước:</span>
            </li>
            <li class="product-info__item">
              <span>Ngày phát hành:</span>
            </li>
          </ul>

          <div class="product-card">
            <p class="product-card__price">Giá: <span>90.000đ</span></p>
            <span class="product-card__count">
              <input type="number" name="count" id="" min="1" />
            </span>
          </div>

          <div class="product-buy">
            <div class="product-buy__add-cart">
              <button>
                <span>Thêm vào giỏ hàng</span>
              </button>
            </div>
            <div class="product-buy__now">
              <button type="button" class="product-buy__btn--buynow">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="product-about">
        <h4 class="product-about__title">Giới thiệu sách</h4>
        <p class="product-about__text">
          Thẩm Thanh truyện và Xuân Hương truyện là hai tác phẩm tiêu biểu, được
          xem là viên ngọc quý trong kho tàng văn chương cổ điển bán đảo Triều
          Tiên. Hai câu chuyện tiếp cận hai chủ đề khác nhau nhưng đều lột tả
          được tính cách của con người Triều Tiên cũng như bảo lưu được đạo đức
          truyền thống dân tộc. Nếu Thẩm Thanh truyện là câu chuyện đầy tính
          nhân đạo và nhân văn sâu sắc, được thể hiện thông qua hình tượng người
          con gái hiếu thảo Thẩm Thanh, không vì hạnh phúc của bản thân mà rời
          bỏ người cha nghèo mù lòa Thẩm Hạc Khuê để đi tìm một cuộc sống sung
          sướng, thì Xuân Hương truyện lại là khúc hát ngợi ca tình yêu của Xuân
          Hương và Lý Mộng Long trong hành khúc chiến đấu chống lại bạo lực và
          áp bức của chế độ phong kiến. Dãu được ra đời cách nay nhiều thế kỷ,
          nhưng giá trị nhân văn, đạo đức trong Thẩm Thanh truyện và Xuân Hương
          truyện vẫn được khơi dậy và cổ xúy trong thế giới hiện đại, như một
          biểu trưng bất diệt cho tinh thần của con người bán đảo Triều Tiên.
        </p>
      </div>
      <div class="product-same">
        <h4 class="product-same__title product__title">Sản phẩm tương tự</h4>
        <div class="product__lists grid__row justify-space-between">
          <div class="product__items">
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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>