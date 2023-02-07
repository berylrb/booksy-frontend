import styles from './BookList.module.css'
import BookCard from '../../components/BookCard/BookCard'

const BookList = (props) => {
  console.log(props.groups)
  return (
    <>
      <main className={styles.bookListContainer}>
        <div className={styles.blH2Div}>
          <h2>Trending Books</h2>
        </div>
        {props.books.map((book, idx) => (
          <BookCard key={book.key.split('s/')[1]} book={book} groups={props.groups} />
        ))}
      </main>
    </>
  )
}

export default BookList