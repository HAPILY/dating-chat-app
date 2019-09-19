<template>
  <div>
    <v-text-field
      v-model="name"
      :rules="[rules.required, rules.min20]"
      counter="20"
      label="名前"
    />
    <v-textarea
      v-model="detail"
      label="自己紹介"
      rows="10"
      :rules="[rules.required, rules.min500]"
      counter="500"
      auto-grow
    />
    <v-radio-group v-model="gender" row>
      <v-radio
        key="man"
        label="男性"
        value="man"
      />
      <v-radio
        key="woman"
        label="女性"
        value="woman"
      />
      <v-radio
        key="other"
        label="その他"
        value="other"
      />
    </v-radio-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BasicProfileEdit',
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      rules: {
        required: value => !!value || '必須項目です。',
        min20: v => v.length <= 20 || '20文字以内で入力してください。',
        min500: v => v.length <= 500 || '500文字以内で入力してください。'
      }
    }
  },
  computed: {
    name: {
      get () {
        return this.profile.name || ''
      },
      set (newVal) {
        if (this.name !== newVal) {
          this.updateProfileState({ type: 'name', value: newVal })
        }
      }
    },
    detail: {
      get () {
        return this.profile.detail || ''
      },
      set (newVal) {
        if (this.detail !== newVal) {
          this.updateProfileState({ type: 'detail', value: newVal })
        }
      }
    },
    gender: {
      get () {
        return this.profile.gender
      },
      set (newVal) {
        if (this.gender !== newVal) {
          this.updateProfileState({ type: 'gender', value: newVal })
        }
      }
    }
  },
  methods: {
    ...mapActions('profile', {
      updateProfileState: 'updateProfileState'
    })
  }
}
</script>
