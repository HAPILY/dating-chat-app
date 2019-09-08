<template>
  <div class="searchDialog">
    <div @click="openSearchDialog">
      <v-icon color="white">mdi-magnify</v-icon>
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
        <v-toolbar class="searchDialog-header">
          <v-btn
            icon
            dark
            @click="searchDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
        <search-form
          v-model="searchValue"
        />
        <v-btn
          @click="onSearch"
          class="mt-5 searchDialog-send"
          block
          color="primary"
        >
          検索
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SearchForm from '@/components/organisms/SearchForm/SearchForm'

export default {
  name: 'SearchDialog',
  components: {
    SearchForm
  },
  data () {
    return {
      title: '探す',
      searchDialog: false,
      searchValue: {
        important: '',
        prefecture: '',
        profession: '',
        hobby: '',
        freeWord: ''
      }
    }
  },
  methods: {
    openSearchDialog () {
      this.searchDialog = true
    },
    closeSearchDialog () {
      this.searchDialog = false
    },
    onSearch () {
      console.log(this.searchValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.searchDialog {
  &-header {
    background: color(blue, base);
    color: color(white, base);
    flex: 0;
  }
}
</style>
