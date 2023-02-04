import styles from './Reviews.module.css'
import ReviewCard from '../ReviewCard/ReviewCard'

const Reviews = (props) => {
  if (!props.reviews) return <h4>No Reviews</h4>
  return (
    <>
      {props.reviews.map((review) => (
        <ReviewCard
          key={review._id}
          review={review}
          user={props.user}
        />
      ))}
    </>
  );
}

export default Reviews;