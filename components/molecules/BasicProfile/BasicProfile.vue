<template>
  <div class="profile-basic">
    {{ profile.name }}
    <span>
      {{ profile.age }}歳 / {{ profile.prefecture }}
    </span>
    <nuxt-link v-if="!profileId" to="/Profile/edit">
      <v-btn outlined x-small icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BasicProfile',
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  computed: {
    profileId () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
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
}
</style>
