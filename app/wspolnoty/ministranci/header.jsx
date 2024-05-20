import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='w-full h-full relative'>
            <Image alt="ksiadz proboszcz kazanie" fill objectFit='cover' src="/min0.jpeg"/>
        </div>
        <div className='bg-white w-full flex flex-col md:flex-row px-[5vw] md:py-[2vh] pt-[0] pb-[1vh] items-start md:items-center justify-between'>
            <h1 className='text-[55px] font-header2 font-bold text-black'>Służba Liturgiczna</h1>
            <div className='w-full md:w-[50%] h-full flex flex-col justify-center items-start'>
                <p className='text-black text-[1.7vh]'>&ldquo;Kiedy mali chłopcy i młodzieńcy pełnią służbę ołtarza z radością i entuzjazmem, dają swoim rówieśnikom wymowne świadectwo doniosłości i piękna Eucharystii&rdquo; Jan Paweł II</p>
                <button className='bg-dark text-white px-4 py-3 mt-[1vh]'>Zobacz Więcej</button>
            </div>
        </div>
    </div>
  )
}

export default Header