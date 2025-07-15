import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Proboszcz = () => {
  return (
    <div id="first" className='w-full flex flex-col bg-white px-[5vw] py-[10vh]'>
        <div className='w-full h-[50vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_pawel2.jpeg" fill objectFit='cover'/>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between mt-[5vh]'>
            <div className='min-w-[30%]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Proboszcz</h2>
                <h2 className='text-[4.5vh] font-header2'>Paweł Powierza</h2>
            </div>
            <div className='w-full md:max-w-[50%]'>
                <p className='mt-[2vh] md:mt-0'>Proboszcz Parafii św. Andrzeja Apostoła od 2025 r., katecheta, miłośnik filozofii i historii szczególnie tej najnowszej, pasjonat gór i pieszych wycieczek</p>
                <Link href="/parafia/duszpasterze/powierza"><button className='bg-dark text-white px-4 py-3 mt-[2vh]'>Zobacz więcej</button></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Proboszcz