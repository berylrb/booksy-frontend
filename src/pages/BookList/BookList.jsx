import styles from './BookList.module.css'
import BookCard from '../../components/BookCard/BookCard'
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import SubjectLinks from '../../components/SubjectLinks/SubjectLinks';

const BookList = (props) => {
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
          <ScrollingCarousel show={2.5} slide={2} swiping={true} useArrowKeys={true} responsive={true}>
          {props.books.map((book, idx) => (
            <BookCard key={book.key.split('s/')[1]} book={book} groups={props.groups} />
          ))}
          </ScrollingCarousel>
        </div>
        <div className={styles.browseSubjDiv}>
          <h4>Browse by Subject</h4>
          <SubjectLinks />
        </div>
      </main>
    </>
  )
}

export default BookList