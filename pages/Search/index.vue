<template>
  <v-card tile>
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
</template>

<script>
import SearchForm from '@/components/organisms/SearchForm/SearchForm'

export default {
  components: {
    SearchForm
  },
  data () {
    return {
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
    onSearch () {
      console.log(this.searchValue)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
