export const state = () => ({
  isAuth: false,
  email: '',
  id: '',
})

export const mutations = {
  updateEmail(state, email) {
    state.email = email
  },
  updateId(state, id) {
    state.id = id
  },
  updateAuth(state, bool) {
    state.isAuth = bool
  },
}

export const actions = {
  auth({ commit, state }, info) {
    commit('updateEmail', info.email)
    commit('updateId', info.id)
    commit('updateAuth', true)
  },
}
