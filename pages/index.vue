<template>
  <div class="top-face-page">
    <swipe-card :contents="people" :stamps="stamps" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SwipeCard from '../components/organisms/SwipeCard/SwipeCard'

export default {
  components: {
    SwipeCard
  },
  data () {
    return {
      stamps: {
        yes: 'LIKE',
        no: 'NOPE'
      }
    }
  },
  computed: {
    ...mapGetters('people', {
      getPeople: 'people'
    }),
    people () {
      return this.getPeople
    }
  },
  created () {
    this.fetch()
    console.log(this.getPeople)
  },
  methods: {
    ...mapActions('people', {
      fetchPeople: 'fetchPeople'
    }),
    async fetch () {
      await this.fetchPeople()
    }
  }
}
</script>

<style lang="scss" scoped>
.top-face-page {
  min-height: 500px;
}
</style>
