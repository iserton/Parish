import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={`bg-dark w-full h-auto text-white flex flex-col pt-[4vh] pb-[2vh] px-[5vw]`}>
        <div className='hidden md:flex flex-col md:flex-row'>
        <div className={`flex flex-col w-full h-[30vh] md:h-full md:w-[15%]`}>
            <div className={`w-full h-[30vh] relative`}>
                <Image alt="logo kosciola" src="/kosciol_logo.png" fill={true} objectFit='contain'></Image>
            
            </div>
            
        </div>
        <div className={`w-[20%] flex flex-col ml-[3vw]`}>
                    <h3 className='font-bold text-[2.3vh]'>Adres</h3>
                    <p>Chłodna 9</p>
                    <p>00-891 Warszawa</p>
                    <h2 className='font-bold text-[2.3vh] mt-[3vh] '>Kontakt</h2>
                    <p>parafiachlodna@gmail.com</p>
                    <p>22 620 37 47</p>
            
        </div>
        <div className='flex flex-col w-[20%] mx-[2vw] border-r-[2px]'>
            <h3 className='font-bold text-[2.3vh]'>Msze Święte</h3>
            <div className='w-full flex flex-row mt-[2vh]'>
                <div>
                    <h4>Dni powszednie</h4>
                    <p className='mt-[2vh]'>6:30</p>
                    <p>8:00</p>
                    <p>9:00</p>
                    <p>18:00</p>
                </div>
                <div className='ml-[2vw]'>
                    <h4>Niedziele i Święta</h4>
                    <p className='mt-[2vh]'>7:00</p>
                    <p>8:30</p>
                    <p>10:00</p>
                    <p>11:30 (Rodzinna)</p>
                    <p>13:00</p>
                    <p>18:00</p>
                </div>
            </div>
        </div>
        <div className='w-[20%] mx-[2vw] flex flex-col border-r-[2px]'>
            <h3 className='font-bold text-[2.3vh]'>Spowiedź</h3>
            <p className='mt-[2vh]'>Dni tygodnia: 30 min. przed Mszą Św.</p>
            <p className='mt-[2vh]'>Sobota: 16:00-18:00 w dolnym kościele</p>
            <p className='mt-[2vh]'>Niedziela: 8:00-13:00 w dolnym kościele</p>
        </div>
        <div className='w-full md:w-[10vw] h-[20vh] md:h-auto relative flex flex-row md:flex-col ml-[2vw]'>
                <div className='relative w-[30%] h-full'>
                    <Image src="/instagram.png" alt="ikonka instagrama" fill={true} objectFit='contain'></Image>
                </div>
                <div className='relative w-[30%] h-full'>
                    <Image src="/youtube.png" alt="ikonka youtube" fill={true} objectFit='contain'></Image>
                </div>
                <div className='relative w-[30%] h-full'>
                    <Image src="/facebook.png" alt="ikonka facebooka" fill={true} objectFit='contain'></Image>
                </div>
            </div>
            </div>
            <div className=' mt-[1vh] w-full hidden md:flex flex-col'>
            <p className='text-center'><Link href="/bibliografia">Bibliografia zdjęć</Link></p>
                <p className='text-center mt-[1vh]'>© 2023 – Wszelkie prawa zastrzeżone</p>
                <p className='mt-[1vh] text-center'>Developed by - <a href='https://filipolszewski.co.uk'>Filip Olszewski</a></p>
            </div>
            <div className='flex md:hidden flex-col w-full '>
            <div className='flex flex-row  text-white'>
                <div className='pr-[1vw] border-r-[2px]'>
                    <h4 className='font-bold text-[2.3vh]'>Niedziele i Święta</h4>
                    <p className='mt-[2vh]'>7:00</p>
                    <p>8:30</p>
                    <p>10:00</p>
                    <p>11:30 (Rodzinna)</p>
                    <p>13:00</p>
                    <p>18:00</p>
                </div>

                <div className='px-[1vw]'>
                    <h4 className='font-bold text-[2.3vh]'>Dni powszednie</h4>
                    <p className='mt-[2vh]'>6:30</p>
                    <p>8:00</p>
                    <p>9:00</p>
                    <p>18:00</p>
                </div>
                
                <div className='pl-[1vw] border-l-[2px]'>
                    <h3 className='font-bold text-[2.3vh]'>Spowiedź</h3>
                    <p className='mt-[2vh]'>Dni tygodnia: 30 min. przed Mszą Św.</p>
                    <p className='mt-[2vh]'>Sobota: 16:00-18:00 w dolnym kosściele</p>
                    <p className='mt-[2vh]'>Niedziela: 8:00-13:00 w dolnym kościele</p>
                </div>
            </div>


            <div className={`w-full flex flex-row gap-4`}>
                    <div>

                    <h3 className='font-bold text-[2.3vh]'>Adres</h3>
                    <p>Chłodna 9</p>
                    <p>00-891 Warszawa</p>
                    </div>
                    <div>

                    <h2 className='font-bold text-[2.3vh] '>Kontakt</h2>
                    <p>parafiachlodna@gmail.com</p>
                    <p>22 620 37 47</p>
                    </div>
            
            </div>
            

                <div className='w-full md:w-[10vw] h-[10vh] md:h-auto relative flex flex-row md:flex-col ml-[2vw]'>
                    <a href="https://www.instagram.com/parafiaandrzeja/">
                        <div className='relative w-[30%] h-full'>
                            <Image src="/instagram.png" alt="ikonka instagrama" fill={true} objectFit='contain'></Image>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCD90BZIQ_i3qlxrbP-W-ksA">
                        <div className='relative w-[30%] h-full'>
                            <Image src="/youtube.png" alt="ikonka youtube" fill={true} objectFit='contain'></Image>
                        </div>
                    </a>
                    <a href='https://www.facebook.com/ParafiaAndrzeja'>
                        <div className='relative w-[30%] h-full'>
                            <Image src="/facebook.png" alt="ikonka facebooka" fill={true} objectFit='contain'></Image>
                        </div>
                    </a>
                </div>
                <div className={`flex flex-col w-full h-[30vh] md:h-full md:w-[15%]`}>
                <div className={`w-full h-full relative`}>
                    <Image alt="logo kosciola" src="/kosciol_logo.png" fill={true} objectFit='contain'></Image>
                
                </div>
                <div className=' mt-[1vh] w-full flex flex-col'>
                    <p className='text-center'><Link href="/bibliografia">Bibliografia zdjęć</Link></p>
                    <p className='text-center mt-[1vh]'>© 2023 – Wszelkie prawa zastrzeżone</p>
                    <p className='mt-[1vh] text-center'>Developed by - <a href='https://filipolszewski.co.uk'>Filip Olszewski</a></p>
                </div>
            
        </div>
            </div>
    </div>
  )
}
export default Footer
