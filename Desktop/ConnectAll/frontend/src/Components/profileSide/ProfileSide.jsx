import React from 'react'
import ButtomProfile from '../ButtomProfileSide/ButtomProfile'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileImages from '../profileimages/ProfileImages'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className='profileSide'>
        <LogoSearch />
        <ProfileImages />
        <ButtomProfile />
    </div>
  )
}

export default ProfileSide