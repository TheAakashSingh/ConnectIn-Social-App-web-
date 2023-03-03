import React from 'react'
import { Link } from 'react-router-dom'
import './RightMenuIcons.css'
const RightMenuIcons = ({Icons, text, Color, index}) => {
  return (
    <div className='RightMenuIcons'>
        <Icons className='icooo' style={{color: `${Color}`}}/>
        <Link key={index} to={`/${text}`}>{text}</Link>
    </div>
  )
}

export default RightMenuIcons