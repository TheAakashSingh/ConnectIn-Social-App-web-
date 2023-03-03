import React from 'react'
import './ProfileImages.css'
import cover from '../images/sec20.webp'
const ProfileImages = () => {
    return (
        <div className="ProfileCard" >
            <div className="ProfileImages">
                <img src={cover} alt="" />
                <img src='https://pbs.twimg.com/profile_images/1586431700086665217/r_5LB9Ei_400x400.jpg' alt="" />
            </div>
            <div className="ProfileName">
                <span>Antino Wang</span>
                <span>MERN Full Stack Developer</span>
            </div>

            <div className="FollowStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>1500+</span>
                        <span>Followers</span>
                    </div>
                    <div className="vr"></div>
                    <div className="follow">
                        <span>400</span>
                        <span>Following</span>
                    </div>
                </div>
                <hr />
            </div>

        </div>
    )
}

export default ProfileImages