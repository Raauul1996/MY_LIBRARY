import { createContext, useEffect, useState } from 'react'
import getBooks from '../utils/getBooks'

const initialBooksState = {}

export const BooksDataContext = createContext(initialBooksState)

export const BooksDataProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([])
  
  const getBooksData = async () => {
    const data = await getBooks()
    setBooksData(data)
  }

  useEffect(() => {
    getBooksData();
    console.log('CONTEXTO',booksData)
  }, [])

  return (
    <BooksDataContext.Provider value={{ booksData, getBooksData }}>
      {children}
    </BooksDataContext.Provider>
  )
}