import React from 'react'
import ProfileSide from '../Components/profileSide/ProfileSide'
import './Home.css'
import '../Components/MiddleSection/Midsection'
import Midsection from '../Components/MiddleSection/Midsection'
import RightSection from '../Components/RightSection/RightSection'
const Home = () => {
  return (
    <div className='home'>
      <div className="profileSection">
        <ProfileSide />
      </div>
      <div className="midSection">
        <Midsection />
      </div>
      <div className="rightSectionji">
        <RightSection />
      </div>
    </div>
  )
}

export default Home