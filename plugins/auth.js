import firebase from '~/plugins/firebase'

export default ({ app, redirect, store }) => {
  app.router.afterEach((to, from) => {
    firebase.auth().onAuthStateChanged(async (auth) => {
      await store.commit('setUid', { uid: auth.uid })

      if (auth.uid) {
        if (to.name === 'Login' && from.name !== 'Account') {
          redirect('/')
        }
      }
    })
  })
}
