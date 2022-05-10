<template>
  <component
    :is="hasChild"
    :item="
      hasChild == 'NavMenuLinkGroup'
        ? item
        : {
            id: item.id,
            link_type: 2,
            link: `${item.layer}/${item.id}`,
            title: item.title,
          }
    "
    @openChild="openChild"
    @click="$emit('click')"
  />
</template>

<script>
import NavMenuLink from '~/components/layouts/NavMenuLink.vue'
import NavMenuLinkGroup from '~/components/layouts/NavMenuLinkGroup.vue'
export default {
  components: {
    NavMenuLink,
    NavMenuLinkGroup,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasChild() {
      if (this.item.child) {
        return 'NavMenuLinkGroup'
      } else {
        return 'NavMenuLink'
      }
    },
  },
  methods: {
    openChild() {
      this.$emit('openChild')
    },
  },
}
</script>
