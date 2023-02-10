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
          <FiMenu className={styles.openButton} />
        }
        </button>
        {props.user ?
          <ul className={`${menuNav} ${navOpen ? styles.showMenu : styles.noMenu}`}>
            <li>
              <Link className={styles.link} to="/profiles"
                onClick={() => closeMenu()}>
                Profiles
              </Link>
            </li>
            <li>
              <Link className={styles.link}to="/books"
                onClick={() => closeMenu()}
              >
                Books
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={`/groups`}
                onClick={() => closeMenu()}
              >
                Book Clubs
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={`/groups/new`}
                onClick={() => closeMenu()}
              >
                Add a Book Club
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={`/profiles/${props.user.profile}`}
                onClick={() => closeMenu()}>
                Profile
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/change-password">
                Change Password
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="" onClick={closeMenuLogOut}>
                LOG OUT
              </Link>
            </li>
          </ul>
          :
          <ul className={`${menuNav} ${navOpen ? styles.showMenu : styles.noMenu}`}>
            <li><Link className={styles.link} to="/login"
              onClick={() => closeMenu()}
            >Log In</Link ></li>
            <li><Link className={styles.link} to="/signup"
              onClick={() => closeMenu()}
            >Sign Up</Link></li>
          </ul>
        }
      </nav>
    </>
  )
}

export default Hamburger