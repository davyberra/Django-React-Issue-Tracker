import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/v1/issue_tracker/auth/user/'

const config = {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`
  }
}

const getUser = () => {
  const request = axios.get(BASE_URL, config)
  return request.then(response => response.data)
}

export default { getUser }