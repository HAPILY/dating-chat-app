<template>
  <div>
    <v-list-item
      v-for="question in questions"
      :key="question.id"
      class="setting-list"
    >
      <v-list-item-avatar class="setting-icon">
        <v-img :src="question.src"/>
      </v-list-item-avatar>

      <v-list-item-content>
        Q{{ question.id }}<v-list-item-title v-text="question.name" />
      </v-list-item-content>
      <v-chip class="justify-end">
        <div class="answer_content">
          はい
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
  </div>
</template>

<script>
import CONST from '@/const'

export default {
  data () {
    return {
      questions: CONST.Personality.questions
    }
  }
}
</script>

<style lang="scss" scoped>
.setting {
  &-list {
    border-bottom: 1px solid color(white, base);
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
</style>
