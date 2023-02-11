import styles from './ProfileCard.module.css'
import { Link } from 'react-router-dom'
import Avatar from 'react-nice-avatar'

const ProfileCard = ({ profile }) => {
  const avConfig = profile?.photo
  return (
    <>
      <Link className={styles.profileLink} to={`/profiles/${profile._id}`} >
        <article className={styles.profCardContainer}>
          <span className={styles.picNameSpan}>

            <div className={styles.imgDiv}>
              <Avatar style={{ width: '5rem', height: '5rem' }} {...avConfig} />
            </div>
            <div className={styles.profTextDiv}>
              <h2 className={styles.profNameH2}>{profile.name}</h2>
            </div>
          </span>
        </article>
      </Link>
    </>
  );
}

export default ProfileCard;