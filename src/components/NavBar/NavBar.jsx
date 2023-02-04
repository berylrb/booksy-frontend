import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link className="navLink" to={`/groups`}>Groups</Link></li>
          <li><Link className="navLink" to={`/groups/new`}>Add a Group</Link></li>
          <li><Link className="navLink" to={`/profiles/${user.profile}`}>Profile</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
        </ul>
        :
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
