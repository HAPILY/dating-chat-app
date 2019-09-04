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
        <search-form></search-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SearchForm from '@/components/organisms/SearchForm/SearchForm'
import CONST from '@/const'

export default {
  name: 'SearchDialog',
  components: {
    SearchForm
  },
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
