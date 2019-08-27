// example data
const data = {
  list: [
    {
      id: 1,
      name: 'S.T',
      age: 20,
      prefecture: '埼玉',
      src: 'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
      visitTime: '2019-08-17 12:10:30',
      isChecked: false
    },
    {
      id: 2,
      name: 'Ellen Kat',
      age: 30,
      prefecture: '和歌山',
      src: 'http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg',
      visitTime: '2019-08-15 22:10:30',
      isChecked: true
    },
    {
      id: 3,
      name: 'かなえ',
      age: 25,
      prefecture: '東京',
      src: 'http://w1nd.cc/promo/347.jpg',
      visitTime: '2019-07-17 12:10:30',
      isChecked: true
    }
  ]
}

export const state = () => ({
  list: []
})

export const mutations = {
  setList (state, payload) {
    state.list = payload.list
  }
}

export const getters = {
  list: state => state.list
}

export const actions = {
  fetchList (context) {
    const res = data
    context.commit('setList', res)
  },
  updateChecked (context, list) {
    console.log(list)
  }
}
