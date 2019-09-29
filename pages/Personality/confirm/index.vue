<template>
  <div>
    <v-list-item
      v-for="answer in answers"
      :key="answer.id"
      class="setting-list"
    >
      <v-list-item-avatar class="setting-icon">
        <v-img :src="answer.face" />
      </v-list-item-avatar>

      <v-list-item-content>
        Q{{ answer.id }}<v-list-item-title v-text="answer.name" />
      </v-list-item-content>
      <v-chip class="justify-end">
        <div class="answer_content">
          {{ answer.answer }}
        </div>
      </v-chip>

      <v-list-item-action class="setting-icon">
        <v-btn icon>
          <v-icon color="grey lighten-1">
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <nuxt-link to="/Personality/result">
      <v-btn class="result" block color="blue-grey" dark>
        結果をみる
      </v-btn>
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('personality', {
      getAnswer: 'answer'
    }),
    answers () {
      return this.getAnswer
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions('personality', {
      fetchAnswer: 'fetchAnswer'
    }),
    async fetch () {
      await this.fetchAnswer()
    }
  }
}
</script>

<style lang="scss" scoped>
.setting {
  &-list {
    border-bottom: 1px solid color(gray, base);
  }
  &-icon {
    margin-top: 0px;
    margin-left: 10px;
    margin-bottom: 0px;
  }
}
.answer_content {
  margin: 0 10px;
}
.result {
  margin-top: 20px;
}
</style>
