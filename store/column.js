// import { GET } from '@/util/api'

// example data
const data = {
  list: [
    {
      id: 1,
      src: 'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
      title: '結婚願望がなかった私が「結婚、いいかも！」と思えた5つの出来事',
      to: '/_id',
      content: '<h1 style="font-size: 24px;">このサイトでは、</h1>ウェブページを作るためにHTMLと並んで必要となる、CSSの仕組みや書き方について説明しています。スタイルシート（Style Sheet）は、HTMLやXHML、XMLといったウェブドキュメントのマークアップに対して、その表示形式を制御するために定義された言語です。CSSとは「Cascading Style Sheets」の略称であり、スタイルシートの中で最も一般的に知られている形式です。ここでは「スタイルシート＝CSS」として説明します。'
    },
    {
      id: 2,
      src: 'http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg',
      title: '「私ドMだから」合コンでやりがちな非モテ行動ランキング',
      to: '/_id',
      content: '<h1 style="font-size: 24px;">このサイトでは、</h1>ウェブページを作るためにHTMLと並んで必要となる、CSSの仕組みや書き方について説明しています。スタイルシート（Style Sheet）は、HTMLやXHML、XMLといったウェブドキュメントのマークアップに対して、その表示形式を制御するために定義された言語です。CSSとは「Cascading Style Sheets」の略称であり、スタイルシートの中で最も一般的に知られている形式です。ここでは「スタイルシート＝CSS」として説明します。'
    },
    {
      id: 3,
      src: 'http://w1nd.cc/promo/347.jpg',
      title: 'やっぱり飲み会でモテたい！',
      to: '/_id',
      content: '<h1 style="font-size: 24px;">このサイトでは、</h1>ウェブページを作るためにHTMLと並んで必要となる、CSSの仕組みや書き方について説明しています。スタイルシート（Style Sheet）は、HTMLやXHML、XMLといったウェブドキュメントのマークアップに対して、その表示形式を制御するために定義された言語です。CSSとは「Cascading Style Sheets」の略称であり、スタイルシートの中で最も一般的に知られている形式です。ここでは「スタイルシート＝CSS」として説明します。'
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
    // const res = await GET('API')
    const res = data
    context.commit('setList', res)
  }
}
