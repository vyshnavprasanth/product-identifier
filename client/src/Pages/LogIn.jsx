import React from 'react'
import LoginPanel from '../Components/LoginPanel/LoginPanel'
import ApplicationInfo from '../Components/ApplicationInfo/ApplicationInfo'
import './LogIn.css'

function LogIn(props) {
  return (
    <div className='login-container'style={{ backgroundColor: props.main ? 'rgba(54, 65, 106, 1)' : 'transparent' }}>
        {props.main?<LoginPanel main={true} />:<LoginPanel main={false}/>}
        {props.main?null:<ApplicationInfo />}
        
    </div>
  )
}

export default LogIn