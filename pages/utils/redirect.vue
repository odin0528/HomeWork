<template>
  <div></div>
</template>

<script>
export default {
  layout: 'empty',
  mounted() {
    location.href = location.origin + this.$route.query.url
  },
}
</script>
