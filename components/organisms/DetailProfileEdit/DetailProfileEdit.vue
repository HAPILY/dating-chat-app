<template>
  <div>
    <v-text-field
      v-model="age"
      label="年齢"
      type="number"
    />
    <v-select
      v-model="prefecture"
      :items="prefectureList"
      label="都道府県"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CONST from '@/const'

export default {
  name: 'DetailProfileEdit',
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      prefectureList: CONST.Prefecture
    }
  },
  computed: {
    age: {
      get () {
        return this.profile.age
      },
      set (newVal) {
        if (this.age !== newVal) {
          this.updateProfileState({ type: 'age', value: newVal })
        }
      }
    },
    prefecture: {
      get () {
        return this.profile.prefecture
      },
      set (newVal) {
        if (this.prefecture !== newVal) {
          this.updateProfileState({ type: 'prefecture', value: newVal })
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
