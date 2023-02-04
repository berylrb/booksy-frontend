import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])
  console.log(profiles, 'profiles')

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ?
        <>
          {profiles.map(profile =>
            <Link
              key={profile._id}
              to={`/profiles/${profile._id}`}
            >
              <p key={profile._id}>{profile.name}</p>
            </Link>
          )}
        </>
        :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles