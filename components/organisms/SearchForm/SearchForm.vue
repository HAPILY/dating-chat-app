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
</template>

<script>
export default {
  name: 'SearchCard'
}
</script>

<style lang="scss" scoped>
.searchForm {
  height: 100vh;
}
</style>
