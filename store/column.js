import { columnCollection } from '@/util/firestore'

export const state = () => ({
  column: []
})

export const mutations = {
  setColumn (state, payload) {
    state.column = []
    state.column.push(payload)
  }
}

export const getters = {
  column: state => state.column
}

export const actions = {
  fetchColumn (context) {
    const columnRef = columnCollection()
    columnRef.get()
      .then((column) => {
        if (!column) {
          console.log('コラム取得が存在しません')
        } else {
          column.forEach((doc) => {
            context.commit(
              'setColumn',
              {
                id: doc.data().id,
                title: doc.data().title,
                image: doc.data().image,
                content: doc.data().content
              }
            )
          })
        }
      })
      .catch((err) => {
        console.log('コラム取得に失敗しました', err)
      })
  }
}
