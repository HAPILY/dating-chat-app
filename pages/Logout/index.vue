<template>
  <div />
</template>

<script>
import Cookies from 'js-cookie'
import firebase from '@/plugins/firebase'

export default {
  name: 'Logout',
  layout: 'login',
  fetch ({ redirect }) {
    firebase.auth().signOut()
      .then(() => {
        Cookies.remove('client_id')
        redirect('/login')
      }).catch((err) => {
        alert(err)
      })
  }
}
</script>
