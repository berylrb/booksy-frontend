import styles from './GroupList.module.css'
import GroupCard from '../../components/GroupCard/GroupCard';


const GroupList = (props) => {

  return (
    <>
      <div className={styles.groupListHeaderDiv}>
        <h4>Booksy</h4>
      </div>
      <main className={styles.groupListContainer}>
        <div className={styles.blH2Div}>
          <h2>Book Clubs</h2>
        </div>
        {props.groups.map((group) => (
          <GroupCard key={group._id} group={group} />
        ))}
      </main>
    </>
  );
}

export default GroupList;