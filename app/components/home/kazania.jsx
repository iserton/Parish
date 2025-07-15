import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Kazania = () => {
  return (
    <div className='flex w-full  flex-col md:flex-row bg-black'>
        <div className='w-full md:w-[50%] h-[40vh] md:h-auto flex relative bg-black'>
            <Image className='md:pr-[5vw] ' alt='tlo kazania' fill objectFit='cover' src="/proboszcz2.jpeg"/>
        </div>
        <div className='flex flex-col w-full md:w-1/2 h-full justify-center pr-[10vw] text-white bg-black my-[5vh] md:my-[10vh] pl-[5vw] md:pl-0'>
            <h2 className='text-[5.5vh] font-header2'>Kazania Ojca Leszka</h2>
            
            <p className='mt-[3vh]'>Zapraszamy do stołu Słowa Bożego, który hojnie dla nas zastawia ksiądz Ojciec Leszek Slipek. </p>
            <p className='mt-[1vh]'>Prezentujemy nagrania kazań niedzielnych i świątecznych, konferencji, medytacji. Bierzcie i... słuchajcie!</p>
            {/* <p className='mt-[1vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p> */}
            <Link href="/aktualnosci/kazania"><button className='p-4 bg-dark text-white mt-[5vh]'>Zobacz więcej</button></Link>
        </div>
    </div>
  )
}

export default Kazania