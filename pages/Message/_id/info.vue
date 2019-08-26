<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <chat />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Chat from '@/components/organisms/Chat/Chat'

export default {
  name: 'MessageInfo',
  components: {
    Chat
  },
  computed: {
    ...mapGetters('message', {
      getList: 'list'
    }),
    list () {
      return this.getList
    },
    item () {
      return this.list[this.$route.params.id - 1]
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions('message', {
      fetchList: 'fetchList'
    }),
    async fetch () {
      this.list.length === 0 && await this.fetchList()
    }
  }
}
</script>
