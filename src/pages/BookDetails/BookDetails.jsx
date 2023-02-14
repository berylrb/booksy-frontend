import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import styles from './BookDetails.module.css'
import Loading from "../Loading/Loading"
import BookRating from "../../components/BookRating/BookRating"
import NewReview from "../../components/NewReview/NewReview"
import Reviews from "../../components/Reviews/Reviews"
import Rating from '@mui/material/Rating';
import AccordionReviews from "../../components/AccordionReviews/AccordionReviews"
import AccordionGroup from "../../components/AccordionGroup/AccordionGroup"
import BackButton from "../../components/BackButton/BackButton"


// Services
import * as bookService from '../../services/bookService'
import * as profileService from '../../services/profileService'
import * as groupService from '../../services/groupService'

const BookDetails = ({ user }) => {
  //initialize navigate, location
  const navigate = useNavigate()
  const location = useLocation()

  //state variables
  const [bookDetails, setBookDetails] = useState(null)
  const [savedBook, setSavedBook] = useState()
  const [bookRatings, setBookRatings] = useState(null)
  const [profile, setProfile] = useState()
  const [isCollected, setIsCollected] = useState(false)
  const [groupId, setGroupId] = useState()


  const collected = bookDetails?.collectedByPerson?.includes(user.profile)

  console.log(collected)
  //location & params variables
  const { imgKey } = location.state
  const { authorName } = location.state
  const { groups } = location.state
  const { qKey } = useParams()
  const id = user.profile

  const bookImg = imgKey ? `https://covers.openlibrary.org/b/olid/${imgKey}-L.jpg` : `https://cdn-icons-png.flaticon.com/512/277/277938.png`

  console.log(authorName, 'auth')
  const path = '/books'

  const userGroups = groups?.filter(group => {
    return group?.owner?._id === id
  })

  const bookDesc = bookDetails?.description?.value ? bookDetails?.description?.value : bookDetails?.description

  //get profile
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  console.log(bookDetails, 'deets')

  //get rating details
  useEffect(() => {
    const ratingData = async () => {
      const res = await bookService.getRatings(qKey)
      setBookRatings(res)
    }
    ratingData()
  }, [qKey])

console.log(qKey, 'qkey')


  //get book details
  useEffect(() => {
    const fetchBook = async () => {
      const data = await bookService.show(qKey)


      setBookDetails(data)
    }
    fetchBook()
  }, [isCollected])


  const handleRemove = async (evt) => {
    evt.preventDefault()
    const prof = await bookService.removeBook(qKey)
    // setBookDetails(prof)
    setIsCollected(bookDetails?.collectedByPerson?.includes(user.profile))
    console.log(isCollected, 'help')
  }


  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const formData = {
      ...bookDetails,
      qKey: qKey,
      author: authorName[0],
      imgUrl: bookImg,
      collectedByPerson: [],
      collectedByGroup: [],
      reviews: [],
      description: bookDesc
    }
    setIsCollected(bookDetails?.collectedByPerson?.includes(user.profile))
    const book = await profileService.addBook(user.profile, formData)
    setSavedBook(book)
    setIsCollected(bookDetails.collectedByPerson?.includes(user.profile))
  }

  const handleChange = ({ target }) => {
    setGroupId(target.value)
  }


  const buttonSubmit = async (evt) => {
    navigate('/books')
  }

  const handleAddReview = async (reviewData) => {
    const newReview = await bookService.createReview(savedBook?._id, reviewData)
    setBookDetails({ ...bookDetails, reviews: [...savedBook.reviews, newReview] })
  }

  const handleAddBookToGroup = async (evt) => {
    evt.preventDefault()
    const groupBook = await groupService.addBook(groupId, qKey)
  }

  if (!bookDetails) return <Loading />

  return (
    <>
      <main>
        <div className={styles.detailsContainer}>
          <div className={styles.bookDeetsImgDiv}>
            <img src={bookImg} alt="book cover" />
          </div>
          <BackButton path={path} buttonSubmit={buttonSubmit} />
          <header>
            <span className={styles.titleAuthorSpan}>
              <h1>{bookDetails.title}</h1>
              <div className={styles.authorStarRatingDiv}>
                <p>by {authorName[0]}</p>
                {bookRatings !== null ?
                  <BookRating ratings={bookRatings} />
                  :
                  <Rating name="no-value" value={null} size="small" />
                }

              </div>
            </span>
          </header>
          <div className={styles.descriptionDiv}>
            <h4>Description</h4>
            <p>{bookDesc}</p>
          </div>
        </div>

        <section className={styles.reviewSection}>
          <AccordionReviews handleAddReview={handleAddReview} reviews={bookDetails.reviews} user={user} />
        </section>

        {isCollected ?
          <>
            <AccordionGroup handleChange={handleChange} userGroups={userGroups} handleAddBookToGroup={handleAddBookToGroup} />
            <div className={styles.buttonDiv}>
              <button className={styles.moreAuthorButton}>More from {authorName[0]}</button>
              <div className={styles.inBookShelfDiv}>
                <button onClick={handleRemove} className={styles.removeButton}>Remove from Bookshelf</button>
              </div>
            </div>

          </>
          :
          <>
            <div className={styles.buttonDiv}>
              <button className={styles.moreAuthorButton}>More from {authorName[0]}</button>
              <button onClick={handleSubmit} className={styles.addButton}>Add to Bookshelf</button>
            </div>
          </>
        }
      </main>
    </>
  )
}

export default BookDetails


//conditionally render groups that are visible to suggest a book to

