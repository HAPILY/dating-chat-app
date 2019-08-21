<template>
  <div class="personality-select-page">
    <div class="swipe-cards" @click="changePage()">
      <swipe-card :contents="question" />
    </div>
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
  },
  methods: {
    changePage () {
      if (!this.question[0]) {
        location.href = '/Personality/confirm'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.personality-select-page {
  min-height: 450px;
}
.swipe-cards {
  top: 50px;
  left: 10px;
  width: 95%;
  position: absolute;
  display: block;
}
</style>
