<template>
  <div class="detail">
    <p>{{ profile.detail }}</p>
  </div>
</template>

<script>
export default {
  name: 'DetailProfile',
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  &-detail {
    padding: 0 12px;
    line-height: 1.4;
    > p {
      white-space: pre-wrap;
    }
  }
}
</style>
