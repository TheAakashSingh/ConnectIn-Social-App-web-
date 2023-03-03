import React, { useState } from 'react'
import './Postbox.css'
import i1 from '../images/i1.jpg'
import i2 from '../images/i2.jpg'
import i3 from '../images/i3.jpg'
import i4 from '../images/i4.jpg'
import i5 from '../images/i5.jpg'
import main from '../images/main.jpg'
import { Avatar, Button } from '@mui/material'
import PostBoxicon from './PostBoxicon'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import PollIcon from '@mui/icons-material/Poll';
import TodayIcon from '@mui/icons-material/Today';

const PostBox = ({setData}) => {
  const [postValue, setPostValue] = useState('')

  const handleSubmit=(e) =>{
    e.preventDefault()
    const mydata = [
      { name: 'Antino Wang', username: "Antino Wang", work: 'MERN Full Stack Developer', img:main , post:postValue }
    ]
    setData((prevData) => [...prevData,...mydata])
    console.log(postValue)
    setPostValue('')
  }

  return (
    <div className='postBox'>
      <form action="" onSubmit={handleSubmit} >
        <div className="post_input">
          <Avatar src={main}  />
          <input type="text" value={postValue} onChange={(e) => setPostValue(e.target.value)} placeholder='Wanna Write something?' />
        </div>
      </form>

      <div className="postBoxIcons">
        <PostBoxicon Icon={InsertPhotoIcon} text="Photo" color='#70b5f9' />
        <PostBoxicon Icon={SmartDisplayIcon} text="Video" color='#7fc15e' />
        <PostBoxicon Icon={PollIcon} text="Poll" color='#1870cb' />
        <PostBoxicon Icon={TodayIcon} text="Events" color='#ef4c4c' />
      </div>
    </div>
  )
}

export default PostBox
