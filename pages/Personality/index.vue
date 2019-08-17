<template>
  <div class="personality-select-page">
    <swipe-card :contents="questions" />
  </div>
</template>

<script>
import SwipeCard from '../../components/organisms/SwipeCard/SwipeCard'
import CONST from '@/const'

export default {
  components: {
    SwipeCard
  },
  data () {
    return {
      questions: CONST.Personality.questions
    }
  }
}
</script>

<style lang="scss" scoped>
.personality-select-page {
  min-height: 450px;
}
</style>
