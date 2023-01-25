import styles from './BookList.module.css'
import BookCard from '../../components/BookCard/BookCard'

const BookList = (props) => {
  
  return (
    <>
      <main className={styles.container}>
        {props.books.map((book, idx) => (
          <BookCard key={book.book_details[0].primary_isbn13} book={book} />
        ))}
      </main>
    </>
  )
}

export default BookList