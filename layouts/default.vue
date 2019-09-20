<template>
  <v-app dark>
    <Header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer class="footer">
      <span>&copy; 2019</span>
    </v-footer>
    <v-snackbar
      class="snackbar"
      v-model="snackbar"
      color="cyan darken-2"
    >
      {{ snackbarText }}
      <v-btn
        color="white"
        text
        @click="closeSnackbar"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '@/components/global/Header.vue'

export default {
  components: {
    Header
  },
  computed: {
    ...mapGetters({
      getSnackbar: 'snackbar',
      getSnackbarText: 'snackbarText'
    }),
    snackbar () {
      return this.getSnackbar
    },
    snackbarText () {
      return this.getSnackbarText
    }
  },
  methods: {
    ...mapActions({
      closeSnackbar: 'closeSnackbar'
    })
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
