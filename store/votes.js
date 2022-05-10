export const state = () => ({
  id: 0,
  data: [],
  candidaties: [],
  isLoading: false,
  currentCandidate: {}
})

export const mutations = {
  updateVoteId(state, id){
    state.id = id
  },
  updateVote(state, votes) {
    state.data = votes
  },
  updateCandidaties(state, candidaties) {
    state.candidaties = candidaties
  },
  updateCurrentCandidate(state, candidate){
    state.currentCandidate = candidate
  },
  updateIsLoading(state, value) {
    state.isLoading = value
  },
}

export const actions = {
  async fetch({ state, commit }) {
    if (!state.isLoading) {
      commit('updateIsLoading', true)
      await this.$axios
        .$get('/api/votes')
        .then((res) => {
          commit('updateIsLoading', false)
          commit('updateVote', res.data)
        })
    }
  },
  fetchCandidate({ commit }, voteId) {
    commit('updateVoteId', voteId);
    this.$axios
      .$get(`/api/votes/${voteId}`)
      .then((res) => {
        commit('updateCandidaties', res.data)
      })
  },
  vote({rootState, state, commit}){
    this.$axios
      .$post(`/api/votes`,{
        email: rootState.email,
        id: rootState.id,
        candidateId: state.currentCandidate.id
      })
      .then((res) => {
        if(res.code === 200)
          commit('updateCandidaties', res.data)
        else{
          this.$toast(this.$i18n.t(res.code), 'danger')
        }
      })
  }
}

/* products: products.data,
        categories: categories.data.categories,
        totalProducts: products.pager.total */
