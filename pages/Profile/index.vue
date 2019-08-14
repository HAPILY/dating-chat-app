<template>
  <div class="mypage-container">
    <div class="image-wrap">
      <BackgroundImage :profile="profile" />
      <FaceImage :profile="profile" />
    </div>
    <div class="profile">
      <v-text-field
        v-model="name"
        class="input-name"
        label="名前"
      />
      <v-textarea
        v-model="detail"
        class="input-detail"
        label="自己紹介"
        rows="10"
        auto-grow
      />
      <div class="header-label">
        詳細プロフィール
      </div>
      <v-text-field
        v-model="age"
        class="input-age"
        label="年齢"
        type="number"
      />
    </div>
  </div>
</template>

<script>
import BackgroundImage from '@/components/molecules/BackgroundImage/BackgroundImage'
import FaceImage from '@/components/molecules/FaceImage/FaceImage'

export default {
  name: 'Profile',
  components: {
    BackgroundImage,
    FaceImage
  },
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
  },
  computed: {
    name () {
      return this.profile.name
    },
    detail () {
      return this.profile.detail
    },
    age: () => 25
  }
}
</script>

<style lang="scss" scoped>
@include media (sm) {
  .input {
    &-name,
    &-detail,
    &-age {
      margin: 0 10px;
    }
  }
  .header-label {
    font-size: 22px;
    margin: 10px 10px 30px 10px !important;
    font-weight: bold;
  }
}

.mypage-container {
  position: relative;

  .image-wrap {
    height: 350px;
  }

  .header-label {
    font-size: 22px;
    margin: 10px 10px 30px 0px;
    font-weight: bold;
  }
}
</style>
