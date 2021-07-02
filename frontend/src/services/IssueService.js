import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/issues/'

const getAll = () => {
  const request = axios.get(BASE_URL)
  return request.then(response => response.data)
}

const createIssue = newIssue => {
  const request = axios.post(BASE_URL, newIssue)
  return request.then(response => response.data)
}

const deleteIssue = id => {
  const request = axios.delete(`${BASE_URL}${id}/`)
  return request
}

export default { getAll, createIssue, deleteIssue }

