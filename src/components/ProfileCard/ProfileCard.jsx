import styles from './ProfileCard.module.css'
import { Link } from 'react-router-dom'
import Avatar from 'react-nice-avatar'

const ProfileCard = ({ profile }) => {
  const avConfig = profile?.photo
  return (
    <>
      <Link className={styles.profileLink}
      style={{textDecoration: 'none'}} to={`/profiles/${profile._id}`} >
        <article className={styles.profCardContainer}>
          <div className={styles.colorBlock}></div>
          <span className={styles.picNameSpan}>
            <div className={styles.imgDiv}>
              <Avatar style={{ width: '5rem', height: '5rem' }} {...avConfig} />
            </div>
            <div className={styles.profTextDiv}>
              <div className={styles.profNameH2}>{profile.name}</div>
            </div>
          </span>
        </article>
      </Link>
    </>
  );
}

export default ProfileCard;