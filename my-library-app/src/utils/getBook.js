import {BASE_URL} from '@env'

const getBook = async (book) => {
  console.log(BASE_URL+'/books'+book.id)
  try {
    const response = await fetch(BASE_URL+'/books'+book.id)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Get book failed', error)
    return false
  }
}

export default getBook;