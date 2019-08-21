<template>
  <div class="message my-4">
    <div v-for="item in items" :key="item.id">
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
export default {
  name: 'MessageList',
  data () {
    return {
      items: [
        {
          id: 1,
          name: 'S.T',
          age: 20,
          prefecture: '埼玉',
          src: 'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
          message: 'メッセージを交換していません。',
          lastMessageTime: '2019-08-17 12:10:30',
          isReply: true
        },
        {
          id: 2,
          name: 'Ellen Kat',
          age: 30,
          prefecture: '和歌山',
          src: 'http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg',
          message: 'こんばんは！マッチングありがとうございます。よろしくお願いします。こんばんは！マッチングありがとうございます。よろしくお願いします。',
          lastMessageTime: '2019-08-15 22:10:30',
          isReply: false
        },
        {
          id: 3,
          name: 'かなえ',
          age: 25,
          prefecture: '東京',
          src: 'http://w1nd.cc/promo/347.jpg',
          message: `Hello..\n nice to meet you..\n thanks..`,
          lastMessageTime: '2019-07-17 12:10:30',
          isReply: true
        }
      ]
    }
  },
  computed: {
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
