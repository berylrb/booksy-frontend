import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import { useLocation } from "react-router-dom"
import styles from './BookDetails.module.css'
import Loading from "../Loading/Loading"

// Services
import * as bookService from '../../services/bookService'

const BookDetails = (props) => {
  const { qKey } = useParams()
  const [book, setBook] = useState(null)
 

  useEffect(() => {
    const fetchBook = async () => {
      const data = await bookService.show(qKey)
      setBook(data)
    }
    fetchBook()
  }, [qKey])

  // console.log('Book State:', book)

  if (!book) return <Loading />

  return (
    <main>
      Details
    </main>
  )
}

export default BookDetails