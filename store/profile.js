import Cookies from 'js-cookie'
import { userCollection } from '@/util/firestore'

// example data
const data = {
  profile: {
    name: '',
    age: null,
    gender: '',
    prefecture: '',
    detail: '',
    background: '',
    face: ''
  }
}

export const state = () => ({
  profile: {}
})

export const mutations = {
  setProfileState (state, payload) {
    state.profile[payload.type] = payload.value
  },
  setProfile (state, payload) {
    state.profile = payload
  }
}

export const getters = {
  profile: state => state.profile
}

export const actions = {
  fetchMyProfile (context) {
    const uid = context.rootState.uid || Cookies.get('client_id')
    const userRef = userCollection(uid)
    userRef.get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('ユーザー取得が存在しません')
        } else {
          console.log(doc.data())
          context.commit('setProfile', doc.data())
        }
      })
      .catch((err) => {
        console.log('ユーザー取得に失敗しました', err)
      })
  },
  fetchProfile (context) {
    const res = data.profile
    return res
  },
  updateProfileState (context, payload) {
    context.commit('setProfileState', payload)
  },
  updateProfile (context, payload) {
    const uid = context.rootState.uid
    const userRef = userCollection(uid)
    userRef.set({
      ...payload
    }, {
      merge: true
    })
  },
  sendVisitLog (context, payload) {
    console.log(payload)
  }
}
