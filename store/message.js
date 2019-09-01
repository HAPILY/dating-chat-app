// import { GET } from '@/util/api'

// example data
const data = {
  list: [
    {
      id: 1,
      name: 'S.T',
      age: 20,
      prefecture: '埼玉',
      src: 'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
      detail: 'メッセージを交換していません。',
      lastTime: '2019-08-17 12:10:30',
      isChecked: true
    },
    {
      id: 2,
      name: 'Ellen Kat',
      age: 30,
      prefecture: '和歌山',
      src: 'http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg',
      detail: 'こんばんは！マッチングありがとうございます。よろしくお願いします。こんばんは！マッチングありがとうございます。よろしくお願いします。',
      lastTime: '2019-08-15 22:10:30',
      isChecked: false
    },
    {
      id: 3,
      name: 'かなえ',
      age: 25,
      prefecture: '東京',
      src: 'http://w1nd.cc/promo/347.jpg',
      detail: `Hello..\n nice to meet you..\n thanks..`,
      lastTime: '2019-07-17 12:10:30',
      isChecked: true
    }
  ],
  message: [
    {
      chatID: 100,
      userName: 'Tom',
      src: 'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
      content: 'test',
      date: new Date().toString()
    },
    {
      chatID: 100,
      userName: 'Tom',
      src: 'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
      content: 'test2',
      date: new Date().toString()
    }
  ]
}

export const state = () => ({
  list: [],
  message: []
})

export const mutations = {
  setList (state, payload) {
    state.list = payload.list
  },
  setMessage (state, payload) {
    state.message = payload.message
  }
}

export const getters = {
  list: state => state.list,
  message: state => state.message
}

export const actions = {
  fetchList (context) {
    // const res = await GET('API')
    const res = data
    context.commit('setList', res)
  },
  loadMessage (context) {
    const res = data
    context.commit('setMessage', res)
  },
  sendMessage (context, payload) {
    const message = {
      chatID: payload.chatID,
      userName: payload.userName,
      src: payload.src,
      content: payload.content,
      date: payload.date
    }
    // send firebase
    console.log(message)
  }
}
