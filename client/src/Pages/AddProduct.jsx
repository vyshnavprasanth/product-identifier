import React, { useEffect, useState } from 'react'
import ApplicationInfo from '../Components/ApplicationInfo/ApplicationInfo'
import ProductAdd from '../Components/ProductAdd/ProductAdd'
import './AddProduct.css'

function AddProduct(props) {
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
  console.log("in main product"+props.edit)
  
  return (
    <div className='add-product-container'>

       {props.edit?
       <ProductAdd edit={true}/>: <ProductAdd edit={false} />}
        {!isMobile?<ApplicationInfo />:null}
    </div>
  )
}

export default AddProduct