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
  const imgLink = `https://covers.openlibrary.org/b/olid/${imgKey}-M.jpg`
  console.log(groups, 'groups')
  
  return (
    <Link to={`/books/${qKey}`} state={{ imgKey, imgLink, authorName, groups }}>
      <article className={styles.container}>
        <header>
          <img src={imgLink} alt="book cover" />
          <span>
            <h1>{bookTitle}</h1>
          </span>
          <h4>{authorName}</h4>
        </header>
        {/* <p>{book.first_publish_year}</p> */}
        {/* <p>{book.book_details[0].description}</p> */}
      </article>
    </Link>
  )
}

export default BookCard