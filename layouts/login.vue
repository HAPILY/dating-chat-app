<template>
  <v-app dark>
    <LoginHeader />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer class="footer">
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import LoginHeader from '@/components/global/LoginHeader.vue'

export default {
  components: {
    LoginHeader
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
}
.v-content {
  background: color(white, base);
  z-index: 1;
  transition: none;
}
.footer {
  background: color(blue, base);
  color: color(white, base);
  padding: 20px;
}
</style>
