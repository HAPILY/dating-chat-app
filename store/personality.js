// example data
const data = {
  answers: [
    {
      id: 1,
      name: '知らない人とすぐ話ができる',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'Yes'
    },
    {
      id: 2,
      name: '人が快適で幸せかどうか気になる',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'Yes'
    },
    {
      id: 3,
      name: '絵画等の制作、著述、音楽をつくる',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'Yes'
    },
    {
      id: 4,
      name: 'かなり前から準備する',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'No'
    },
    {
      id: 5,
      name: '落ち込んだり憂鬱になったりする',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'Yes'
    },
    {
      id: 6,
      name: 'パーティや社交イベントを企画する',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'No'
    },
    {
      id: 7,
      name: 'よく人を侮辱することがある',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'No'
    },
    {
      id: 8,
      name: '哲学的、精神的な問題を考える',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'Yes'
    },
    {
      id: 9,
      name: 'ものごとの整理ができない',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'No'
    },
    {
      id: 10,
      name: 'ストレスを感じたり不安になったりする',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'No'
    },
    {
      id: 11,
      name: 'むずかしい言葉を使う',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'No'
    },
    {
      id: 12,
      name: '他人の気持ちを思いやる',
      face: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
      answer: 'No'
    }
  ]
}

export const state = () => ({
  answers: []
})

export const mutations = {
  setAnswer (state, payload) {
    state.answers = payload.answers
  }
}

export const getters = {
  answer: state => state.answers
}

export const actions = {
  fetchAnswer (context) {
    const res = data
    context.commit('setAnswer', res)
  }
  // fetchAnswer (context, payload) {
  //   context.commit('setAnswer', payload)
  // }
}
