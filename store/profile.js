import Cookies from 'js-cookie'
import { userCollection } from '@/util/firestore'

// example data
const data = {
  profile: {
    id: 1,
    name: '田中 太郎',
    age: 25,
    gender: 'man',
    prefecture: '東京都',
    detail: `初めましてー！\nプロフ読んでくれてありがとうございます♪\nお互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)\nちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`,
    background: 'https://placehold.jp/650x650.png',
    face: 'http://placehold.jp/24/cc9999/993333/650x650.png'
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
