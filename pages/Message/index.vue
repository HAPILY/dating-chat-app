<template>
  <div class="message my-4">
    <div v-for="item in list" :key="item.id">
      <nuxt-link :to="`/message/${item.id}/info`">
        <v-card class="message-list my-2 mx-auto d-flex">
          <v-list-item-avatar class="message-icon-wrap" min-width="80px">
            <v-img
              class="message-icon"
              width="80px"
              height="80px"
              :src="item.src"
            />
          </v-list-item-avatar>

          <div class="message-info">
            <v-card-title class="message-title">
              {{ item.name }} {{ item.age }}歳 {{ item.prefecture }}
            </v-card-title>

            <v-card-text class="message-text">
              <v-chip
                v-if="!item.isReply"
                class="message-label"
                color="secondary"
              >
                未返信
              </v-chip>
              {{ item.message }}
            </v-card-text>

            <v-card-text class="message-time">
              {{ messageTime(item.lastMessageTime) }}
            </v-card-text>
          </div>
        </v-card>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MessageList',
  computed: {
    ...mapGetters('message', {
      getList: 'list'
    }),
    list () {
      return this.getList
    },
    messageTime () {
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

<style lang="scss" scoped>
.message {
  &-list {
    padding: 25px;
  }

  &-icon {
    &-wrap {
      width: 80px !important;
      height: 80px !important;
      border-radius: 50% !important;
    }
  }

  &-info {
    position: relative;
    width: 80%;
    margin: 0 20px;
    padding: 0 0 20px;
  }

  &-label {
    padding: 0px 10px;
    font-size: 12px;
  }

  &-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &-text {
    color: color(white, base);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &-time {
    position: absolute;
    bottom: 0;
    font-size: 12px;
  }
}
@include media (sm) {
  .message {
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
