<template>
  <div>
    <v-app-bar class="header" app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'LoginHeader',
  data () {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: color(blue, base);
  border-color: color(blue, base);
  color: color(white, base);
}
@include media (xl, lg) {
  .header {
    position: initial;
  }
}
@include media (xl, lg, md) {
  .header {
    &-icon {
      width: 70px;
      margin: 0 10px;
      text-align: center;
      > a {
        color: color(white, base);
      }
    }
  }
}
</style>
