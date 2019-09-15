import firebase from '@/plugins/firebase'

export const userCollection = (uid) => {
  return firebase.firestore().collection('users').doc(uid)
}
