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
  console.log(book)
  
  useEffect(() => {
    const fetchBook = async () => {
      const data = await bookService.show(qKey)
      setBook(data)
      console.log(data.entries[0])
    }
    fetchBook()
  }, [qKey])
  
  // console.log('Book State:', book)

  if (!book) return <Loading />

  return (
    <>
      <main>
        <div className={styles.detailsContainer}>
          <header>
            {/* <img src={`https://covers.openlibrary.org/b/olid/${book.key.split('s/')[1]}-M.jpg`} alt="book cover" /> */}
            <span>
              <h1>{book.title}</h1>
            </span>
          </header>
          {/* <p>{book.book_details[0].description}</p> */}
        </div>
      </main>
    </>
  )
}

export default BookDetails