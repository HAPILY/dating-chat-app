<template>
  <div class="message">
    <div
      v-for="(message,index) in messages"
      :key="index"
      :class="{own: message.userName === userName}"
    >
      <div style="margin-top: 15px" />
      <div class="d-flex">
        <v-list-item-avatar class="message-icon-wrap" min-width="80px">
          <v-img
            class="message-icon"
            width="40px"
            height="40px"
            :src="message.src"
          />
        </v-list-item-avatar>
        <div class="content">
          <div class="content-text" v-text="message.content" />
        </div>
      </div>
      <span class="message-time">
        {{ new Date(Date.parse(message.date)).getFullYear() }}/{{ ('0' + (new Date(Date.parse(message.date)).getMonth() + 1)).slice(-2) }}/{{ ('0' + new Date(Date.parse(message.date)).getDate()).slice(-2) }}
        {{ ('0' + new Date(Date.parse(message.date)).getHours()).slice(-2) }}:{{ ('0' + new Date(Date.parse(message.date)).getMinutes()).slice(-2) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  computed: {
    userName () {
      return 'Tomm'
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  background: color(white, base);
  border: 1px solid color(gray, base);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-sizing: border-box;
  height: calc(100vh - 9.5rem);
  overflow-y: auto;
  padding: 10px;

  &.own {
    text-align: right;
    .content {
      background-color: color(blue, light);
    }
  }
  &-icon {
    &-wrap {
      width: 40px !important;
      height: 40px !important;
      min-width: 40px !important;
      border-radius: 50% !important;
      margin-right: 14px !important;
    }
  }
  &-time {
    font-size: 10px;
    color: color(gray, dark);
    margin-left: 55px;
  }

  .content {
    padding: 12px;
    color: color(white, base);
    background-color: color(blue, base);
    border-radius: 10px;
    display:inline-block;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
    max-width: 50%;
    height: fit-content;
    word-wrap: break-word;
    &-text {
      font-size: 14px;
      white-space: pre-wrap;
      word-wrap: break-word;
      line-height: 1.2;
    }
  }
}
@media (max-width: 480px) {
  .chat-container .content {
    max-width: 60%;
  }
}
</style>
