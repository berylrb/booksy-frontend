import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './Profiles.module.css'
import { Carousel } from '@trendyol-js/react-carousel';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

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
      {/* <div className={styles.profListHeaderDiv}>
        <h4>Booksy</h4>
      </div> */}
      <main className={styles.profListContainer}>
        <div className={styles.blH2Div}>
          <h2>PROFILES</h2>
        </div>
        <div className={styles.communityTextDiv}>
          <h3>Booksy Community:</h3>
        </div>
        {profiles.length ?
          <>
            {/* <ScrollingCarousel show={2.5} slide={2} swiping={true}> */}
            <div className={styles.profCardsDiv}>
              {profiles.map(profile =>
                <ProfileCard  key={profile._id} profile={profile} />
              )}
            </div>
            {/* </ScrollingCarousel> */}
          </>
          :
          <p>No profiles yet</p>
        }
        <section className={styles.friendList}>
          <h3 className={styles.friendsH3}>Your Friends:</h3>
        </section>
      </main>
    </>
  )
}

export default Profiles