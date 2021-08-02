<template>
  <div class="grid container">
    <div class="login">
      <div class="login__inner">
        <div class="login__heading">
          <div class="login__logo">
            <a href="index.html" class="login__link">
              <img src="../../../assets/img/logo.png" alt="" class="logo__image" />
            </a>

            <h2 class="login__title">Đăng nhập</h2>
          </div>
        </div>
        <div class="login__body">
          <form action="" class="form-login">
            <div class="form-group__input">
              <div class="form-group">
                <!-- <i class="fas fa-user"></i> -->
                <input
                  type="text"
                  name="username"
                  id=""
                  class="form__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="pass"
                  id=""
                  class="form__input"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div class="form-group">
                <button type="submit" class="form-btn__login">Đăng nhập</button>
              </div>
            </div>
            <div class="form__btn">
              <div class="form-group">
                <span> đăng nhập với </span>
              </div>
              <div class="form-group">
                <div class="form-group__social grid__row">
                  <button type="submit" class="form-group__google">
                    <i class="fab fa-google"></i>
                    Google
                  </button>
                  <button type="submit" class="form-group__facebook">
                    <i class="fab fa-facebook-f"></i>
                    Facebook
                  </button>
                </div>
              </div>
              <!-- <div class="form-group">
                                        
                                    </div> -->
              <div class="form-group">
                <div class="form-group__ques">
                  <span>
                    Bạn chưa có tài khoản?
                    <a href="register.html">Đăng ký</a>
                  </span>
                </div>
              </div>
            </div>
          </form>
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