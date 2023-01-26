import { Link } from "react-router-dom"
import styles from './BookCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BookCard = ({ book }) => {
  const bookTitle = book.book_details[0].title
  const isbn = book.book_details[0].primary_isbn13
  console.log(isbn)
  return (
    <Link to={`/books/${isbn}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{bookTitle}</h1>
          </span>
        </header>
        <p>{book.book_details[0].description}</p>
      </article>
    </Link>
  )
}

export default BookCard