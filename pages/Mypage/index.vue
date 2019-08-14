<template>
  <div class="mypage-container">
    <div class="image-wrap">
      <div class="background-image">
        <v-img
          :src="profile.background"
          aspect-ratio="1"
          max-height="250"
        />
        <v-btn icon>
          <v-icon>mdi-camera</v-icon>
        </v-btn>
      </div>
      <div class="face-image">
        <v-img :src="profile.face" />
        <v-btn icon>
          <v-icon>mdi-camera</v-icon>
        </v-btn>
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
    height: 350px;

    .background-image {
      display: flex;
      align-items: flex-end;
      > button {
        position: absolute;
        right: 0;
        background-color: rgb(0, 0, 0, 0.7);
      }
    }
    .face-image {
      position: absolute;
      display: flex;
      align-items: flex-end;
      width: 168px;
      height: 168px;
      padding: 1px;
      box-shadow: none;

      > div {
        border-radius: 100%;
      }
      > button {
        position: absolute;
        right: 0;
        background-color: rgb(0, 0, 0, 1);
        border: 1px solid #FFF;
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
@include media (xl, lg, md) {
  .face-image {
    top: 165px;
    left: 90px;
    margin-top: 0;
  }
}
@include media (sm) {
  .face-image {
    top: 165px;
    left: 0;
    right: 0;
    margin: auto;

  }
}
</style>
