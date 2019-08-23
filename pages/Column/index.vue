<template>
  <div>
    <v-list-item
      v-for="item in list"
      :key="item.title"
      class="setting-list"
    >
      <v-list-item-avatar class="setting-icon">
        <v-img :src="item.src" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>

      <v-list-item-action class="setting-icon">
        <v-btn icon>
          <v-icon color="grey lighten-1">
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Column',
  computed: {
    ...mapGetters('column', {
      getList: 'list'
    }),
    list () {
      return this.getList
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    ...mapActions('column', {
      fetchList: 'fetchList'
    }),
    async fetch () {
      await this.fetchList()
    }
  }
}
</script>

<style lang="scss" scoped>
.setting {
  &-list {
    border-bottom: 1px solid color(white, base);
  }
  &-icon {
    margin-top: 0px;
    margin-left: 10px;
    margin-bottom: 0px;
  }
}
</style>
