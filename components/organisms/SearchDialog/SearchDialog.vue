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
          <v-list-item>
            <v-radio-group v-model="row" row>
              <v-radio label="Option 1" value="radio-1"></v-radio>
              <v-radio label="Option 2" value="radio-2"></v-radio>
            </v-radio-group>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'SearchDialog',
  data () {
    return {
      title: '探す',
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
