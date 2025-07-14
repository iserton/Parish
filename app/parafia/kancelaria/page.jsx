import React from 'react'
import Header from './header'
import Hours from './hours'
import Account from './account'

const Page = () => {
  return (
    <div className='bg-white'>
        <Header/>
        <Hours/>
        <Account/>
    </div>
  )
}

export default Page