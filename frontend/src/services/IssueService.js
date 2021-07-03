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

const updateIssue = (id, updatedIssue) => {
  const request = axios.put(`${BASE_URL}${id}/`, updatedIssue)
  return request.then(response => response.data)
}

export default { getAll, createIssue, deleteIssue, updateIssue }

