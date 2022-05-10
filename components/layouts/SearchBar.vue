<template>
  <li class="nav-item nav-search align-self-center ml-1">
    <!-- Icon -->
    <a
      href="javascript:void(0)"
      class="nav-link nav-link-search"
      @click="showSearchBar = true"
    >
      <feather-icon icon="SearchIcon" size="21" />
    </a>

    <!-- Input -->
    <div class="search-input" :class="{ open: showSearchBar }">
      <div class="search-input-icon">
        <feather-icon icon="SearchIcon" @click="searchProduct" />
      </div>
      <b-form-input
        v-model="searchQuery"
        placeholder="輸入搜尋的商品名稱"
        autofocus
        autocomplete="off"
        @keyup.esc="
          showSearchBar = false
          resetsearchQuery()
        "
        @keyup.enter="searchProduct"
      />
      <div
        class="search-input-close"
        @click="
          showSearchBar = false
          resetsearchQuery()
        "
      >
        <feather-icon icon="XIcon" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showSearchBar: false,
      searchQuery: '',
    }
  },
  methods: {
    resetsearchQuery() {
      this.searchQuery = ''
    },
    searchProduct() {
      this.showSearchBar = false
      this.$router.push(`/search/${this.searchQuery}`)
    },
  },
}
</script>
