import styles from './GroupCard.module.css'
import { Link } from 'react-router-dom'

const GroupCard = ({ group }) => {
  const members = group?.members?.length
  return (
    <>
      <Link to={`/groups/${group._id}`} className={styles.groupLink}>
        <article className={styles.groupCardContainer}>
          <span className={styles.picNameSpan}>
            <div className={styles.imgDiv}>
              <img src={group.imgUrl} alt="main group pic" />
            </div>
            <div className={styles.groupTextDiv}>
              <h2 className={styles.groupNameH2}>{group.groupName}</h2>
              <p>{group.description}</p>
              <div className={styles.groupPDiv}>
                <p className={styles.membersP}>{members} Members</p>
              </div>
            </div>
          </span>
        </article>
      </Link>
    </>
  );
}

export default GroupCard;