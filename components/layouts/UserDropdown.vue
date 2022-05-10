<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
  >
    <template #button-content>
      <div class="d-sm-flex d-none user-nav mr-1">
        <p class="user-name font-weight-bolder mb-0">
          👋 {{ $store.state.member.nickname || $t('default_member_nickname') }}
        </p>
      </div>
      <b-avatar
        size="35"
        :src="$store.state.member.avatar"
        variant="light-primary"
        badge
        class="badge-minimal"
        badge-variant="success"
      >
        <feather-icon
          v-if="!$store.state.member.avatar"
          icon="UserIcon"
          size="22"
          class="text-white"
        />
      </b-avatar>
    </template>

    <b-dropdown-item
      to="/members/orders"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="ListIcon" class="mr-50" />
      <span>歷史訂單</span>
    </b-dropdown-item>

    <b-dropdown-item
      to="/members/delivery"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="HomeIcon" class="mr-50" />
      <span>常用收件地址</span>
    </b-dropdown-item>

    <b-dropdown-divider />
    <b-dropdown-item link-class="d-flex align-items-center" @click="logout">
      <log-out-icon size="16" class="mr-50" />
      <span>登出</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { LogOutIcon } from 'vue-feather-icons'
export default {
  components: {
    LogOutIcon
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$toast(this.$t('logout_hint'))
        this.$router.push('/')
      })
    }
  }
}
</script>
