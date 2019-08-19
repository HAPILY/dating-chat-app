<template>
  <div class="personality-select-page">
    <swipe-card :contents="question" />
  </div>
</template>

<script>
import SwipeCard from '../../../components/organisms/SwipeCard/SwipeCard'

export default {
  components: {
    SwipeCard
  },
  data () {
    return {
      question: [
        {
          id: 1,
          name: '知らない人とすぐ話ができる',
          src: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.personality-select-page {
  min-height: 450px;
}
</style>
