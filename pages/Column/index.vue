<template>
  <div>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      class="setting-list"
    >
      <v-list-item-avatar class="setting-icon">
        <v-img :src="item.src"/>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>

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
export default {
  name: 'Column',
  data () {
    return {
      items: [
        {
          id: 1,
          src: 'https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg',
          title: '結婚願望がなかった私が「結婚、いいかも！」と思えた5つの出来事',
          to: '/_id'
        },
        {
          id: 2,
          src: 'http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg',
          title: '「私ドMだから」合コンでやりがちな非モテ行動ランキング',
          to: '/_id'
        },
        {
          id: 3,
          src: 'http://w1nd.cc/promo/347.jpg',
          title: 'やっぱり飲み会でモテたい！',
          to: '/_id'
        }
      ]
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
</style>
