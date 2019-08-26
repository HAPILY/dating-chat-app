<template>
  <div>
    <v-text-field
      v-model="name"
      label="名前"
    />
    <v-textarea
      v-model="detail"
      label="自己紹介"
      rows="10"
      auto-grow
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BasicProfile',
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  computed: {
    name: {
      get () {
        return this.profile.name
      },
      set (newVal) {
        if (this.name !== newVal) {
          this.updateProfileState({ type: 'name', value: newVal })
        }
      }
    },
    detail: {
      get () {
        return this.profile.detail
      },
      set (newVal) {
        if (this.detail !== newVal) {
          this.updateProfileState({ type: 'detail', value: newVal })
        }
      }
    }
  },
  methods: {
    ...mapActions('mypage', {
      updateProfileState: 'updateProfileState'
    })
  }
}
</script>
