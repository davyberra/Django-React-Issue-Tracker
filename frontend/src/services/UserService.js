import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/v1/issue_tracker/auth/user/'

const getUsername = () => {
  const request = axios.get(BASE_URL)
  return request.then(response => response.data)
}

export default { getUsername }