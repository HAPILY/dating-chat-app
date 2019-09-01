export default async function ({ store }) {
  // TODO ログインのset
  await store.dispatch('visit/fetchList')
}
