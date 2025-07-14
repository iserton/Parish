import React from 'react'
import Header from './header'
import Intro from './intro'
import Detailed from './detailed'
import Gallery from './gallery'
import Day from './day'
import Banner from './banner'
import Faqs from './faqs'
import Documents from './documents'

const Page = () => {
  return (
    <div className='bg-white'>
        <Header/>
        <Intro/>
        {/* <Detailed/> */}
        <Gallery/>
        {/* <Day/> */}
        {/* <Banner/> */}
        {/* <Faqs/> */}
        {/* <Documents/> */}
    </div>
  )
}

export default Page