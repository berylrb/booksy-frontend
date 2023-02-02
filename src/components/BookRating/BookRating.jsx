import styles from './BookRating.module.css'


const BookRating = ({ ratings }) => {
  const avg = ratings.summary.average.toFixed(2)
  const voters = ratings.summary.count
  return (
    <>
      <div className={styles.ratingDiv}>
        <span>
          <h4 className={styles.avgH4Label}>Average Rating:</h4>
          <h4 className={styles.avgH4Value}>
            {avg}
          </h4>
        </span>
        <span>
          <h4 className={styles.votersH4Label}>Number of Votes:</h4>
          <h4 className={styles.votersH4Value}>
            {voters}
          </h4>
        </span>
      </div>
    </>
  );
}

export default BookRating;