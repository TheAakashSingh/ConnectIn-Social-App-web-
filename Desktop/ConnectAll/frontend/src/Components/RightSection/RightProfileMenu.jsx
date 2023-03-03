import { Avatar, Button } from '@mui/material'
import React from 'react'
import './RightProfileMenu.css'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Link } from 'react-router-dom';
const RightProfileMenu = () => {
  return (
    <div className='rightProfileMenu'>
      <div className="r_Profile_MenuIcon">
        <Avatar src='	https://pbs.twimg.com/profile_images/1586431700086665217/r_5LB9Ei_400x400.jpg' />
        <div className="usrDetails">
          <span>Aakash Singh</span>
          <span>@Mern Stack Developer</span>
        </div>
      </div>
      <Button>View Profile</Button>
      <hr />


      <div className="rightMenuAccountSection">
        <span className='span_account'>Account</span>
        <div className="acntIco">
          <SettingsSuggestOutlinedIcon />
          <Link key={11} to={"/Setting"}>Setting</Link>
        </div>
        <div className="acntIco">
          <SecurityOutlinedIcon />
          <Link key={12} to={"/PrivacySecurity"}>Privacy & Security</Link>
        </div>
        <div className="acntIco">
          <SupportOutlinedIcon />
          <Link key={13} to={"/Help"}>Help</Link>
        </div>
        <div className="acntIco">
          <TranslateOutlinedIcon />
          <Link key={14} to={"/Languages"}>Languages</Link>
        </div>


      </div>
      <hr />
      <div className="RightLoginSec">
        <div className="acntIco">
          <VpnKeyOutlinedIcon />
          <Link to={"/LoginPage"}>Login</Link>
        </div>
        {/* <div className="acntIco">

          <AppRegistrationOutlinedIcon />
          <span>Registration</span>
        </div> */}
      </div>

    </div>
  )
}

export default RightProfileMenu