import styles from './ProfileCard.module.css'
import { Link } from 'react-router-dom'

const ProfileCard = ({ profile }) => {
  return (
    <>
      <Link to={`/profiles/${profile._id}`}>
      <article className={styles.profCardContainer}>
          <header>
            <span>
              <h2>{profile.name}</h2>
              <img src={profile.photo} alt="main group pic" />
            </span>
          </header>
        </article>
      </Link>
    </>
  );
}

export default ProfileCard;