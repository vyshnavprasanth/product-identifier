import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import DisplayProducts from '../Components/DisplayProducts/DisplayProducts'
function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <DisplayProducts />
    </div>
  )
}

export default Home