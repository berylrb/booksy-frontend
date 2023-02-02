import styles from './Profile.module.css'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import * as profileService from '../../services/profileService'


const Profile = ({ user }) => {
  const { id } = useParams()

  const [profile, setProfile] = useState()


  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  console.log(profile, 'profile')

  return (
    <>
      <main className={styles.profileMain}>
        <div className={styles.greetDiv}>
          {user?.profile === profile?._id ?
            <>
              <p>My Profile</p>
              <img className={styles.profileImg} src={profile?.photo} alt="my profile pic" />
            </>
            :
            <>
              <p>{profile?.name}'s Profile</p>
              <img className={styles.profileImg} src={profile?.photo} alt="my profile pic" />
            </>
        }

        </div>
      </main>
    </>
  );
}

export default Profile;