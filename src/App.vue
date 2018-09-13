<template>
  <div id="page">
    <div id="page-ripple" class="section-overlay page-image-ripple"></div>
    <div class="section-overlay bg-black overlay-opacity"></div>
    <div id="modal-notify" class="modal fade modal-scale" tabindex="-1" role="dialog" aria-labelledby="meinModalLabel">
      <div class="modal-dialog" role="document">
        <div>
          <div class="modal-content text-center bg-dark text-light">
            <button class="button-close" data-dismiss="modal" aria-label="Close">
              <i class="fa fa-times fa-2x"></i>
            </button>
            <div class="wrap-line border-dark">
              <h3><span class="font-weight-200">Stay</span> Tuned</h3>
            </div>
            <div class="p-t-b-15">
              <p>We launch our new website soon.<br>
                Please stay updated and follow.</p>
            </div>
            <div class="p-t-b-30">
              <form id="mc-form">
                <div class="input-group">
                  <input type="email" id="email" class="form-control form-control-light" name="email"
                         placeholder="Enter your Email here...">
                  <span class="input-group-btn">
                    <button type="submit" class="btn btn-color">
                      <i class="fa fa-check-square fa-2x"></i>
                    </button>
                  </span>
                </div>
                <div id="message-newsletter" class="message-wrapper text-white message">
                <span><i class="fa angle-right fa-2x"></i>
                  <label class="message-text" for="email"></label></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div id="info" class="col-md-12 text-white text-center page-info col-transform">
          <div class="vert-middle">
            <div class="reveal scale-out">
              <div class="count-down p-t-b-15" data-end-date="Jan 31, 2019 23:59:59">
              </div>
              <div class="p-t-b-15">
                <img src="/static/img/logo.png" height="60" alt="">
              </div>
              <div class="p-t-b-15">
                <h2><span class="font-weight-200">Before launching our</span><br>new Website</h2>
                <p>We're working hard to give you the best experience!<br>
                </p>
              </div>
              <div class="p-t-b-20">
                <i class="icon icon-sm icon-arrows-slim-down-dashed"></i>
              </div>
              <div class="p-t-b-15 btn-row">
                <button class="btn btn-color" data-toggle="modal" data-target="#modal-notify" role="button">Notify me
                </button>
              </div>
              <div class="p-t-b-30">
                <p>
                  <a href="https://www.facebook.com/Wefloc-389752438223590/" class="link-white">
                    <i class="fa fa-facebook"></i></a>
                  <a href="https://twitter.com/wefloc_france" class="link-white">
                    <i class="fa fa-twitter"></i></a>
                  <a href="https://www.linkedin.com/company/wefloc/" class="link-white">
                    <i class="fa fa-linkedin"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="content" class="page-content col-md-6 text-center bg-white-09">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return { locale: 'en' };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>
