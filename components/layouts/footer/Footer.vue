<template>
  <footer class="footer footer-light footer-static w-100 mt-50">
    <component :is="getFooter()"></component>
  </footer>
</template>
<script>
import DefaultFooter from '~/components/layouts/footer/Default.vue'
import MomoFriends from '~/components/layouts/footer/MomoFriends.vue'
export default {
  components: {
    DefaultFooter,
    MomoFriends,
  },
  methods: {
    getFooter() {
      switch (this.$store.state.platform.info.code) {
        case 'momofriend':
          return 'MomoFriends'
        default:
          return 'DefaultFooter'
      }
    },
  },
}
</script>
