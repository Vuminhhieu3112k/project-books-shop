<template>
  <header id="header">
    <nav class="nav grid grid__row justify-space-between">
      <div id="logo">
        <img src="../../assets/img/logo.png" alt="" class="logo__image" />
      </div>
      <div id="menu">
        <ul class="menu-list">
          <li class="menu__item">
            <a href="" class="menu__link">Trang chủ</a>
          </li>
          <li class="menu__item">
            <a href="" class="menu__link"
              >Cửa hàng <i class="fas fa-chevron-down menu__icon"></i
            ></a>
            <ul class="sub-menu">
              <li class="sub-menu__item">
                <a href="" class="sub-menu__link">Văn học Việt Nam</a>
                <ul class="menu-child">
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Tiểu thuyết</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Truyện ngắn</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Thơ / Kịch</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link"
                      >Hồi ký/ Phê bình / Tiểu luận</a
                    >
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Tạp bút / Tán văn</a>
                  </li>
                </ul>
              </li>
              <li class="sub-menu__item">
                <a href="" class="sub-menu__link">Văn học nước ngoài</a>
                <ul class="menu-child">
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Đương đại</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Trinh thám / Kinh dị</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Lãng mạn</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Kiếm hiệp</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Kinh điển</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Thơ / Kịch</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Hồi ký / Tiểu luận</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Huyền ảo / Giả tưởng</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Tản văn / Tạp bút</a>
                  </li>
                </ul>
              </li>
              <li class="sub-menu__item">
                <a href="" class="sub-menu__link">Thiếu nhi</a>
                <ul class="menu-child">
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Tuổi teen</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Truyện tranh</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Thiếu nhi</a>
                  </li>
                </ul>
              </li>
              <li class="sub-menu__item">
                <a href="" class="sub-menu__link">Thời sự - Chính trị</a>
                <ul class="menu-child">
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Hồi ký / Tự truyện</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Câu truyện hiện đại</a>
                  </li>
                </ul>
              </li>
              <li class="sub-menu__item">
                <a href="" class="sub-menu__link"
                  >Khoa học tự nhiên - Nhân văn</a
                >
                <ul class="menu-child">
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Lịch sử</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Triết học </a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Tâm lý học</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Kinh tế</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Vũ trụ</a>
                  </li>
                  <li class="menu-child__item">
                    <a href="" class="menu-child__link">Sinh học</a>
                  </li>
                </ul>
              </li>
              <li class="sub-menu__item">
                <a href="" class="sub-menu__link">Tham khảo </a>
              </li>
              <li class="sub-menu__item">
                <a href="" class="sub-menu__link">Giảm giá đặc biệt</a>
              </li>
              <li class="sub-menu__item">
                <a href="" class="sub-menu__link">Sách tái bản</a>
              </li>
              <li class="sub-menu__item">
                <a href="" class="sub-menu__link">Đặt trước</a>
              </li>
            </ul>
          </li>
          <li class="menu__item">
            <a href="" class="menu__link">Giảm giá</a>
          </li>
          <li class="menu__item">
            <a href="" class="menu__link">Giới thiệu</a>
          </li>
          <li class="menu__item">
            <a href="" class="menu__link">Liên hệ</a>
          </li>
        </ul>
      </div>
      <div class="box-head grid__row">
        <div class="box-head__search">
          <i class="fas fa-search box-head__icon"></i>
        </div>
        <div class="box-head__cart">
          <a href="#search"
            ><i class="fas fa-shopping-cart box-head__icon"></i
          ></a>
        </div>
        <div class="box-head__login">
          <a href="" class="box-head__link">Đăng nhập</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>