<template>
  <div class="profile">
    <div class="profile-image">
      <BackgroundImage :profile="profile" :is-edit="false" />
      <FaceImage :profile="profile" :is-edit="false" />
    </div>
    <v-card
      class="mx-auto pa-4 profile-card"
    >
      <v-card-title class="profile-card-title">基本プロフィール</v-card-title>
      <div class="profile-basic">
        {{ profile.name }}
        <span>
          {{ profile.age }}歳 / {{ profile.prefecture }}
        </span>
        <nuxt-link to="/Profile/edit">
          <v-btn outlined x-small icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </nuxt-link>
      </div>
      <div class="profile-detail">
        <p>{{ profile.detail }}</p>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BackgroundImage from '@/components/molecules/BackgroundImage/BackgroundImage'
import FaceImage from '@/components/molecules/FaceImage/FaceImage'

export default {
  name: 'Profile',
  components: {
    BackgroundImage,
    FaceImage
  },
  computed: {
    ...mapGetters('profile', {
      getProfile: 'profile'
    }),
    profile () {
      return this.getProfile
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions('profile', {
      fetchMyProfile: 'fetchMyProfile'
    }),
    async fetch () {
      await this.fetchMyProfile()
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  position: relative;

  &-image {
    height: 350px;
  }
  &-card {
    background: color(white, base);
    &-title {
      font-size: 22px;
      font-weight: bold;
    }
  }

  &-basic {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    > span {
      font-size: 18px;
      font-weight: 100;
    }
  }
  &-detail {
    padding: 0 12px;
    line-height: 1.4;
    > p {
      white-space: pre-wrap;
    }
  }
}
</style>
