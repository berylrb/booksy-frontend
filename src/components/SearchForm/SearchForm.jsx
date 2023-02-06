import styles from './SearchForm.module.css'

import { useState } from "react";

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    search: ''
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleBookSearch(formData)
  }

  return (
    <>
      <div className={styles.searchFormDiv}>
        <form
          autoComplete='off'
          method="GET"
          onSubmit={handleSubmit}
          className={styles.searchForm}>
          <label htmlFor="search-input">Search:</label>
          <input
            type="text"
            value={formData.search}
            name="search"
            onChange={handleChange}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>

  );
}

export default SearchForm;