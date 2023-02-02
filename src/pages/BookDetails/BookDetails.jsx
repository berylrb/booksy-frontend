import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import styles from './BookDetails.module.css'
import Loading from "../Loading/Loading"
import BookRating from "../../components/BookRating/BookRating"
import NewReview from "../../components/NewReview/NewReview"
import Reviews from "../../components/Reviews/Reviews"

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
  const [bookRatings, setBookRatings] = useState(null)

  //location & params variables
  const { imgKey } = location.state
  const { imgLink } = location.state
  const { authorName } = location.state
  const { qKey } = useParams()


  const bookDesc = bookDetails?.description?.value

//get rating details
  useEffect(() => {
    const ratingData = async () => {
      const res = await bookService.getRatings(qKey)
      setBookRatings(res)
    }
    ratingData()
  }, [qKey])
  console.log(bookRatings)


//get book details
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

  console.log(bookDetails)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const formData = {
      ...bookDetails,
      author: authorName[0],
      imgUrl: imgLink,
      collectedByPerson: [],
      collectedByGroup: [],
      reviews: []
    }
    const book = await profileService.addBook(user.profile, formData)
    setSavedBook(book)
  }
  // console.log('saved', user.savedBooks)

  const buttonSubmit = async (evt) => {
    navigate('/books')
  }

  const handleAddReview = async (reviewData) => {
    const newReview = await bookService.createReview(savedBook._id, reviewData)
    setBookDetails({...bookDetails, reviews: [...savedBook.reviews, newReview]})
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
        {bookRatings !== null ?
        <BookRating ratings={bookRatings} />
        :
        <p></p>
      }
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

        <section className={styles.reviewSection}>
          <h2>Reviews</h2>
          <NewReview handleAddReview={handleAddReview} />
          <Reviews reviews={savedBook?.reviews} user={user} />
        </section>
        <button className={styles.backButton} onClick={buttonSubmit}>Go Back</button>
      </main>
    </>
  )
}

export default BookDetails