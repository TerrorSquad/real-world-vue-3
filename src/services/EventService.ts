import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/TerrorSquad/real-world-vue-3/',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents(perPage = 2, page = 1) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
