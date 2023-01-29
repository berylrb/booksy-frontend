import { Link } from "react-router-dom"
import styles from './BookCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BookCard = ({ book }) => {
  const bookTitle = book.title
  const qKey = book.key.split('s/')[1]
  // console.log(qKey)
  return (
    <Link to={`/books/${qKey}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{bookTitle}</h1>
          </span>
        </header>
        <p>{book.first_publish_year}</p>
        {/* <p>{book.book_details[0].description}</p> */}
      </article>
    </Link>
  )
}

export default BookCard