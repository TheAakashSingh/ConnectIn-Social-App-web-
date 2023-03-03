import { Avatar, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
const LoginPage = () => {
  const Login=()=>{
    console.log('login')
  }
  return (
    <div className='Login'>
      <div className="LoginBox">
        <Avatar />
        <form action="submit"  className='Logform'>
          <input type="email" placeholder='Enter your UserName/email' />
          <input type="text" placeholder='Enter your password' />
          <div>
          <Button type='submit' onClick={Login}>Login</Button>
          <Link to={'/RegisterPage'}  >New Use? Register here..</Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginPage