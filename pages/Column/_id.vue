<template>
  <v-card class="column mt-7 mx-auto">
    <v-img class="column-image" :src="column.src">
      <v-card-title class="column-title align-end fill-height">{{ column.title }}</v-card-title>
    </v-img>
    <v-card-text class="content" v-html="column.content"></v-card-text>
    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-facebook-box</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      column: {
        id: 1,
        src: 'https://kaeten-joy.info/wp-content/uploads/freespace41.jpg',
        title: '結婚願望がなかった私が「結婚、いいかも！」と思えた5つの出来事',
        content: '<h1 style="font-size: 24px;">このサイトでは、</h1>ウェブページを作るためにHTMLと並んで必要となる、CSSの仕組みや書き方について説明しています。スタイルシート（Style Sheet）は、HTMLやXHML、XMLといったウェブドキュメントのマークアップに対して、その表示形式を制御するために定義された言語です。CSSとは「Cascading Style Sheets」の略称であり、スタイルシートの中で最も一般的に知られている形式です。ここでは「スタイルシート＝CSS」として説明します。'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  width: 95vw;
}
.column-image {
  height: 250px;
}
.column-title {
  font-size: 24px;
}
.content {
  margin-top: 20px;
  line-height: 1.4;
}
</style>
