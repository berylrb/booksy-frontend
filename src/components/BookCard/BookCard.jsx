import { Link } from "react-router-dom"
import styles from './BookCard.module.css'
import { useEffect, useState } from "react"
import * as bookService from '../../services/bookService'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BookCard = ({ book, groups }) => {
  const bookTitle = book.title
  const authorName = book.author_name
  const qKey = book.key.split('s/')[1]
  const imgKey = book.lending_edition_s ? book.lending_edition_s : book.cover_edition_key


  const bookImg = imgKey ? `https://covers.openlibrary.org/b/olid/${imgKey}-M.jpg` : `https://cdn-icons-png.flaticon.com/512/277/277938.png`

  return (
    <Link to={`/books/${qKey}`} state={{ imgKey, authorName, groups }} className={styles.link}>
      <article className={styles.bookCardContainer}>
        <header className={styles.bookCardHeader}>
          <div className={styles.bookCoverDiv}>
            <img src={bookImg} alt="book cover" />
          </div>
          <div className={styles.textDiv}>
            <h4>{bookTitle}</h4>
          </div>
          {/* <h4>{authorName}</h4> */}
        </header>
      </article>
    </Link>
  )
}

export default BookCard