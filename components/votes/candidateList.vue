<template>
  <div>
    <div
      class="
        d-flex
        justify-content-between
        px-50 px-sm-0
        align-items-center
        my-50
      "
    >
      <div class="view-options d-flex col-12 justify-content-end px-0">
        <!-- Item View Radio Button Group  -->
        <b-form-radio-group
          v-model="itemView"
          class="
            ml-50 ml-sm-1
            list
            item-view-radio-group
            d-none d-sm-inline-flex d-sm-block
          "
          buttons
          size="sm"
          button-variant="outline-primary"
        >
          <b-form-radio
            v-for="option in itemViewOptions"
            :key="option.icon"
            :value="option.value"
          >
            <feather-icon :icon="option.icon" size="18" />
          </b-form-radio>
        </b-form-radio-group>
      </div>
    </div>
    <div class="content-detached category-product-list">
      <section :class="itemView">
          <b-card
            v-for="candidate in candidaties"
            :key="candidate.id"
            class="ecommerce-card"
            no-body
            @click="vote(candidate)"
          >
            <div
              class="item-img text-center"
              :style="{
                backgroundImage: `url(${
                  candidate.photo 
                    ? 'http://api.homework.com/' + candidate.photo
                    : '/images/no-image.jpg'
                })`,
              }"
            ></div>

            <b-card-body class="p-25 px-sm-50">
              <div class="item-name">
                {{ candidate.title }}
                <span v-if="candidate.vote" class="text-primary">({{ candidate.vote }})</span>
              </div>
            </b-card-body>
          </b-card>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      loading: false,
      itemView: 'grid-view',
      itemViewOptions: [
        { icon: 'GridIcon', value: 'grid-view' },
        { icon: 'ListIcon', value: 'list-view' },
      ],
    }
  },
  computed: {
    ...mapState({
      candidaties: (state) => state.votes.candidaties,
      isAuth: (state) => state.isAuth,
    }),
  },
  methods:{
    vote(candidate){
      this.$store.commit('votes/updateCurrentCandidate', candidate)
      if(this.isAuth){
        this.$root.$emit('bv::show::modal', 'vote-confirm')
      }else{
        this.$root.$emit('bv::show::modal', 'auth-user')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item-view-radio-group ::v-deep {
  .btn {
    display: flex;
    align-items: center;
  }
}

.btn-wishlist {
  padding: 0.75rem 0.5rem;
}
.btn-cart {
  padding: 0.75rem 0.5rem;
}
</style>
