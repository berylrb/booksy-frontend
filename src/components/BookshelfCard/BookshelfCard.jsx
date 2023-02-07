import styles from './BookshelfCard.module.css'
import { Link } from 'react-router-dom';


const BookshelfCard = ({ book }) => {


  return (
    <Link to={`/books/${book.qKey}`} state={{ imgLink: book.imgUrl, authorName: book.author }} className={styles.link}>
      <article className={styles.bookCardContainer}>
        <header className={styles.bookCardHeader}>
          <div className={styles.bookCoverDiv}>
            <img src={book.imgUrl} alt="book cover" />
          </div>
          <div className={styles.textDiv}>
            <h4>{book.title}</h4>
          </div>
        </header>
      </article>
    </Link >
  )
}

export default BookshelfCard;