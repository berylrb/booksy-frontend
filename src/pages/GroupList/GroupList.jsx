import styles from './GroupList.module.css'


const GroupList = (props) => {
  console.log('grouplist props', props)

  return (
    <>
      <main className={styles.groupListContainer}>
        Group List
      </main>
    </>
  );
}

export default GroupList;