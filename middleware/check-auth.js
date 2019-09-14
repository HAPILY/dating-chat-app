export default async function ({ app, store, redirect, req }) {
  if (!req) {
    return
  }

  if (req.headers.cookie) {
    const cookies = app.$cookies.getAll({ fromRes: false })
    if (cookies.clientId && cookies.clientId !== 'null') {
      await store.dispatch('visit/fetchList')
    } else {
      return redirect('302', '/login')
    }
  }
}
