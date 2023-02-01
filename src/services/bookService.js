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

const findReviewsByKey = async (qKey) => {
  try {

    const res = await fetch(`${BASE_URL}/qKey/reviews`, {
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
  findReviewsByKey
}