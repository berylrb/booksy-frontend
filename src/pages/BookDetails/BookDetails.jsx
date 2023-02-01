import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import styles from './BookDetails.module.css'
import Loading from "../Loading/Loading"

// Services
import * as bookService from '../../services/bookService'
import * as profileService from '../../services/profileService'

const BookDetails = ({ user }) => {
  //initialize navigate, location
  const navigate = useNavigate()
  const location = useLocation()

  //state variables
  const [bookDetails, setBookDetails] = useState(null)
  const [savedBook, setSavedBook] = useState()

  //location & params variables
  const { imgKey } = location.state
  const { imgLink } = location.state
  const { authorName } = location.state
  const { qKey } = useParams()


  const bookDesc = bookDetails?.description?.value


  useEffect(() => {
    const fetchBook = async () => {
      const data = await bookService.show(qKey)
      const res = await bookService.findReviewsByKey(qKey)
      setSavedBook(res)
      console.log('res', res)
      setBookDetails(data)
    }
    fetchBook()
  }, [qKey])


  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const formData = {
      ...bookDetails,
      author: authorName[0],
      imgUrl: imgLink
    }
    const book = await profileService.addBook(user.profile, formData)
    setSavedBook(book)
  }
  // console.log('saved', user.savedBooks)

  const buttonSubmit = async (evt) => {
    navigate('/books')
  }


  if (!bookDetails) return <Loading />

  return (
    <>
      <main>
        <div className={styles.detailsContainer}>
          <header>
            <span>
              <h1>{bookDetails.title}</h1>
            </span>
            <p>by {authorName[0]}</p>
            <img src={imgLink} alt="book cover" />
          </header>
          <p>{bookDesc}</p>
        </div>
        {/* <button onClick={handleSubmit} className={styles.addButton}>Add to Bookshelf</button> */}
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