import React, { createContext, useEffect, useState } from 'react'
import getBooks from '../utils/getBooks'

const initialBooksState = []

export const BooksDataContext = createContext(initialBooksState)

export const BooksDataProvider = ({ children }) => {
  const [booksData, setBooksData] = useState(initialBooksState)
  
  const getBooksData = async () => {
    const data = await getBooks()
    setBooksData(data)
  }

  useEffect(() => {
    getBooksData();
  }, [])

  return (
    <BooksDataContext.Provider value={{ booksData, getBooksData}}>
      {children}
    </BooksDataContext.Provider>
  )
}