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
import firebase from '@/plugins/firebase'
import LoginForm from '@/components/organisms/LoginForm/LoginForm'

export default {
  name: 'Account',
  layout: 'login',
  components: {
    LoginForm
  },
  methods: {
    createAccount (mail, pass) {
      firebase.auth().createUserWithEmailAndPassword(mail, pass)
        .then((auth) => {
          auth.user.sendEmailVerification()
        })
        .then(() => {
          alert('メールアドレス確認メールを送信しました。')
          this.$router.push('/Login')
        })
        .catch((err) => {
          console.log(err)
          alert('アカウントの作成に失敗しました。')
        })
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
