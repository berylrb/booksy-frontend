import styles from './GroupDetails.module.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

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
  
  const handleJoin = async (evt) => {
    evt.preventDefault()
    const newMember = await groupService.joinGroup(groupId)
    setGroup(newMember)
    console.log(group, 'group')
  }

  const handleLeave = 


  const inGroup = group?.members?.filter(member => {
    return member._id === props.user.profile
  })


  
  if (!group) return <Loading />

  return (
    <>
      <main className={styles.groupDetailsContainer}>
        <article>
          {group.owner?._id === props.user.profile &&
            <>
              <span>
                <Link to={`/groups/${groupId}/edit`} state={group}><button>Edit</button></Link>
                <button onClick={() => props.handleDeleteGroup(groupId)}>Delete</button>
              </span>
            </>
          }
          {inGroup?.length === 0 ?
            <>
            <button onClick={handleJoin}>Join Group</button>
            </>
            :
            <>
            <p>You're a member of {group.groupName}</p>
            </>
          
        }
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