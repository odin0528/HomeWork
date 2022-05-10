<template>
  <div class="main-menu menu-fixed menu-accordion menu-shadow menu-light">
    <ul class="navigation navigation-main">
      <nav-menu-item
        v-for="item in $store.state.platform.categories"
        :key="item.id"
        :item="item"
        @click="$store.commit('updateShowOverlay', fasle)"
      />
    </ul>
  </div>
</template>

<script>
import NavMenuItem from '~/components/layouts/NavMenuItem.vue'
export default {
  components: {
    NavMenuItem,
  },
  props: {
    navMenuItems: {
      default() {
        return []
      },
      type: Array,
    },
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {},
}
</script>
