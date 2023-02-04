// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Profile from './pages/Profile/Profile'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import BookList from './pages/BookList/BookList'
import BookDetails from './pages/BookDetails/BookDetails'
import GroupList from './pages/GroupList/GroupList'
import GroupDetails from './pages/GroupDetails/GroupDetails'
import NewGroup from './pages/NewGroup/NewGroup'
import EditGroup from './pages/EditGroup/EditGroup'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as bookService from './services/bookService'
import * as groupService from './services/groupService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [books, setBooks] = useState([])
  const [groups, setGroups] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddGroup = async (groupData) => {
    const newGroup = await groupService.create(groupData)
    setGroups([newGroup, ...groups])
    navigate('/groups')
  }

  const handleUpdateGroup = async (groupData) => {
    const updatedGroup = await groupService.update(groupData)
    setGroups(groups.map((group) => groupData._id === group._id ? updatedGroup : group))
    navigate('/groups')
  }

  useEffect(() => {
    const fetchAllBooks = async () => {
      const data = await bookService.index()
      console.log(data.works)
      setBooks(data.works)
      // data.results.forEach(result => {
      //   console.log('Book Data', result.book_details[0].title)
      // })
    }
    if (user) fetchAllBooks()
  }, [user])


  useEffect(() => {
    const fetchAllGroups = async() => {
      const data = await groupService.index()
      setGroups(data)
      console.log('Group data', data)
    }
    fetchAllGroups()
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id"
          element={<Profile
            profile={user?.profile}
            user={user}
          />}
        />
        <Route
          path="/books"
          element={
            <ProtectedRoute user={user}>
              <BookList books={books} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books/:qKey"
          element={
            <ProtectedRoute user={user}>
              <BookDetails user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups"
          element={
            <ProtectedRoute user={user}>
              <GroupList groups={groups} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups/:groupId"
          element={
            <ProtectedRoute user={user}>
              <GroupDetails user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups/new"
          element={
            <ProtectedRoute user={user}>
              <NewGroup handleAddGroup={handleAddGroup} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups/:groupId/edit"
          element={
            <ProtectedRoute user={user}>
              <EditGroup handleUpdateGroup={handleUpdateGroup} user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
