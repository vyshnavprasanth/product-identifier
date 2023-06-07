import React from 'react'
import ApplicationInfo from '../Components/ApplicationInfo/ApplicationInfo'
import './Signup.css'
import SignupPanel from '../Components/SignupPanel/SignupPanel'

function Signup(props) {
  return (
    
    <div className='signup-container' style={{ backgroundColor: props.main ? 'rgba(54, 65, 106, 1)' : 'transparent' }}>
        {props.main?<SignupPanel main={true} />:<SignupPanel main={false}/>}
        {props.main?null:<ApplicationInfo />}
    </div>
  )
}

export default Signup
