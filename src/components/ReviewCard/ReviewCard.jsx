import styles from './ReviewCard.module.css'

const ReviewCard = ({ review }) => {
  return (
    <>
    <article>
      <header>
        <h2>{review.reviewAuthor}</h2>
      </header>
      <p>{review.reviewContent}</p>
    </article>
    </>
  );
}

export default ReviewCard;