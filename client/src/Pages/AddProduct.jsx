import React from 'react'
import ApplicationInfo from '../Components/ApplicationInfo/ApplicationInfo'
import ProductAdd from '../Components/ProductAdd/ProductAdd'
import './AddProduct.css'

function AddProduct() {
  return (
    <div className='add-product-container'>
        <ProductAdd />
        <ApplicationInfo />
    </div>
  )
}

export default AddProduct