import React from 'react'
import RightMidSection from './RightMidSection'
import './RightSection.css'
import RightTopViewSection from './RightTopViewSection'
const RightSection = () => {
  return (
    <div className='rightSection'>
        <RightTopViewSection />
        <RightMidSection />
    </div>

  )
}

export default RightSection