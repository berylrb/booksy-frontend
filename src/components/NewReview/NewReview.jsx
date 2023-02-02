import styles from './NewReview.module.css'
import { useState } from 'react'

const NewReview = (props) => {
  const [form, setForm] = useState({reviewContent: ''})

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddReview(form)
    setForm({ reviewContent: '' })
  }
  return (
    <>
    <form className={styles.newReviewForm} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="reviewContent"
        id="text-input"
        value={form.reviewContent}
        placeholder="Leave a review"
        onChange={handleChange}
      />
      <button type="submit">Add Review</button>
    </form>
    </>
  );
}

export default NewReview;