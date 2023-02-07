import styles from './BookSearch.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import * as bookService from '../../services/bookService'
import SearchForm from '../../components/SearchForm/SearchForm';

const BookSearch = (props) => {
  const [searchDetails, setSearchDetails] = useState(null)

  const handleBookSearch = async (formData) => {
    const bookResults = await bookService.bookSearch(formData)
    setSearchDetails(bookResults)
  }

  
  return (
    <>
      <SearchForm handleBookSearch={handleBookSearch} />
    </>
  );
}

export default BookSearch;