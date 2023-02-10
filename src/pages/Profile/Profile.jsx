import styles from './Profile.module.css'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import Bookshelf from '../../components/Bookshelf/Bookshelf'
import Avatar, { genConfig } from 'react-nice-avatar'


const Profile = ({ user }) => {
  const { id } = useParams()

  const [profile, setProfile] = useState()

  const savedBookCheck = profile?.savedBooks?.length

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  console.log(profile?.photo)

  const avConfig = profile?.photo

  return (
    <>
      <main className={styles.profileMain}>
        <div className={styles.greetDiv}>
          {user?.profile === profile?._id ?
            <>
              <p>My Profile</p>
              {/* <img className={styles.profileImg} src={profile?.photo} alt="my profile pic" /> */}
              <Avatar style={{ width: '8rem', height: '8rem' }} {...avConfig} />

              <div className={styles.bookshelfDiv}>
                <h4>My Bookshelf</h4>
                <Bookshelf profile={profile} user={user} />
              </div>
            </>
            :
            <>
              <p>{profile?.name}'s Profile</p>
              <img className={styles.profileImg} src={profile?.photo} alt="my profile pic" />
              <div className={styles.bookshelfDiv}>
                <h4>{profile?.name}'s Bookshelf</h4>
                {savedBookCheck > 0 ?
                  <>
                    <Bookshelf profile={profile} user={user} />
                  </>
                  :
                  <>
                    <p>{profile?.name} doesn't have any books in their bookshelf.</p>
                  </>
                }
              </div>
            </>
          }

        </div>
      </main>
    </>
  );
}

export default Profile;