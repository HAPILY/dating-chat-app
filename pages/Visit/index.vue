<template>
  <div class="visit my-4">
    <div v-for="item in list" :key="item.id">
      <nuxt-link :to="`/Profile/${item.id}`">
        <CardListInfo :item="item" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardListInfo from '@/components/molecules/CardListInfo/CardListInfo'

export default {
  name: 'Visit',
  components: {
    CardListInfo
  },
  computed: {
    ...mapGetters('visit', {
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
    ...mapActions('visit', {
      fetchList: 'fetchList',
      updateChecked: 'updateChecked'
    }),
    async fetch () {
      await this.fetchList()
    }
  },
  async beforeDestroy () {
    await this.updateChecked(this.list)
  }
}
</script>
