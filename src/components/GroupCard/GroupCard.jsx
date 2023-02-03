import styles from './GroupCard.module.css'
import { Link } from 'react-router-dom'

const GroupCard = ({ group }) => {
  return (
    <>
      <Link to={`/groups/${group._id}`}>
        <article className={styles.groupCardContainer}>
          <header>
            <span>
              <h2>{group.groupName}</h2>
              <img src={group.imgUrl} alt="main group pic" />
            </span>
          </header>
        </article>
      </Link>
    </>
  );
}

export default GroupCard;