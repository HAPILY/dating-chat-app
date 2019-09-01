// example data
const data = {
  token: 'test'
}

export const state = () => ({
  token: null,
  settings: {
    visit: true
  }
})

export const mutations = {
  setToken (state, payload) {
    state.token = payload.token
  },
  resetToken (state) {
    state.token = null
  }
}

export const getters = {
  token: state => state.token,
  settings: state => state.settings
}

export const actions = {
  fetchToken (context) {
    const res = data
    context.commit('setToken', res)
  },
  deleteToken (context) {
    // ログアウト時に使う予定?
    context.commit('resetToken')
  }
}
