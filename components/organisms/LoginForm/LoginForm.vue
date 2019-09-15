<template>
  <div class="loginForm">
    <v-text-field
      v-model="mail"
      label="メールアドレス"
    />
    <v-text-field
      v-model="pass"
      label="パスワード"
      type="password"
    />
    <v-btn
      class="loginForm-btn"
      block
      color="blue"
      dark
      @click="onSubmit"
    >
      ログイン
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      mail: '',
      pass: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('send', this.mail, this.pass)
    }
  }
}
</script>

<style lang="scss" scoped>
.loginForm {
  &-btn {
    margin-bottom: 10px;
  }
}
</style>
