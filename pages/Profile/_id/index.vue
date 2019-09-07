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
  data () {
    return {
      profile: {}
    }
  },
  computed: {
    ...mapGetters({
      getSettings: 'settings'
    }),
    settings () {
      return this.getSettings
    }
  },
  async created () {
    await this.fetch()
    if (this.settings.visit) {
      await this.sendVisited()
    }
  },
  methods: {
    ...mapActions('profile', {
      fetchProfile: 'fetchProfile',
      sendVisitLog: 'sendVisitLog'
    }),
    async fetch () {
      const res = await this.fetchProfile(this.$route.params.id)
      this.profile = res
    },
    async sendVisited () {
      await this.sendVisitLog({ from: this.profile.id, to: this.$route.params.id })
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
}
</style>
