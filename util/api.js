import axios from '@nuxtjs/axios'

const GET = async (path, params) => {
  const res = await axios.get(path, params)
  return res.data
}

const POST = async (path, params) => {
  const res = await axios.post(path, params)
  return res.data
}

export default {
  GET,
  POST
}
