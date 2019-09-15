// example data
const data = {
  uid: ''
}

export const state = () => ({
  uid: null,
  settings: {
    visit: true
  }
})

export const mutations = {
  setUid (state, payload) {
    state.uid = payload.uid
  },
  resetUid (state) {
    state.uid = null
  }
}

export const getters = {
  uid: state => state.uid,
  settings: state => state.settings
}

export const actions = {
  fetchUid (context) {
    const res = data
    context.commit('setUid', res)
  },
  deleteUid (context) {
    // ログアウト時に使う予定?
    context.commit('resetUid')
  }
}
