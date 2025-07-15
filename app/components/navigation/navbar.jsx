'use client'
import React from 'react'
import Image from 'next/image'
import { useHeaderVisibility } from '@/app/HeaderVisibilityContext'
import Link from 'next/link'

const Navbar = () => {
  const { isHeaderVisible, toggleMenu } = useHeaderVisibility();
  console.log(isHeaderVisible, toggleMenu);

  return (
    <div className={`fixed z-50 flex flex-row items-center justify-between ${isHeaderVisible ? 'right-0' : 'w-full'}  px-[5vw] h-[15vh] bg-opacity-100 pt-[2vh]`}>
        <div className={` ${isHeaderVisible ? 'hidden' : ''}  flex relative h-full w-[20%]`}>
            <Link href="/" className={`cursor-pointer`}>
              <Image src="/kosciol_logo.png"  alt="opis parafii" fill={true} objectFit='contain'/>
            </Link>
        </div>
        
        <div className='flex flex-row  items-center cursor-pointer' onClick={() => toggleMenu()}>
            {/* <Image src="/more_white.png" alt="close icon"  width={20} height={30} ></Image> */}
            <i className={`${isHeaderVisible ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'} text-zinc-200 text-[3vh]`}></i>
            <p className='flex ml-[10px] text-zinc-200 text-[3vh] font-header2'>{isHeaderVisible ? 'ZAMKNIJ' : "MENU"}</p>
        </div>
    </div>
  )
}

export default Navbar
