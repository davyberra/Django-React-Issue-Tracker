import axios from 'axios'

const BASE_URL = '/api/projects'

const getAll = () => {
  const request = axios.get(BASE_URL)
  return request.then(response => response.data)
}

export default { getAll }

