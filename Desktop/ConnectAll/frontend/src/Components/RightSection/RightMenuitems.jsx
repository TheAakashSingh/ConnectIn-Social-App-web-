import React from 'react'
import RightMenuIcons from './RightMenuIcons'
import './RightMenuitems.css'
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';

function RightMenuitems() {
  return (
    <div className='rightMenuitems'>
      <span className="h_primary">
        Menu
      </span>
      <div className="R_menu_icons">
        <RightMenuIcons index={1} Icons={HolidayVillageOutlinedIcon} text='Home' Color='#3670fd' />
        <RightMenuIcons index={2} Icons={ConnectWithoutContactOutlinedIcon} text='Mates' Color='#15d6eb' />
        <RightMenuIcons index={3} Icons={GroupAddOutlinedIcon} text='Social Links' Color='#48fb6f' />
        <RightMenuIcons index={4} Icons={EventOutlinedIcon} text='Events' Color='#f34343' />
        <RightMenuIcons index={5} Icons={StarsOutlinedIcon} text='Saved' Color='#4bdfb6de' />
        <div className="R_menu_visitSec">
          <span>Deep Dive</span>
          <hr />
          <div className="deepDivemenu">
            <div className="diveIco">
              <TravelExploreOutlinedIcon  style={{color: "#83ffa3"}} />
              <span>Explore More</span>
            </div>
            <div className="diveIco">
              <ArticleOutlinedIcon style={{color: "rgb(114 229 255)"}} />
              <span>Article</span>
            </div>
            <div className="diveIco">
              <Diversity2OutlinedIcon style={{color: "rgb(255 159 14)"}} />
              <span>Communities</span>
            </div>
            <div className="diveIco">
              <BiotechOutlinedIcon style={{color: "rgb(251 97 53)"}} />
              <span>Research</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default RightMenuitems