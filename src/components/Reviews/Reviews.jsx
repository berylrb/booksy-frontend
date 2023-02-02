import styles from './Reviews.module.css'
import ReviewCard from '../ReviewCard/ReviewCard'

const Reviews = (props) => {
  return (
    <>
      {props.reviews?.map((review) => (
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