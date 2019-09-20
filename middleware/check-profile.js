import Cookies from 'js-cookie'
import { userCollection } from '@/util/firestore'

export default function ({ store, redirect }) {
  const uid = store.getters.uid || Cookies.get('client_id')
  const userRef = userCollection(uid)
  userRef.get()
    .then((doc) => {
      if (doc.data().name === '') {
        redirect('/profile/edit')
      }
    })
}
