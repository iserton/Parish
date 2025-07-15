import React from 'react'
import Image from 'next/image'

const Content = () => {
  return (
    <div id="first" className='w-full flex flex-col bg-white py-[10vh]'>
        <div className='flex flex-col gap-5 md:gap-0'>
        <div className=' h-[55vh w-full px-[5v flex flex-col-reverse md:flex-row gap-5 md:gap-0'>
            <div className='md:w-1/2 w-full h-[40vh] relative '>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa2.jpeg" fill objectFit='cover'></Image>
            </div>
            <div className='md:w-1/2 w-full justify-center flex flex-col pl-[5vw]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Msze Święte</h2>
                <div className='flex flex-row mt-[2vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px] pr-[1vw]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni powszednie</h4>
                        <p className='mt-[2vh] text-[1.8vh]'>6:30</p>
                        <p className='mt-[1vh] text-[1.8vh]'>8:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>9:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>18:00</p>
                    </div>
                    <div className='mx-[1vw] pr-[1vw]'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i święta</h4>
                        <p className='mt-[2vh] text-[1.8vh]'>7:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>8:30</p>
                        <p className='mt-[1vh] text-[1.8vh]'>10:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>11:30 (Rodzinna)</p>
                        <p className='mt-[1vh] text-[1.8vh]'>13:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>18:00</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh w-full px-[5v flex flex-col md:flex-row gap-5 md:gap-0'>
            
            <div className='md:w-1/2 w-full justify-center flex flex-col pl-[5vw]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Spowiedź</h2>
                <div className='flex flex-col mt-[2vh]'>
                    <p className='mt-[1vh] text-[1.8vh]'>W dni powszednie - 30 minut przed Mszą Św.</p>
                    <p className='mt-[1vh] text-[1.8vh]'>W sobotę (dolny kościół) - godz. od 16.00 do 17:30</p>
                    <p className='mt-[1vh] text-[1.8vh]'>W niedzielę (dolny kościół) - godz. od 7:30 do 13:00</p>
                </div>
            </div>
            <div className='md:w-1/2 w-full h-[40vh] relative '>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa3.jpeg" fill objectFit='cover'></Image>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh] w-full px-[5vw flex flex-col-reverse md:flex-row gap-5 md:gap-0'>
            <div className='md:w-1/2 w-full h-full relative '>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa4.jpeg" fill objectFit='cover'></Image>
            </div>
            <div className='md:w-1/2 w-full  justify-center flex flex-col pl-[5vw]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Nabożeństwa</h2>
                <div className='flex flex-col mt-[5vh]'>
                    <p className='mt-[1vh] text-[1.8vh]'>Nabożeństwa Majowe - po Mszy Św. o godz. 18.00</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Nabożeństwa Czerwcowe - po Mszy Św. o godz. 18.00</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Nabożeństwa Październikowe - po Mszy Św. o godz. 18.00</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Medytacja Różańcowa - każdy piątek października 19.00</p>
                </div>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh w-full px-[5vw flex flex-col md:flex-row gap-5 md:gap-0'>
            
            <div className='md:w-1/2 w-full justify-center flex flex-col pl-[5vw]'>
            <h2 className='text-[4.5vh] font-main font-bold'>Okres Wielkiego Postu</h2>
                <div className='flex flex-col mt-[2vh]'>
                    <p className='mt-[1vh] text-[1.8vh]'>Gorzkie Żale - niedziela 17.15</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Droga krzyżowa (dzieci) - piątek 16.30</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Droga krzyżowa (dorośli) - piątek 17.15</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Nabożeństwo Chrystusa Ukrzyżowanego - piątek 19.00</p>
                </div>
            </div>
            <div className='md:w-1/2 w-full h-[40vh] relative '>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa1.jpeg" fill objectFit='cover'></Image>
            </div>
        </div>
        </div>
        {/* <div className='flex md:hidden flex-col'>
        <div className=' h-[55vh w-full px-[5v flex flex-col'>
            
            <div className='w-full  justify-center flex flex-col pl-[5vw] mt-[5vh]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Msze Święte</h2>
                <div className='flex flex-row mt-[5vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px] pr-[1vw]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni powszednie</h4>
                        <p className='mt-[2vh] text-[1.8vh]'>6:30</p>
                        <p className='mt-[1vh] text-[1.8vh]'>8:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>9:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>18:00</p>
                    </div>
                    <div className='mx-[1vw] border-r-[2px] pr-[1vw]'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                        <p className='mt-[2vh] text-[1.8vh]'>7:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>8:30</p>
                        <p className='mt-[1vh] text-[1.8vh]'>10:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>11:30 (Dziecięca)</p>
                        <p className='mt-[1vh] text-[1.8vh]'>13:00</p>
                        <p className='mt-[1vh] text-[1.8vh]'>18:00</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[40vh] relative mt-[2vh]'>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa2.jpeg" fill objectFit='cover'></Image>
            </div>
            
        </div>
        <div className='mt-[10vh h- w-full px-[5v flex flex-col'>
            
            <div className='w-full  justify-center flex flex-col pl-[5vw] mt-[5vh]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Spowiedź</h2>
                <div className='flex flex-col mt-[5vh]'>
                    <p className='mt-[1vh] text-[1.8vh]'>W dni powszednie - 30 minut przed Mszą Św.</p>
                    <p className='mt-[1vh] text-[1.8vh]'>W sobotę (dolny kościół) - godz. od 16.00 do 17:30</p>
                    <p className='mt-[1vh] text-[1.8vh]'>W niedzielę (dolny kościół) - godz. od 7:30 do 13:00</p>
                </div>
            </div>
            <div className='w-full h-[40vh] relative mt-[2vh]'>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa3.jpeg" fill objectFit='cover'></Image>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh w-full px-[5vw flex flex-col'>
            
            <div className='w-full  justify-center flex flex-col pl-[5vw] mt-[5vh]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Nabożeństwa</h2>
                <div className='flex flex-col mt-[5vh]'>
                    <p className='mt-[1vh] text-[1.8vh]'>Nabożeństwa Majowe - po Mszy Św. o godz. 18.00</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Nabożeństwa Czerwcowe - po Mszy Św. o godz. 18.00</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Nabożeństwa Październikowe - po Mszy Św. o godz. 18.00</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Medytacja Różańcowa - każdy piątek października 19.00</p>
                </div>
            </div>
            <div className='w-full h-[40vh] relative mt-[2vh]'>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa4.jpeg" fill objectFit='cover'></Image>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh w-full px-[5vw flex flex-col'>
            
            <div className='w-full  justify-center flex flex-col pl-[5vw] mt-[5vh]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Okres Wielkiego Postu</h2>
                <div className='flex flex-col mt-[5vh]'>
                    <p className='mt-[1vh] text-[1.8vh]'>Gorzkie Żale - niedziela 17.15</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Droga krzyżowa (dzieci) - piątek 16.30</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Droga krzyżowa (dorośli) - iątek 17.15</p>
                    <p className='mt-[1vh] text-[1.8vh]'>Nabożeństwo Chrystusa Ukrzyżowanego - piątek 19.00</p>
                    
                </div>
            </div>
            <div className='w-full h-[40vh] relative mt-[5vh'>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa1.jpeg" fill objectFit='cover'></Image>
            </div>
        </div>
        </div> */}
    </div>
  )
}

export default Content