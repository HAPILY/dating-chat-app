<template>
  <div>
    <div @click="openSearchDialog">
      <v-icon>mdi-magnify</v-icon>
      <div class="header-name">
        {{ title }}
      </div>
    </div>
    <v-dialog
      v-model="searchDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar>
          <v-btn
            icon
            dark
            @click="searchDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
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
          <v-radio-group v-model="row" row class="mx-5">
            <v-radio label="顔重視" value="radio-1" class="mr-5"></v-radio>
            <v-radio label="性格重視" value="radio-2" class="mr-5"></v-radio>
          </v-radio-group>
          <v-list-item class="mx-5">
            <v-list-item-title>・居住地</v-list-item-title>
          </v-list-item>
          <v-select
            v-model="value"
            class="mx-5"
            :items="prefectureList"
            prepend-icon="mdi-map-marker"
            label="居住地"
          ></v-select>
          <v-list-item class="mx-5">
            <v-list-item-title>・職種</v-list-item-title>
          </v-list-item>
          <v-select
            v-model="value"
            class="mx-5"
            :items="professionList"
            attach
            chips
            label="職種"
            multiple
          ></v-select>
          <v-list-item class="mx-5">
            <v-list-item-title>・趣味選択</v-list-item-title>
          </v-list-item>
          <v-select
            v-model="value"
            class="mx-5"
            :items="hobbyList"
            attach
            chips
            label="趣味選択"
            multiple
          ></v-select>
          <v-list-item class="mx-5">
            <v-list-item-title>・フリーワード</v-list-item-title>
          </v-list-item>
          <v-text-field
            v-model="value"
            class="mx-5"
            label="フリーワード"
          ></v-text-field>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CONST from '@/const'

export default {
  name: 'SearchDialog',
  data () {
    return {
      title: '探す',
      prefectureList: CONST.Prefecture,
      hobbyList: CONST.Hobby,
      professionList: CONST.Profession,
      searchDialog: false
    }
  },
  methods: {
    openSearchDialog () {
      this.searchDialog = true
    },
    closeSearchDialog () {
      this.searchDialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-toolbar {
    flex: 0;
  }
</style>
