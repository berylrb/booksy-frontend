import styles from './Bookshelf.module.css'
import BookshelfCard from '../BookshelfCard/BookshelfCard'
import { Link } from 'react-router-dom'

const Bookshelf = ({ profile, user }) => {
  return (
    <>
      <div className={styles.bookShelfDiv}>
        {profile?.savedBooks?.map(book =>
          <Link className={styles.bookLink}
            to="/book"
          >
            <BookshelfCard
              key={book._id}
              book={book}
            />
          </Link>
        )}

      </div>
    </>
  );
}

export default Bookshelf;
