// 'use client'
import React from 'react'
import Content from './content'


const page = ({params}) => {
    // console.log(params.id)
  return (
    <div>
        <Content id={params.id}/>
    </div>
  )
}

export default page