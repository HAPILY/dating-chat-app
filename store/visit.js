// example data
const data = {
  list: [
    {
      id: 1,
      name: 'S.T',
      age: 20,
      prefecture: '埼玉',
      src: 'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
      detail: `初めましてー！\nプロフ読んでくれてありがとうございます♪\nお互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)\nちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`,
      lastTime: '2019/08/17 12:10:30',
      isChecked: false
    },
    {
      id: 2,
      name: 'Ellen Kat',
      age: 30,
      prefecture: '和歌山',
      src: 'http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg',
      detail: `初めましてー！\nプロフ読んでくれてありがとうございます♪\nお互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)\nちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`,
      lastTime: '2019/08/16 22:10:30',
      isChecked: true
    },
    {
      id: 3,
      name: 'かなえ',
      age: 25,
      prefecture: '東京',
      src: 'http://w1nd.cc/promo/347.jpg',
      detail: `初めましてー！\nプロフ読んでくれてありがとうございます♪\nお互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)\nちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`,
      lastTime: '2019/07/17 12:10:30',
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
    const updateList = list.find((v) => {
      return !v.isChecked
    })
    console.log(updateList)
  }
}
