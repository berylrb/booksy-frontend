import styles from './GroupDetails.module.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Loading from '../Loading/Loading';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import BookshelfCard from '../../components/BookshelfCard/BookshelfCard';

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

  const handleLeave = async (evt) => {
    evt.preventDefault()
    const leaveGroup = await groupService.leaveGroup(groupId)
    setGroup(leaveGroup)
  }


  const inGroup = group?.members?.filter(member => {
    return member._id === props.user.profile
  })

  const suggestedBooks = group?.booksRead

  console.log(suggestedBooks, 'suggested')

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
              <button onClick={handleLeave}>Leave Group</button>
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
        {suggestedBooks.length > 0 &&

          <section className={styles.booksSection}>
            <h4>{group.groupName} are currently reading:</h4>
            <ul className={styles.bookList}>
              {suggestedBooks.map(book => (
                <li key={book._id}><BookshelfCard book={book} /></li>
              ))}
            </ul>
          </section>

        }
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