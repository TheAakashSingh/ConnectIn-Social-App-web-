import React, { useEffect, useRef, useState } from 'react'
import './RightTopViewSection.css'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Avatar } from '@mui/material';
import RightMenuitems from './RightMenuitems';
import RightProfileMenu from './RightProfileMenu';

const RightTopViewSection = () => {
    const [open, setOpen] = useState(false)
    const [openMe, setOpenMe] = useState(false)
    let menuRef = useRef();
    let meProfileRef = useRef();
    useEffect(() => {
        let closeMenu = (e) => {
            if (!menuRef.current.contains(e.target)) {

                setOpen(false)
            }
            if (!meProfileRef.current.contains(e.target)) {

                setOpenMe(false)
            }
        }

        document.addEventListener("mousedown", closeMenu);
        return () => {
            document.removeEventListener("mousedown", closeMenu);
        }
    })
    return (
        <div className="rightTopSection">
            <div className='RightTopViewSection'>
                <div className="R_top_view">
                    <ToggleOffOutlinedIcon />
                    <CampaignOutlinedIcon />
                    <QuestionAnswerOutlinedIcon />
                    <WidgetsOutlinedIcon className='MenuIcon' onClick={() => { setOpen(!open) }} />
                    <div className="RTVS_profile" onClick={() => { setOpenMe(!openMe) }}>
                        <Avatar src='https://pbs.twimg.com/profile_images/1586431700086665217/r_5LB9Ei_400x400.jpg' />

                        <div className="RTVS_profile_me">
                            <span>Me</span>
                            <ArrowDropDownOutlinedIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`menuItems_trigger ${open ? 'active' : 'inactive'}`} ref={menuRef}>
                <RightMenuitems />
            </div>
            <div  className={`${openMe?'meClicked':'meNotClicked'}`} ref={meProfileRef} >
                <RightProfileMenu />
            </div>
        </div>
    )
}

export default RightTopViewSection