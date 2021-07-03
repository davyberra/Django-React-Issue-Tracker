import axios from 'axios'

const BASE_URL = '/api/v1/issue_tracker/auth/register/'

const post = user => {
  const request = axios.post(BASE_URL, user)
  return request.then(response => response.data)
}

export default { post }