<template>
  <div>
    <div
      v-for="item in list"
      :key="item.title"
      class="setting-list"
    >
      <nuxt-link class="d-flex" :to="`/Column/${item.id}`">
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
      </nuxt-link>
    </div>
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
  created () {
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
    border-bottom: 1px solid color(gray, base);
  }
  &-icon {
    margin-top: 0px;
    margin-left: 10px;
    margin-bottom: 0px;
  }
}
</style>
