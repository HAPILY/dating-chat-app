<template>
  <v-card class="mx-auto login">
    <v-card-title class="mb-6 login-title">
      ログイン
    </v-card-title>
    <p
      v-if="errorMsg !== ''"
      class="login-error"
    >
      {{ errorMsg }}
    </p>
    <LoginForm
      type="login"
      @send="login"
      @fbLogin="fbLogin"
    />
    <nuxt-link
      to="/Account"
      class="login-crete-account"
    >
      アカウント作成
    </nuxt-link>
  </v-card>
</template>

<script>
import Cookies from 'js-cookie'
import firebase from '@/plugins/firebase'
import LoginForm from '@/components/organisms/LoginForm/LoginForm'

export default {
  name: 'Login',
  layout: 'login',
  components: {
    LoginForm
  },
  data () {
    return {
      errorMsg: ''
    }
  },
  methods: {
    login (mail, pass) {
      firebase.auth().signInWithEmailAndPassword(mail, pass)
        .then((auth) => {
          if (!auth.user.emailVerified) {
            this.errorMsg = 'メールアドレスが確認できていません'
            return
          }
          console.log('uid', auth.user.uid)
          Cookies.set('client_id', auth.user.uid, { expires: 30 })
          this.$router.push('/')
        }).catch((err) => {
          this.errorMsg = err.message
        })
    },
    fbLogin () {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 65%;
  padding: 24px;

  &-title {
    font-size: 22px;
    font-weight: bold;
  }
  &-crete {
    &-account {
      display: inline-block;
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: color(blue, base) !important;
    }
  }

  &-error {
    display: inline-block;
    color: color(red, base);
    margin-bottom: 16px;
  }
}
</style>
