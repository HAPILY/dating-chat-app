// example data
const data = {
  uid: ''
}

export const state = () => ({
  uid: null,
  settings: {
    visit: true
  },
  snackbar: false,
  snackbarText: ''
})

export const mutations = {
  setUid (state, payload) {
    state.uid = payload.uid
  },
  resetUid (state) {
    state.uid = null
  },
  openSnackbar (state, payload) {
    state.snackbar = true
    state.snackbarText = payload
  },
  closeSnackbar (state) {
    state.snackbar = false
    state.snackbarText = ''
  }
}

export const getters = {
  uid: state => state.uid,
  settings: state => state.settings,
  snackbar: state => state.snackbar,
  snackbarText: state => state.snackbarText
}

export const actions = {
  fetchUid (context) {
    const res = data
    context.commit('setUid', res)
  },
  deleteUid (context) {
    // ログアウト時に使う予定?
    context.commit('resetUid')
  },
  openSnackbar (context, payload) {
    context.commit('openSnackbar', payload.text)
  },
  closeSnackbar (context) {
    context.commit('closeSnackbar')
  }
}
