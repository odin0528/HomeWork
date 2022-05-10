<template>
  <div id="app" class="h-100">
    <div
      class="horizontal-layout vertical-overlay-menu h-100"
      :class="{ 'menu-open': $store.state.showOverlay }"
    >
      <horizontal-navbar />
      <div class="app-content content ecommerce-application">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalNavbar from '~/components/layouts/HorizontalNavbar.vue'

export default {
  components: {
    HorizontalNavbar,
  },
}
</script>
<style lang="scss">
// @import '~assets/scss/momofriend.scss';

.app-content {
  margin: 0 auto !important;
}

.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 9998;
}
</style>
