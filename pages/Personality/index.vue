<template>
  <div class="personality-select-page">
    <div class="swipe-cards" @click="changePage()">
      <swipe-card :contents="questions" />
    </div>
  </div>
</template>

<script>
import SwipeCard from '@/components/organisms/SwipeCard/SwipeCard'
import CONST from '@/const'

export default {
  components: {
    SwipeCard
  },
  data () {
    return {
      questions: CONST.Personality.questions
    }
  },
  methods: {
    changePage () {
      if (!this.questions[0]) {
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
