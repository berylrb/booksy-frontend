import styles from './BookshelfCard.module.css'
import { Link } from 'react-router-dom';


const BookshelfCard = ({ book }) => {

  
  return (
    <Link to={`/books/${book.qKey}`} state={{ imgLink: book.imgUrl, authorName: book.author }}>
      <article className={styles.container}>
        <header>
          <img src={book.imgUrl} alt="book cover" />
          <span>
            <h1>{book.title}</h1>
          </span>
          <h4>{book.author}</h4>
        </header>
      </article>
    </Link>
  )
}
 
export default BookshelfCard;