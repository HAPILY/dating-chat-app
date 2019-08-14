<template>
  <v-app dark>
    <Header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/global/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@include media (xl, lg) {
  .v-content {
    padding: 0px 0px 36px 0 !important;
  }
}
.container {
  margin: auto;
}
.v-content {
  transition: none;
}
</style>
