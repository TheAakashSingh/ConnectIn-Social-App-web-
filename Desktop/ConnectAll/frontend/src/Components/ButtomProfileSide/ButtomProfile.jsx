import React from 'react'
import './ButtomProfile.css'
import { datas } from '../../data'
import { Button } from '@mui/material'
import { ArrowDropDownOutlined } from '@mui/icons-material'
const ButtomProfile = () => {
    return (
        <div className='ButtomProfile'>
            <h3>You May Also Like</h3>
                {datas.map((data, id) => {
                    return (
                        <div className="follower" key={id}>
                            <img src={data.img} alt="" />
                            <div className="names">
                                <span> {data.name} </span>
                                <span>@{data.username}</span>
                            </div>
                            <div className="btn">
                                <Button>Connect</Button>
                            </div>
                        </div>

                    )
                })}
                <div className="more">
                <Button className='tendShowBtn'>Show More <ArrowDropDownOutlined /> </Button>
                </div>
            </div>
    )
}

export default ButtomProfile