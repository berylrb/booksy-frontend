import styles from './GroupList.module.css'
import GroupCard from '../../components/GroupCard/GroupCard';


const GroupList = (props) => {

  return (
    <>
      <main className={styles.groupListContainer}>
        {props.groups.map((group) => (
          <GroupCard key={group._id} group={group} />
        ))}
      </main>
    </>
  );
}

export default GroupList;