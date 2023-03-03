import React, { useState } from 'react'
import './Midsection.css'
import PostBox from './PostBox'
import Postedmenu from './Postedmenu'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { datas } from '../../data'

const Midsection = () => {
  const [data, setData] = useState([])

  return (
    <div className='midsection'>
      <div className="mid_header">
        <h2>Home</h2>
        <PublicOutlinedIcon />
      </div>
      {/* PostBox */}
      <PostBox setData={setData} />

      {/* postedBox */}
      {datas.concat(data).reverse().map((data, id)=>{
        return(
          <Postedmenu key={id} textName={data.name} textWork={data.work} Icon={data.img} textPost={data.post} />
        )
      })}      
    </div>
  )
}

export default Midsection
