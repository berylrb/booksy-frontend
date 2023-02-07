import styles from './BookList.module.css'
import BookCard from '../../components/BookCard/BookCard'

const BookList = (props) => {
  console.log(props.groups)
  return (
    <>
        <div className={styles.bookListHeaderDiv}>
          <h4>Booksy</h4>
        </div>
      <main className={styles.bookListContainer}>
        <div className={styles.blH2Div}>
          <h2>Trending Books</h2>
        </div>
        <div className={styles.bookCardsWrapper}>
          {props.books.map((book, idx) => (
            <BookCard key={book.key.split('s/')[1]} book={book} groups={props.groups} />
          ))}
        </div>
      </main>
    </>
  )
}

export default BookList