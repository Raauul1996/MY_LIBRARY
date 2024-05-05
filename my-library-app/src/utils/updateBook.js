import {BASE_URL} from '@env'

const updateBook = async (bookId, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error('Update book failed:', error)
    return false
  }
}

export default updateBook