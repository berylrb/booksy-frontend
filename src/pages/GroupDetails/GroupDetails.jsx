import styles from './GroupDetails.module.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../Loading/Loading';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

//Services
import * as groupService from '../../services/groupService'

const GroupDetails = (props) => {

  const { groupId } = useParams()
  const [group, setGroup] = useState(null)

  useEffect(() => {
    const fetchGroup = async () => {
      const data = await groupService.show(groupId)
      setGroup(data)
    }
    fetchGroup()
  }, [groupId])


  if (!group) return <Loading />

  return (
    <>
      <main className={styles.groupDetailsContainer}>
        <article>
          <header>
            <h2>{group.groupName}</h2>
            <div className={styles.groupImgDiv}>
              <img src={group.imgUrl} alt="group img" />
            </div>
          </header>
          <div className={styles.gDeets}>
            <p>{group.description}</p>
          </div>
        </article>
        <section className={styles.membersSection}>
          <h4>Group Members</h4>
          <ul className={styles.membersList}>
            {group.members.map(member => (
              <li key={member._id}><ProfileCard profile={member} /></li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default GroupDetails;