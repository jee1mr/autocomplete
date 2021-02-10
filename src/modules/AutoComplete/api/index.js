// Imports
import axios from 'axios'

// Filter Users API
export const filterUsers = async (searchText = '') => {
  return await axios.get(`/api/users/${searchText}`)
}
