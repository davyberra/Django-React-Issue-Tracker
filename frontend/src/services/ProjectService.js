import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/projects/'

const getAll = () => {
  const request = axios.get(BASE_URL)
  return request.then(response => response.data)
}

const getAllForUser = id => {
  const request = axios.get(BASE_URL)
  const data = request.then(response => response.data)
  return data.map(project => project.user === id)
}

const createProject = newProject => {
  const request = axios.post(BASE_URL, newProject)
  return request.then(response => response.data)
}

const deleteProject = id => {
  const request = axios.delete(`${BASE_URL}${id}/`)
  return request
}

export default { getAll, createProject, getAllForUser, deleteProject }

