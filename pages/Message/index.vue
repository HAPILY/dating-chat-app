<template>
  <div class="message my-4">
    <div v-for="item in list" :key="item.id">
      <nuxt-link :to="`/message/${item.id}/info`">
        <CardListInfo :item="item" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardListInfo from '@/components/molecules/CardListInfo/CardListInfo'

export default {
  name: 'MessageList',
  components: {
    CardListInfo
  },
  computed: {
    ...mapGetters('message', {
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
    ...mapActions('message', {
      fetchList: 'fetchList'
    }),
    async fetch () {
      await this.fetchList()
    }
  }
}
</script>
