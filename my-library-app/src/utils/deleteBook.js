import {BASE_URL} from '@env'

const deleteBook = async (bookId) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      return true
    } else {
      return false
    }

  } catch (error) {
    console.error('Delete book failed', error)
    return false
  }
}

export default deleteBook