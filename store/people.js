import { peopleCollection } from '@/util/firestore'

export const state = () => ({
  people: []
})

export const mutations = {
  setPeople (state, payload) {
    state.people = payload
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
            context.state.people.push({
              id: doc.id,
              age: doc.data().age,
              face: doc.data().face
            })
          })
        }
      })
      .catch((err) => {
        console.log('ユーザー取得に失敗しました', err)
      })
  }
}
