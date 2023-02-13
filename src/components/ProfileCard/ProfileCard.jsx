import styles from './ProfileCard.module.css'
import { Link } from 'react-router-dom'
import Avatar from 'react-nice-avatar'
import compColors from 'complementary-colors'

const ProfileCard = ({ profile }) => {
  const avConfig = profile?.photo
  const cardBgColor = new compColors(profile?.photo.bgColor)
  const color = cardBgColor.square()
  const newColor = `rgba(${color[3].r}, ${color[3].g}, ${color[3].b}, 0.5)`

  const cardBg = {
    background: `linear-gradient(to bottom, ${newColor} 0%, ${newColor} 65%, rgba(247, 246, 243) 65%, rgba(247, 246, 243) 100%)`
  }

  return (
    <>
      <Link className={styles.profileLink}
      style={{textDecoration: 'none'}} to={`/profiles/${profile._id}`} >
        <article style={cardBg}
        className={styles.profCardContainer}>
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