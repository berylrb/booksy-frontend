import styles from './BookRating.module.css'
import Rating from '@mui/material/Rating';



const BookRating = ({ ratings }) => {
  const avg = Number(ratings.summary.average.toFixed(2))
  const voters = ratings.summary.count
  return (
    <>
      <div className={styles.ratingDiv}>
        <Rating name="half-rating-read" value={avg} precision={0.1} size="small" readOnly />
          <p className={styles.votersH4Value}>
            {voters} votes
          </p>
      </div>
    </>
  );
}

export default BookRating;