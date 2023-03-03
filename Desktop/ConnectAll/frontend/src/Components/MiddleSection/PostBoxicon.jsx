import React from 'react'
import './PostBoxicon.css'
const PostBoxicon = ({Icon, text, color}) => {
  return (
    <div className='postBox_icon'>
        <Icon style={{color:color}} />
        <h3>{text}</h3>
    </div>
  )
}

export default PostBoxicon