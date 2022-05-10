<template>
  <div class="sidebar-detached sidebar-left">
    <div class="sidebar">
      <div class="sidebar-shop">
        <b-card body-class="category-filter">
          <ul class="category-list px-0 pt-50">
            <li
              v-for="vote in votes"
              :key="vote.id"
              class="nav-item pl-1 mx-50"
              :class="{'bg-light':voteId === vote.id}"
            >
              <b-link
                class="d-flex align-items-center"
                @click="$store.dispatch('votes/fetchCandidate', vote.id)"
              >
                <span class="menu-title">{{ vote.title }}</span>
              </b-link>
            </li>
          </ul>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      voteId: (state) => state.votes.id,
      votes: (state) => state.votes.data,
    })
  },
}
</script>
