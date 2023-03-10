import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/books`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (qKey) => {
  try {
    console.log(qKey)
    const res = await fetch(`${BASE_URL}/${qKey}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const getSubject = async (subject) => {
  try {
    console.log(subject)
    const res = await fetch(`${BASE_URL}/subjects/${subject}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const removeBook = async (qKey) => {
  const res = await fetch(`${BASE_URL}/${qKey}/remove`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return res.json()
}


const bookSearch = async (formData) => {
  try {
    console.log(formData.query)
    const res = await fetch(`${BASE_URL}/search`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        // 'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createReview = async (bookId, reviewData) => {
  try {
    const res = await fetch(`${BASE_URL}/${bookId}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const findReviewsByKey = async (qKey) => {
  try {

    const res = await fetch(`${BASE_URL}/${qKey}/reviews`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const getRatings = async (qKey) => {
  try {
    const res = await fetch(`${BASE_URL}/${qKey}/ratings`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}


export {
  index,
  show,
  findReviewsByKey,
  getRatings,
  createReview,
  bookSearch,
  removeBook,
  getSubject
}