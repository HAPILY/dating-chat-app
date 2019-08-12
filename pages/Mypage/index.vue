<template>
  <div class="mypage-container">
    <div class="image-wrap">
      <div class="background-image">
        <v-img
          :src="profile.background"
          aspect-ratio="1"
          max-height="200"
        />
      </div>
      <div class="face-image">
        <v-img :src="profile.face" />
      </div>
    </div>
    <div class="profile">
      <div class="name">{{ profile.name }}</div>
      <div class="detail">
        <p>{{ profile.detail }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myPage',
  data () {
    return {
      profile: {
        name: '田中 太郎',
        detail: `初めましてー！
          プロフ読んでくれてありがとうございます♪
          お互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)
          ちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`,
        background: 'https://placehold.jp/650x650.png',
        face: 'http://placehold.jp/24/cc9999/993333/650x650.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mypage-container {
  position: relative;

  .image-wrap {
    height: 300px;

    .background-image {}
    .face-image {
      position: absolute;
      display: block;
      width: 168px;
      height: 168px;
      top: 115px;
      left: 90px;
      margin-top: 0;
      padding: 1px;
      box-shadow: none;

      > div {
        border-radius: 100%;
      }
    }
  }

  .name {
    font-size: 26px;
    font-weight: bold;
    text-align: center;
  }
  .detail {
    line-height: 1.4;
    > p {
      white-space: pre-line;
    }
  }
}
</style>
