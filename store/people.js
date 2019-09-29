import { peopleCollection } from '@/util/firestore'

export const state = () => ({
  people: []
})

export const mutations = {
  setPeople (state, payload) {
    state.people.push(payload)
  }
}

export const getters = {
  people: state => state.people
}

export const actions = {
  fetchPeople (context) {
    const peopleRef = peopleCollection()
    peopleRef.get()
      .then((people) => {
        if (!people) {
          console.log('ユーザー取得が存在しません')
        } else {
          people.forEach((doc) => {
            context.commit(
              'setPeople',
              {
                id: doc.id,
                age: doc.data().age,
                name: doc.data().name,
                face: doc.data().face,
                gender: doc.data().gender,
                prefecture: doc.data().prefecture
              }
            )
          })
        }
      })
      .catch((err) => {
        console.log('ユーザー取得に失敗しました', err)
      })
  }
}
