<template>
  <div>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      class="setting-list"
    >
      <v-list-item-avatar class="setting-icon">
        <v-icon v-text="item.icon" />
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
import CONST from '@/const'

export default {
  name: 'Setting',
  data () {
    return {
      items: CONST.Setting.items
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
    margin-bottom: 0px;
  }
}
</style>
