<template>
  <v-layout row class="justify-center">
    <v-flex xs12 sm10 order-xs2 style="position: relative;">
      <div>
        <message :messages="message" />
      </div>
      <div class="typer">
        <v-textarea
          v-model="content"
          placeholder="Type here..."
          auto-grow
          rows="1"
        />
        <v-btn icon class="blue--text emoji-panel" @click="onSubmit">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Message from '@/components/molecules/Message/Message'

export default {
  name: 'Chat',
  components: {
    Message
  },
  data () {
    return {
      content: '',
      chatMessages: []
    }
  },
  computed: {
    ...mapGetters('message', {
      getMessage: 'message'
    }),
    userName () {
      return 'Tom'
    },
    chatID () {
      return 100
    },
    message () {
      return this.chatMessages
    }
  },
  created () {
    this.loadMessage()
    this.fetch()
  },
  methods: {
    ...mapActions('message', {
      sendMessage: 'sendMessage',
      loadMessage: 'loadMessage'
    }),
    fetch () {
      this.chatMessages = this.chatMessages.concat(this.getMessage)
    },
    async onSubmit () {
      if (this.content !== '') {
        const message = {
          chatID: this.chatID,
          userName: this.userName,
          src: 'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
          content: this.content,
          date: new Date().toString()
        }
        await this.sendMessage(message)
        await this.chatMessages.push(message)
        this.content = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollable {
  overflow-y: auto;
  height: 90vh;
}
.typer{
  overflow: scroll;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding-left: 15px;
  background-color: #424242;
  box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
}
</style>
