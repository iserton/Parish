import React from 'react'
import Header from './header'
import Places from './places'
import Gallery from './gallery'
import Banner from './banner'
import Detailed from './detailed'

const Page = () => {
  return (
    <div className='bg-white'>
        <Header/>
        <Banner/>
        <Detailed/>
        <Places/>
        <Gallery/>
    </div>
  )
}

export default Page