<template>
  <div class="mypage-container">
    <div class="image-wrap">
      <BackgroundImage :profile="profile" :is-edit="false" />
      <FaceImage :profile="profile" :is-edit="false" />
    </div>
    <div class="profile">
      <div class="name">
        {{ profile.name }}
        <span>
          {{ profile.age }}歳 / {{ profile.prefecture }}
        </span>
        <nuxt-link to="/Mypage/edit">
          <v-btn outlined x-small icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </nuxt-link>
      </div>
      <div class="detail">
        <p>{{ profile.detail }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BackgroundImage from '@/components/molecules/BackgroundImage/BackgroundImage'
import FaceImage from '@/components/molecules/FaceImage/FaceImage'

export default {
  name: 'Mypage',
  components: {
    BackgroundImage,
    FaceImage
  },
  computed: {
    ...mapGetters('mypage', {
      getProfile: 'profile'
    }),
    profile () {
      console.log(this.getProfile)
      return this.getProfile
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions('mypage', {
      fetchProfile: 'fetchProfile'
    }),
    async fetch () {
      await this.fetchProfile()
    }
  }
}
</script>

<style lang="scss" scoped>
.mypage-container {
  position: relative;

  .image-wrap {
    height: 350px;
  }

  .name {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    > span {
      font-size: 18px;
      font-weight: 100;
    }
  }
  .detail {
    line-height: 1.4;
    > p {
      white-space: pre-wrap;
    }
  }
}
</style>
