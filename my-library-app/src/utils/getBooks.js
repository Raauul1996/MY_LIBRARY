import {BASE_URL} from '@env'

const getBooks = async () => {
  try {
    const response = await fetch(BASE_URL+'/books')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Get books failed', error)
    return false
  }
}

export default getBooks;