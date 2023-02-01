import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import styles from './BookDetails.module.css'
import Loading from "../Loading/Loading"

// Services
import * as bookService from '../../services/bookService'
import * as profileService from '../../services/profileService'

const BookDetails = ({ user }) => {
  const { qKey } = useParams()
  const navigate = useNavigate()
  const [bookDetails, setBookDetails] = useState(null)
  const [savedBook, setSavedBook] = useState()
  console.log(bookDetails)
  const location = useLocation()
  const { imgKey } = location.state
  const { imgLink } = location.state
  const { authorName } = location.state
  const bookDesc = bookDetails?.description?.value

  console.log(typeof authorName[0], authorName)

  useEffect(() => {
    const fetchBook = async () => {
      const data = await bookService.show(qKey)
      setBookDetails(data)
      console.log(data)
    }
    fetchBook()
  }, [qKey])


  const handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log('user', user.profile, bookDetails)

    const formData = {
      ...bookDetails,
      author: authorName[0],
      imgUrl: imgLink
    }

    const book = await profileService.addBook(user.profile, formData)
    setSavedBook(book)
    console.log('book', book)
  }

  const buttonSubmit = async (evt) => {
    navigate('/books')
  }

  console.log(typeof bookDesc)
  if (!bookDetails) return <Loading />

  return (
    <>
      <main>
        <div className={styles.detailsContainer}>
          <header>
            {/* <img src={`https://covers.openlibrary.org/b/olid/${book.key.split('s/')[1]}-M.jpg`} alt="book cover" /> */}
            <span>
              <h1>{bookDetails.title}</h1>
            </span>
            <p>by {authorName[0]}</p>
            <img src={ imgLink } alt="book cover" />
          </header>
          <p>{bookDesc}</p>
          {/* <p>{book.book_details[0].description}</p> */}
        </div>
        <button onClick={handleSubmit} className={styles.addButton}>Add to Bookshelf</button>
        {savedBook >= 0 ?
          <>
          <button onClick={handleSubmit} className={styles.addButton}>Add to Bookshelf</button>
          </>
          :
          <>
          <p>This book is already in your bookshelf.</p>
          </>
        }
        <button className={styles.backButton} onClick={buttonSubmit}>Go Back</button>
      </main>
    </>
  )
}

export default BookDetails