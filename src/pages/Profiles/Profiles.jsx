import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './Profiles.module.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])


  return (
    <>
      <div className={styles.profListHeaderDiv}>
        <h4>Booksy</h4>
      </div>
      <main className={styles.profListContainer}>
        <div className={styles.blH2Div}>
          <h2>Profiles</h2>
        </div>
        {profiles.length ?
          <>
            <div className={styles.profCardsDiv}>
              {profiles.map(profile =>
                <Link
                  key={profile._id}
                  to={`/profiles/${profile._id}`}
                >
                  <ProfileCard profile={profile} />
                </Link>
              )}
            </div>
          </>
          :
          <p>No profiles yet</p>
        }
      </main>
    </>
  )
}

export default Profiles