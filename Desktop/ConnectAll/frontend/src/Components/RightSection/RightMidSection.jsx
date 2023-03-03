import React from 'react'
import './RightMidSection.css'
import { trend } from '../../dataOfTredingList'
import { Button } from '@mui/material'
import { ArrowDropDownOutlined } from '@mui/icons-material'
const RightMidSection = () => {
  return (
    <div className='rightMidSection'>
      <span>What's Happening</span>
      <hr />
      {trend.map((trend, id) => {
        return (

          <div className="dailyTrendMenu" key={id}>
              <span>{trend.zone}</span>
              <span>#{trend.tag}</span>
              <span>{trend.reach}K</span>
          </div>
        )
      })}
      <Button className='tendShowBtn'>Show More <ArrowDropDownOutlined /> </Button>
    </div>
  )
}

export default RightMidSection