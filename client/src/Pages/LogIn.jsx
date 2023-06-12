import React, { useEffect, useState } from 'react'
import LoginPanel from '../Components/LoginPanel/LoginPanel'
import ApplicationInfo from '../Components/ApplicationInfo/ApplicationInfo'
import './LogIn.css'

function LogIn(props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='login-container'style={{ backgroundColor: props.main ? 'rgba(54, 65, 106, 1)' : 'transparent' }}>
        {props.main?<LoginPanel main={true} />:<LoginPanel main={false}/>}
         {isMobile ||props.main ? null:<ApplicationInfo />}
        
    </div>
  )
}

export default LogIn