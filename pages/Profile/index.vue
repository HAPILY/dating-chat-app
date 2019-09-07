<template>
  <div class="profile">
    <div class="profile-image">
      <BackgroundImage :profile="profile" />
      <FaceImage :profile="profile" />
    </div>
    <v-card class="mx-auto pa-4 profile-card">
      <v-card-title class="profile-card-title">基本プロフィール</v-card-title>
      <BasicProfile :profile="profile" />
      <DetailProfile :profile="profile" />
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BackgroundImage from '@/components/molecules/BackgroundImage/BackgroundImage'
import BasicProfile from '@/components/molecules/BasicProfile/BasicProfile'
import DetailProfile from '@/components/molecules/DetailProfile/DetailProfile'
import FaceImage from '@/components/molecules/FaceImage/FaceImage'

export default {
  name: 'Profile',
  components: {
    BackgroundImage,
    BasicProfile,
    DetailProfile,
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

  &-detail {
    padding: 0 12px;
    line-height: 1.4;
    > p {
      white-space: pre-wrap;
    }
  }
}
</style>
