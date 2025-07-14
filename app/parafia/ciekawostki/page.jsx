import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Places from './places'
import Gallery from './gallery'
import Banner from './banner'

const Page = () => {
  return (
    <div className='bg-white'>
        <Header/>
        <Banner/>
        <Places/>
        <Gallery/>
    </div>
  )
}

export default Page