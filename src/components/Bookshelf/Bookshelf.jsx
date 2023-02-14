import styles from './Bookshelf.module.css'
import BookshelfCard from '../BookshelfCard/BookshelfCard'
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

const Bookshelf = ({ profile, user }) => {
  return (
    <>
      <div className={styles.bookShelfDiv}>
        <ScrollingCarousel show={3} slide={2} swiping={true} useArrowKeys={true} responsive={true}>
          {profile?.savedBooks?.map(book =>
            <BookshelfCard
              key={book._id}
              book={book}
            />
          )}
        </ScrollingCarousel>
      </div>
    </>
  );
}

export default Bookshelf;
