import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Hamburger.module.css'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Hamburger = (props) => {
  const [navOpen, setNavOpen] = useState(false)

  const handleToggleNav = () => {
    setNavOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavOpen(false)
  }

  const closeMenuLogOut = () => {
    setNavOpen(false)
    props.handleLogout()
  }

  const menuNav = styles.menuNav

  return (
    <>
      <nav className={styles.navBar}>
        <button onClick={handleToggleNav}>{navOpen ?
          <MdClose className={styles.closeButton} /> :
          <FiMenu style={{ color: "#7b7b7b", width: "20px", height: "20px" }} className={styles.openButton} />
        }
        </button>
        {props.user ?
          <ul className={`${menuNav} ${navOpen ? styles.showMenu : styles.noMenu}`}>
            <li><Link to="/profiles"
              onClick={() => closeMenu()}
            >Profiles</Link></li>
            <li><Link to="/books"
              onClick={() => closeMenu()}
            >Books</Link></li>
            <li><Link className="navLink" to={`/groups`}
              onClick={() => closeMenu()}
            >Groups</Link></li>
            <li><Link className="navLink" to={`/groups/new`}
              onClick={() => closeMenu()}
            >Add a Group</Link></li>
            <li><Link className="navLink" to={`/profiles/${props.user.profile}`}
              onClick={() => closeMenu()}
            >Profile</Link></li>
            <li><Link to="/change-password">Change Password</Link></li>
            <li><Link to="" onClick={closeMenuLogOut}
            >LOG OUT</Link></li>
          </ul>
          :
          <ul>
            <li><Link to="/login"
              onClick={() => closeMenu()}
            >Log In</Link ></li>
            <li><Link to="/signup" 
              onClick={() => closeMenu()}
            >Sign Up</Link></li>
          </ul>
        }
      </nav>
    </>
  )
}

export default Hamburger