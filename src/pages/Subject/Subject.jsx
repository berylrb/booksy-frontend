import styles from './Subject.module.css'
import * as bookService from '../../services/bookService'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from '../../components/BookCard/BookCard';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

const Subject = (props) => {
  // const results = res.works.slice(0, 50)
  const subject = useParams()
  const [subjBooks, setSubjBooks] = useState(null)


  useEffect(() => {
    const fetchSubjBooks = async () => {
      const data = await bookService.getSubject(subject.subject)

      setSubjBooks(data)
    }
    fetchSubjBooks()
  }, [subject.subject])

console.log(subjBooks)

  if (!subjBooks) return 'Loading...'
  return (
    <>
      <div className={styles.subjBooksDiv}>
        <ScrollingCarousel show={3} slide={2} swiping={true} useArrowKeys={true} responsive={true}>
          {subjBooks?.map(book => (
            <BookCard key={book.key.split('s/')[1]} book={book} author={book.authors[0].name}/>
          ))}
        </ScrollingCarousel>
      </div>
    </>
  );
}

export default Subject;