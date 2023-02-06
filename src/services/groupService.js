import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/groups`

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

const show = async (groupId) => {
  try {
    const res = await fetch(`${BASE_URL}/${groupId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (groupData) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(groupData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const joinGroup = async (groupId) => {
  try {
    const res = await fetch(`${BASE_URL}/${groupId}/join`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const leaveGroup = async (groupId) => {
  try {
    const res = await fetch(`${BASE_URL}/${groupId}/leave`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const addBook = async (groupId, qKey) => {
  try {
    const res = await fetch(`${BASE_URL}/${groupId}/books/${qKey}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (groupData) => {
  try {
    const res = await fetch(`${BASE_URL}/${groupData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(groupData)
    })
    return res.json() 
  } catch (error) {
    console.log(error)
  }
}

const deleteGroup = async(groupId) => {
  try {
    const res = await fetch(`${BASE_URL}/${groupId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteGroup,
  joinGroup,
  leaveGroup,
  addBook
}