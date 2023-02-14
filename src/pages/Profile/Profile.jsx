import styles from './Profile.module.css'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import Bookshelf from '../../components/Bookshelf/Bookshelf'
import Avatar, { genConfig } from 'react-nice-avatar'
import CustomizeAvatarForm from '../../components/CustomizeAvatarForm/CustomizeAvatarForm'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


const Profile = ({ user }, props) => {
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

  const handleUpdateProfile = async (formData) => {
    const updatedProfile = await profileService.updateAvatar(formData, profile)
    setProfile(updatedProfile)
  }

  const avConfig = profile?.photo

  const drawerBleeding = 56

  const { window } = props
  const [open, setOpen] = useState(false)


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  if (!profile) return "Loading..."

  return (
    <>
      <main className={styles.profileMain}>
        <div className={styles.greetDiv}>
          {user?.profile === profile?._id ?
            <>
              <p>My Profile</p>
              <Avatar style={{ width: '8rem', height: '8rem' }} {...avConfig} />

              <Box className={styles.buttonBox}>
                <button onClick={toggleDrawer(true)}>Edit Avatar</button>
              </Box>
              <div className={styles.bookshelfDiv}>
                <h4>My Bookshelf</h4>
                <Bookshelf profile={profile} user={user} />
              </div>
              <SwipeableDrawer
                // container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{ keepMounted: true }}
              >
                <Box className={styles.editAvBox}>
                  <CustomizeAvatarForm profile={profile} handleUpdateProfile={handleUpdateProfile} />
                </Box>
              </SwipeableDrawer>

            </>
            :
            <>
              <p>{profile?.name}'s Profile</p>
              <Avatar style={{ width: '8rem', height: '8rem' }} {...avConfig} />
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