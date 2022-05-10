<template>
  <li class="nav-item" :class="{ active: isActive }">
    <b-link
      class="nav-link nav-group"
      :to="`/categories/${item.layer}/${item.id}`"
    >
      <div @click="$emit('click')">{{ item.title }}</div>
      <div class="nav-group-toggle" @click.prevent="showChild = !showChild">
        <feather-icon icon="ChevronDownIcon" size="16" />
      </div>
    </b-link>
    <ul class="navigation navigation-main" :class="{ 'd-block': showChild }">
      <nav-menu-item
        v-for="child in item.child"
        :key="child.id"
        :item="child"
        @openChild="openChild"
        @click="$emit('click')"
      />
    </ul>
  </li>
</template>

<script>
import FeatherIcon from '../FeatherIcon.vue'
export default {
  components: {
    NavMenuItem: () => import('~/components/layouts/NavMenuItem.vue'),
    FeatherIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showChild: false,
    }
  },
  computed: {
    isActive() {
      if (
        this.$route.path === `/categories/${this.item.layer}/${this.item.id}`
      ) {
        this.$emit('openChild')
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    openChild() {
      this.showChild = true
      this.$emit('openChild')
    },
  },
}
</script>
