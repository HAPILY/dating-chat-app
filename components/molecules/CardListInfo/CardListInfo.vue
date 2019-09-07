<template>
  <v-card class="cardListInfo-list my-2 mx-auto d-flex">
    <v-list-item-avatar class="cardListInfo-icon-wrap" min-width="80px">
      <v-img
        class="cardListInfo-icon"
        width="80px"
        height="80px"
        :src="item.src"
      />
    </v-list-item-avatar>
    <div class="cardListInfo-info">
      <v-card-title class="cardListInfo-title">
        {{ item.name }} {{ item.age }}歳 {{ item.prefecture }}
      </v-card-title>

      <v-card-text class="cardListInfo-detail">
        {{ item.detail }}
      </v-card-text>

      <v-card-text class="cardListInfo-time">
        {{ lastTime(item.lastTime) }}
      </v-card-text>
    </div>
    <v-chip
      v-if="!item.isChecked"
      class="cardListInfo-label"
      color="red"
      label
      large
    >
      New
    </v-chip>
  </v-card>
</template>

<script>
export default {
  name: 'CardListInfo',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    lastTime () {
      return function (time) {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        const lastMessageDate = new Date(time)
        const lastMessageYear = lastMessageDate.getFullYear()
        const lastMessageMonth = lastMessageDate.getMonth() + 1
        const lastMessageDay = lastMessageDate.getDate()
        if (`${year} ${month} ${day}` === `${lastMessageYear} ${lastMessageMonth} ${lastMessageDay}`) {
          return `${lastMessageDate.getHours()}:${lastMessageDate.getMinutes()}`
        } else {
          return `${lastMessageDate.getMonth() + 1}/${lastMessageDay}`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cardListInfo {
  &-list {
    background: color(white, base);
    padding: 25px;
    position: relative;
    overflow: hidden;
  }
  &-icon {
    &-wrap {
      width: 80px !important;
      height: 80px !important;
      border-radius: 50% !important;
      margin-left: 15px;
    }
  }
  &-info {
    position: relative;
    width: 80%;
    margin: 0 20px;
    padding: 0 0 20px;
  }
  &-label {
    color: color(white, base);
    height: 40px;
    position: absolute;
    top: -5px;
    left: -25px;
    transform: rotate(-45deg);
    padding: 0px 25px;
    font-size: 12px;
    font-weight: bold;
  }
  &-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &-detail {
    color: color(black, dark);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &-time {
    color: color(black, dark);
    position: absolute;
    bottom: 0;
    font-size: 12px;
  }
}
@include media (sm) {
  .cardListInfo {
    &-list {
      padding: 15px;
    }
    &-title {
      font-size: 16px;
    }
    &-info {
      margin: 0;
      padding: 0 20px 20px 0;
    }
  }
}
</style>
