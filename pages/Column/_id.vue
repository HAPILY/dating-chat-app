<template>
  <v-card class="column mt-7 mx-auto">
    <v-img class="column-image" :src="item.image">
      <v-card-title class="column-title align-end fill-height">
        {{ item.title }}
      </v-card-title>
    </v-img>
    <v-card-text class="content" v-html="item.content" />
    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-facebook-box</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('column', {
      getColumn: 'column'
    }),
    list () {
      return this.getColumn
    },
    item () {
      return this.list[this.$route.params.id - 1]
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions('column', {
      fetchList: 'fetchColumn'
    }),
    async fetch () {
      this.list.length === 0 && await this.fetchColumn()
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  width: 95vw;
}
.column-image {
  height: 250px;
}
.column-title {
  color: color(white, base);
  font-size: 24px;
  font-weight: bold;
}
.content {
  margin-top: 20px;
  line-height: 1.4;
}
</style>
