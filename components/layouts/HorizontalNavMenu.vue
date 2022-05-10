<template>
  <ul id="main-menu-navigation" class="nav navbar-nav">
    <nav-menu-link v-for="item in navMenuItems" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import NavMenuLink from '~/components/layouts/NavMenuLink.vue'

export default {
  components: {
    NavMenuLink,
  },
  props: {
    navMenuItems: {
      default() {
        return []
      },
      type: Array,
    },
  },
}
</script>
