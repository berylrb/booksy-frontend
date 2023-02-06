import styles from './SearchResults.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import * as bookService from '../../services/bookService'

const SearchResults = (props) => {
  const [searchDetails, setSearchDetails] = useState({})
  console.log(searchDetails)

  useEffect(() => {
    const fetchBookDetails = await bookService.search(formData)
  })

  // const handleBookSearch = async (formData) => {
  //   const bookResults = await bookService.bookSearch(formData)
  //   setSearchDetails(bookResults)
  // }


  return (
    <>
      
    </>
  );
}

export default SearchResults;