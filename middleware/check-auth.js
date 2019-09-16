import firebase from '~/plugins/firebase'

export default function ({ app, store, redirect }) {
  app.router.afterEach((to, from) => {
    firebase.auth().onAuthStateChanged(async (auth) => {
      if (auth) {
        await store.commit('setUid', { uid: auth.uid })
        await store.dispatch('visit/fetchList')

        if (auth.uid) {
          if (to.name === 'Login' && from.name !== 'Account') {
            redirect('/')
          }
        }
      } else {
        if (to.name !== 'Login' && to.name !== 'Account' && to.name !== 'Logout') {
          redirect('/Login')
        }
      }
    })
  })
}
