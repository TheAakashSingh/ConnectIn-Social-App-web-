import { Avatar } from '@mui/material'
import React from 'react'
import './Postedmenu.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const Postedmenu = ({ Icon, textName, textWork, textPost }) => {
    return (
        <div className='postedMenu'>
            <div className="pMenu-top">
                <div className='pMenu1-top'>
                    <Avatar src={Icon} />
                    <div className="pmenu_input">
                        <h3>{textName}</h3>
                        <span>@{textWork}</span>
                    </div>
                </div>
                <div className="pMenu-topico">
                    <AddCircleOutlineIcon />
                </div>


            </div>
            <hr />
            <div className="posted_text_menu">
                <span>{textPost}</span>
            </div>
            <hr className='hrpostedlikesec' />
            <div className="postedMenuIcons">

                <div className="ico">
                    <ThumbUpIcon /><span>Like</span>

                </div>
                <div className="ico">

                    <CommentIcon /> <span>Comment</span>
                </div>
                <div className="ico">
                    <ShareIcon /> <span>Share</span>

                </div>
                <div className="ico">

                    <BookmarkAddedIcon /> <span>Save</span>
                </div>
            </div>
            <hr className='hrpostedlikesec' />
        </div>
    )
}

export default Postedmenu