import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='w-full h-full relative'>
            <Image alt="ksiadz proboszcz ogloszenia" fill objectFit='cover' src="/ogloszenianew1.jpeg"/>
        </div>
        <div className='bg-white w-full flex flex-col md:flex-row px-[5vw] md:py-[2vh] pt-[0] pb-[1vh] items-start md:items-center justify-between'>
            <h1 className='text-[55px] font-header2 font-bold text-black'>Ogłoszenia</h1>
            <div className='w-full md:w-[50%] h-full flex flex-col justify-center items-start'>
                <p className='text-black text-[1.7vh]'>Zapraszamy do zapoznania się z najnowszymi wydarzeniami dziejącymi się w naszej Parafii.</p>
                <button className='bg-dark text-white px-4 py-3 mt-[1vh]'>Zobacz Więcej</button>
            </div>
        </div>
    </div>
  )
}

export default Header