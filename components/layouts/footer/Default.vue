<template>
  <p class="clearfix mb-0 px-1">
    <span class="float-md-left d-block d-md-inline-block mt-25">
      COPYRIGHT © 2021
      <b-link class="ml-25" href="https://www.hugelark.com/" target="_blank"
        >Giant Zongzi</b-link
      >
      <span class="d-none d-sm-inline-block">, All rights Reserved</span>
    </span>

    <span class="float-md-right d-none d-md-block"
      >Hand-crafted &amp; Made with
      <heart-icon
        icon="HeartIcon"
        size="21"
        class="text-danger stroke-current"
      />
    </span>
  </p>
</template>

<script>
import { BLink } from 'bootstrap-vue'
import { HeartIcon } from 'vue-feather-icons'

export default {
  components: {
    BLink,
    HeartIcon,
  },
}
</script>
