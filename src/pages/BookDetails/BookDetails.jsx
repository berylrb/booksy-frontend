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
  const [isCollected, setIsCollected] = useState(null)
  const [groupId, setGroupId] = useState()




  //location & params variables
  const { imgKey } = location.state
  const { authorName } = location.state
  const { groups } = location.state
  const { qKey } = useParams()
  const id = user.profile

  const bookImg = imgKey ? `https://covers.openlibrary.org/b/olid/${imgKey}-M.jpg` : `https://cdn-icons-png.flaticon.com/512/277/277938.png`

  const userGroups = groups.filter(group => {
    return group.owner._id === id
  })

  console.log(userGroups, id, 'mygroups')

  const bookDesc = bookDetails?.description?.value ? bookDetails?.description.value : "No description available."

  //get profile
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

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
      console.log('Book data:', data)

      setIsCollected(data.collectedByPerson?.includes(user.profile))

      setBookDetails(data)
    }
    fetchBook()
  }, [qKey])



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
    const book = await profileService.addBook(user.profile, formData)
    setSavedBook(book)
  }

  const handleChange = ({ target }) => {
    setGroupId(target.value)
    console.log(groupId, 'set group')
  }


  const buttonSubmit = async (evt) => {
    navigate('/books')
  }

  const handleAddReview = async (reviewData) => {
    const newReview = await bookService.createReview(savedBook._id, reviewData)
    setBookDetails({ ...bookDetails, reviews: [...savedBook.reviews, newReview] })
  }

  const handleAddBookToGroup = async (evt) => {
    evt.preventDefault()
    const groupBook = await groupService.addBook(groupId, qKey)
    console.log(groupId, 'groupid')
  }


  if (!bookDetails) return <Loading />

  return (
    <>
      <main>
        <div className={styles.detailsContainer}>
          <div className={styles.bookDeetsImgDiv}>
            <img src={bookImg} alt="book cover" />
          </div>
          <header>
            <span className={styles.titleAuthorSpan}>
              <h1>{bookDetails.title}</h1>
              <p>by {authorName[0]}</p>
            </span>
          </header>
          <div className={styles.descriptionDiv}>
            <h4>Description</h4>
            <p>{bookDesc}</p>
          </div>
        </div>
        {bookRatings !== null ?
          <BookRating ratings={bookRatings} />
          :
          <p></p>
        }
        <p>More from this author</p>
        {isCollected >= 0 ?
          <>
            <p>This book is already in your bookshelf.</p>

            <form onSubmit={handleAddBookToGroup}>
              <label htmlFor="group-input">Your Groups</label>
              <select
                required
                name="groupId"
                id="group-id"
                onChange={handleChange}
              >
                {userGroups.map(group =>
                  <option value={group._id} placeholder={group.groupName}>{group.groupName}</option>
                )}
              </select>
              <button>Suggest to Group</button>
            </form>
          </>
          :
          <>
            <button onClick={handleSubmit} className={styles.addButton}>Add to Bookshelf</button>
          </>
        }

        <section className={styles.reviewSection}>
          <h2>Reviews</h2>
          <NewReview handleAddReview={handleAddReview} />
          <Reviews reviews={bookDetails.reviews} user={user} />
        </section>
        <button className={styles.backButton} onClick={buttonSubmit}>Go Back</button>
      </main>
    </>
  )
}

export default BookDetails


//conditionally render groups that are visible to suggest a book to

