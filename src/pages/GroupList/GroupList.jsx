import styles from './GroupList.module.css'


const GroupList = (props) => {

  return (
    <>
      <main className={styles.groupListContainer}>
        {props.groups.map((group) => (
          <p key={group._id}>
            {group.groupName}
          </p>
        ))}
      </main>
    </>
  );
}

export default GroupList;