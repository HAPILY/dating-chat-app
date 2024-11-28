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
    <div class="d-flex">
      <v-btn
        class="mr-5 loginForm-btn"
        color="blue"
        dark
        @click="onSubmit"
      >
        {{ type === 'login' ? 'ログイン' : '作成' }}
      </v-btn>
      <div
        v-if="type === 'login'"
        class="loginForm-fb"
        @click="fbLogin"
      >
        <img :src="fb" />
      </div>
    </div>
  </div>
</template>

<script>
import FbLoginBtn from '~/assets/images/fb-login.png'

export default {
  name: 'LoginForm',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      mail: '',
      pass: '',
      fb: FbLoginBtn
    }
  },
  methods: {
    onSubmit () {
      this.$emit('send', this.mail, this.pass)
    },
    fbLogin () {
      this.$emit('fbLogin')
    }
  }
}
</script>

<style lang="scss" scoped>
.loginForm {
  &-fb {
    cursor: pointer;
  }
  &-btn {
    height: 45px !important;
    margin-bottom: 10px;
  }
}
</style>
