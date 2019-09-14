<template>
  <v-card class="mx-auto accountForm">
    <v-card-title class="mb-6 accountForm-title">
      アカウント作成
    </v-card-title>
    <LoginForm
      @send="createAccount"
    />
  </v-card>
</template>

<script>
import LoginForm from '@/components/organisms/LoginForm/LoginForm'

export default {
  name: 'Account',
  layout: 'login',
  components: {
    LoginForm
  },
  methods: {
    createAccount (mail, pass) {
      console.log('mail', mail)
      console.log('pass', pass)
    }
  }
}
</script>

<style lang="scss" scoped>
.accountForm {
  width: 65%;
  padding: 24px;

  &-title {
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
