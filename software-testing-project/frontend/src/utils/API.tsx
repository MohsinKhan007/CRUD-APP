import axios from 'axios'
// Create a Axios instance and providing a base URL for the CRUD methods
const API = axios.create({
  baseURL: 'http://localhost:8082/api/Employees',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  },
})

export default API
