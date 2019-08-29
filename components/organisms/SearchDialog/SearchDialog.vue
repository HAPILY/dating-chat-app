<template>
  <div>
    <div @click="openSearchDialog">
      <v-icon>mdi-magnify</v-icon>
      <div class="header-name">
        探す
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
        <v-toolbar
          flat
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="searchDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'SearchDialog',
  data () {
    return {
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

<style scoped>

</style>
