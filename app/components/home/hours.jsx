import React from 'react'
import Image from 'next/image'
const Hours = () => {
  return (
    <div className='flex flex-col w-full py-[10vh] relative justify-center bg-black'>
        <Image src="/godziny.jpeg" alt="tlo dziecko" fill={true} objectFit='cover' className='hidden md:flex'/>
        <div className=" md:pl-[5vw] md:ml-[50%] w-full md:w-[40%] h-full text-white py-[5vh] flex flex-col justify-center items-center md:items-stretch z-10">
            <div className='flex w-full flex-row justify-center md:justify-start '>
                <div className={`relative w-[10%] h-[8vh] `}>
                    <Image alt="ikonka kosciol" src="/icon-1.png" fill={true} objectFit='contain '></Image>
                </div>
                <h2 className='text-white text-[5.5vh] ml-[2vw] font-header2'>Porządek liturgiczny</h2>
            </div>
            <div className='flex flex-col md:flex-row mt-[8vh] text-white'>
                <div className='flex flex-col border-b-[2px] md:border-b-0 pb-[2vh] md:pb-0'>
                    <h3 className='font-bold text-[2.3vh] mb-[2vh]'>Msze święte</h3>
                    <div className='flex w-full gap-10'>

                        <div className=''>
                            <h4 className='font-bold text-[2.3vh]'>Dni powszednie</h4>
                            <p className='mt-[2vh]'>6:30</p>
                            <p>8:00</p>
                            <p>9:00</p>
                            <p>18:00</p>
                        </div>
                        <div className=''>
                            <h4 className='font-bold text-[2.3vh]'>Niedziele i święta</h4>
                            <p className='mt-[2vh]'>7:00</p>
                            <p>8:30</p>
                            <p>10:00</p>
                            <p>11:30 (Rodzinna)</p>
                            <p>13:00</p>
                            <p>18:00</p>
                        </div>
                    </div>
                </div>
                
                <div className='md:pl-[1vw] border-l-0 md:border-l-[2px] mt-[2vh] md:mt-0'>
                    <h3 className='font-bold text-[2.3vh] mb-[2vh]'>Spowiedź</h3>
                    <p className='mt-[2vh]'>Dni powszednie: 30 min. przed Mszą Św.</p>
                    <p className='mt-[2vh]'>Sobota: 16:00-18:00 w dolnym kościele</p>
                    <p className='mt-[2vh]'>Niedziela: 8:00-13:00 w dolnym kościele</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hours