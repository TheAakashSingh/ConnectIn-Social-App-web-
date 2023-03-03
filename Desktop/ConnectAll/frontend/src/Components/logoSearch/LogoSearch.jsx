import React from 'react'
import './Logosearch.css'
import mainlogo from '../images/mainlogo2.png'
import SearchIcon from '@mui/icons-material/Search';
const LogoSearch = () => {
  return (
    <div className='logoSearch'>
      <img src={mainlogo} alt="" />
      <div className="Search">
        <input type="text" placeholder='#Expore more' />
        <div className="S-Icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch