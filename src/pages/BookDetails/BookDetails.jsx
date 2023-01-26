import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import styles from './BookDetails.module.css'

// Services
import * as bookService from '../../services/bookService'

const BookDetails = (props) => {
  // const location = useLocation()
  const { isbn } = useParams()
  const [book, setBook] = useState(null)
  // const isbn = location.state.book.isbn

  useEffect(() => {
    const fetchBook = async () => {
      const data = await bookService.show(isbn)
      setBook(data)
    }
    fetchBook()
  }, [isbn])

  console.log('Book State:', book)

  return (
    <main>
      Details
    </main>
  )
}

export default BookDetails