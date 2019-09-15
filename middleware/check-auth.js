import Cookies from 'js-cookie'

export default async function ({ store, redirect, route }) {
  const cookies = Cookies.get('clientId')
  if (cookies && cookies !== 'null') {
    await store.dispatch('visit/fetchList')
  } else {
    if (route.name !== 'Login' && route.name !== 'Account' && route.name !== 'Logout') {
      redirect('301', '/Login')
    }
  }
}
