import {BASE_URL} from '@env'

const createBook = async (newBook) => {
  try {
    const response = await fetch(`${BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })

    if (response.ok) {
      return true
    } else {        
      return false
    }
    
  } catch (error) {
    console.error('Create book failed:', error.message)
    return false
  }
}

export default createBook
