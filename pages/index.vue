<template>
  <div class="category-list-wrapper inner-container">
    <votes-filter />
    <votes-candidate-list
      class="h-100"
    />
    <b-modal
      id="vote-confirm"
      content-class="shadow"
      modal-class="modal-danger"
      header-bg-variant="primary"
      :ok-title="$t('vote')"
      :ok-disabled="isLoading"
      :cancel-title="$t('cancel')"
      centered
      ok-variant="danger"
      @ok="$store.dispatch('votes/vote')"
    >
      <template #modal-header="{ close }">
        <h4 class="modal-title text-white">{{ $t('vote_confirm_title') }}</h4>
        <button
          type="button"
          aria-label="Close"
          class="close text-primary"
          @click="close()"
        >
          ×
        </button>
      </template>
      <b-card-text>
        <h4 class="text-danger">
          {{ printf($t('vote_confirm'), currentCandidate.title) }}
        </h4>
      </b-card-text>
    </b-modal>
    <b-modal
      id="auth-user"
      content-class="shadow"
      modal-class="modal-danger"
      header-bg-variant="primary"
      centered
      :ok-disabled="!isValid"
      ok-variant="danger"
      @ok="auth"
    >
      <template #modal-header="{ close }">
        <h4 class="modal-title text-white">驗證身份</h4>
        <button
          type="button"
          aria-label="Close"
          class="close text-primary"
          @click="close()"
        >
          ×
        </button>
      </template>
      <b-card-text>
        <b-form-input
          v-model="email"
          :placeholder="$t('email_placeholder')"
          :state="emailValidation"
          @input="validForm"
        />
      </b-card-text>
      <b-card-text>
        <b-form-input
          v-model="id"
          :placeholder="$t('id_placeholder')"
          :state="idValidation"
          @input="validForm"
        />
      </b-card-text>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Index',
  data(){
    return {
      printf: require('printf'),
      email: '',
      id: '',
      emailValidation: null,
      idValidation: null,
      isLoading: false,
      isValid: false
    }
  },
  fetch() {
    this.$store.dispatch('votes/fetch').then(()=>{
      if(this.$store.state.votes.data.length > 0)
        this.$store.commit('votes/updateVoteId', this.$store.state.votes.data[0].id);
        this.$store.dispatch('votes/fetchCandidate', this.$store.state.votes.data[0].id);
    })
  },
  computed: {
    ...mapState({
      currentCandidate: (state) => state.votes.currentCandidate,
    })
  },
  methods:{
    validForm(){
      let flag = true
      if(!this.email || !this.email.match(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/i)){
        this.emailValidation = false
        flag = false
      }else{
        this.emailValidation = true
      }
      
      if(!this.id || !this.id.match(/^[a-zA-Z]{1}[0-9]{6}\([0-9]{1}\)$/i)){
        this.idValidation = false
        flag = false
      }else{
        this.idValidation = true
      }

      if(flag)
        this.isValid = true
    },
    auth(){
      if(this.isValid){
        this.$store.dispatch('auth', {
          email: this.email,
          id: this.id,
        })
      }
    }
  }

}
</script>
<style lang="scss">