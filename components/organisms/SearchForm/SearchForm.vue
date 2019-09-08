<template>
  <v-card tile class="searchForm">
    <v-list>
      <v-list-item class="ma-5">
        <v-list-item-content>
          <v-list-item-title>探すオプションを利用しよう</v-list-item-title>
          <v-list-item-subtitle>設定することであなたに合った相手を表示することができます。</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="mx-5">
        <v-list-item-title>・顔・性格重視選択</v-list-item-title>
      </v-list-item>
      <v-radio-group v-model="important" row class="mx-5">
        <v-radio label="顔重視" value="face" class="mr-5" />
        <v-radio label="性格重視" value="personal" class="mr-5" />
      </v-radio-group>
      <v-list-item class="mx-5">
        <v-list-item-title>・居住地</v-list-item-title>
      </v-list-item>
      <v-select
        v-model="prefecture"
        class="mx-5"
        :items="prefectureList"
        prepend-icon="mdi-map-marker"
        label="居住地"
      />
      <v-list-item class="mx-5">
        <v-list-item-title>・職種</v-list-item-title>
      </v-list-item>
      <v-select
        v-model="profession"
        class="mx-5"
        :items="professionList"
        attach
        chips
        label="職種"
        multiple
      />
      <v-list-item class="mx-5">
        <v-list-item-title>・趣味選択</v-list-item-title>
      </v-list-item>
      <v-select
        v-model="hobby"
        class="mx-5"
        :items="hobbyList"
        attach
        chips
        label="趣味選択"
        multiple
      />
      <v-list-item class="mx-5">
        <v-list-item-title>・フリーワード</v-list-item-title>
      </v-list-item>
      <v-text-field
        v-model="freeWord"
        class="mx-5"
        label="フリーワード"
      />
    </v-list>
  </v-card>
</template>

<script>
import CONST from '@/const'

export default {
  name: 'SearchForm',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      prefectureList: CONST.Prefecture,
      hobbyList: CONST.Hobby,
      professionList: CONST.Profession
    }
  },
  computed: {
    important: {
      get () {
        return this.value.important
      },
      set (newVal) {
        if (this.important !== newVal) {
          this.updateValue({ important: newVal })
        }
      }
    },
    prefecture: {
      get () {
        return this.value.prefecture
      },
      set (newVal) {
        if (this.prefecture !== newVal) {
          this.updateValue({ prefecture: newVal })
        }
      }
    },
    profession: {
      get () {
        return this.value.profession
      },
      set (newVal) {
        if (this.profession !== newVal) {
          this.updateValue({ profession: newVal })
        }
      }
    },
    hobby: {
      get () {
        return this.value.hobby
      },
      set (newVal) {
        if (this.hobby !== newVal) {
          this.updateValue({ hobby: newVal })
        }
      }
    },
    freeWord: {
      get () {
        return this.value.freeWord
      },
      set (newVal) {
        if (this.freeWord !== newVal) {
          this.updateValue({ freeWord: newVal })
        }
      }
    }
  },
  methods: {
    updateValue (diff) {
      this.$emit('input', { ...this.value, ...diff })
    }
  }
}
</script>

<style lang="scss" scoped>
.searchForm {
  height: 100vh;
}
</style>
