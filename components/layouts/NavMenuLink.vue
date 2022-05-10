<template>
  <li class="nav-item" :class="{ active: isActive }">
    <b-link
      v-if="item.link_type !== 4"
      class="nav-link"
      :to="link"
      prefetch
      @click="$emit('click')"
    >
      <span>{{ item.title }}</span>
    </b-link>
    <b-link
      v-else
      class="nav-link"
      :href="link"
      target="_blank"
      @click="$emit('click')"
    >
      <span>{{ item.title }}</span>
    </b-link>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    link() {
      switch (this.item.link_type) {
        case 1:
          return `/${this.item.link}`
        case 2:
          return `/categories/${this.item.link}`
        case 3:
          return `/products/${this.item.link}`
      }
      return this.item.link
    },
    isActive() {
      if (this.$route.path.split('/')[1] === '' && this.item.link === 'index') {
        return true
      } else if (this.$route.path === this.link) {
        this.$emit('openChild')
        return true
      } else {
        return false
      }
    },
  },
}
</script>
