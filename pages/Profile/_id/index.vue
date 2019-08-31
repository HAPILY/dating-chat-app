<template>
  <div class="profile-container">
    <div class="image-wrap">
      <BackgroundImage :profile="profile" :is-edit="false" />
      <FaceImage :profile="profile" :is-edit="false" />
    </div>
    <div class="profile">
      <div class="basic">
        {{ profile.name }}
        <span>
          {{ profile.age }}歳 / {{ profile.prefecture }}
        </span>
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
  name: 'Profile',
  components: {
    BackgroundImage,
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
.profile-container {
  position: relative;

  .image-wrap {
    height: 350px;
  }

  .basic {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    > span {
      font-size: 18px;
      font-weight: 100;
    }
  }
  .detail {
    padding: 0 12px;
    line-height: 1.4;
    > p {
      white-space: pre-wrap;
    }
  }
}
</style>
