import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Wspolnoty = () => {
  return (
    <div className='w-full flex flex-col relative bg-white py-[10vh] px-[8vw]'>
        <h2 className='text-center text-[5.5vh] text-black font-header2'>Poznaj nasze wspólnoty parafialne</h2>
        {/* <Image src="/wspolnoty.jpeg" alt="tlo wspolnoty" fill={true} />  */}
        <div className='z-10 w-full h-full grid grid-cols-1 md:grid-cols-3 grid-rows-2 justify-center items-center gap-[2vh] mt-[5vh]'>
            {/* <h2 className='text-white text-[30px] text-black font-header2'>Poznaj Nasze Wspolnoty Parafialne</h2> */}
            {/* <p className='text-white mt-[3vh]'>W naszym kosciel istnieje nie od dzis wiele roznych zgromadzen ktore zajmuja sie blah blah przerozny;mji rzeczami. Juz dzis mozesz dolaczyc i sie zaangazowac.</p> */}
            
                <Link href="/wspolnoty/schola">
                <div className='flex w-full h-full bg-black bg-opacity-50 min-h-[30vh] relative hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center'>
                    <div className='absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-80 hover:bg-opacity-60'></div>
                    <Image alt="" src="/chor12.jpeg" fill objectFit='cover'></Image>
                    <p className='z-30 text-center text-bold text-white font-header2 text-[4.5vh]'>SCHOLA</p>
                </div>
                </Link>

                <Link href="/wspolnoty/schola-dziecieca">
                <div className='flex w-full h-full relative bg-black bg-opacity-50 min-h-[30vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center'>
                    <div className='absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-80 hover:bg-opacity-60'></div>
                    <Image alt="" src="/rodz6.jpeg" fill objectFit='cover'></Image>
                    <p className='z-20 text-center text-bold text-white font-header2 text-[4.5vh]'>SCHOLA RODZINNA</p>
                </div>
                </Link>

                <Link href="/wspolnoty/caritas">
                <div className='flex w-full h-full relative bg-black bg-opacity-50 min-h-[30vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center'>
                    <div className='absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-80 hover:bg-opacity-60'></div>
                    <Image alt="" src="/caritasnew2.png" fill objectFit='cover'></Image>
                    <p className='z-20 text-center text-bold text-white font-header2 text-[4.5vh]'>CARITAS</p>
                </div>
                </Link>

                <Link href="/wspolnoty/ministranci">
                <div className='flex w-full h-full relative bg-black bg-opacity-50 min-h-[30vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center'>
                    <div className='absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-80 hover:bg-opacity-60'></div>
                    <Image alt="" src="/min3.jpeg" fill objectFit='cover'></Image>
                    <p className='z-20 text-center text-bold text-white font-header2 text-[4.5vh]'>SŁUŻBA LITURGICZNA</p>
                </div>
                </Link>

                <Link href="/wspolnoty/rycerstwo-niepokalanej">
                <div className='flex w-full h-full relative bg-black bg-opacity-50 min-h-[30vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center'>
                    <div className='absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-80 hover:bg-opacity-60'></div>
                    <Image alt="" src="/kolo_rozanca.webp" fill objectFit='cover'></Image>
                    <p className='z-20 text-center text-bold text-white font-header2 text-[4.5vh]'>RYCERSTWO NIEPOKALANEJ</p>
                </div>
                </Link>

                <Link href="/wspolnoty/mloda-inteligencja">
                <div className='flex w-full h-full relative bg-black bg-opacity-50 min-h-[30vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center'>
                    <div className='absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-80 hover:bg-opacity-60'></div>
                    <Image alt="" src="/kmi12.jpeg" fill objectFit='cover'></Image>
                    <p className='z-20 text-center text-bold text-white font-header2 text-[4.5vh]'>KLUB MŁODEJ INTELIGENCJI</p>
                </div>
                </Link>


                {/* <Link href="/wspolnoty/schola">
                <div className='flex h-[15vh] w-[15vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold '>SCHOLA</p>
                </div>
                </Link>
                <Link href="/wspolnoty/schola-dziecieca">
                <div className='flex h-[15vh] w-[15vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>SCHOLA DZIECECA</p>
                </div>
                </Link>
                <Link href="/wspolnoty/ministranci">
                <div className='flex h-[15vh] w-[15vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>MINISTRANCI</p>
                </div>
                </Link>
                <Link href="/wspolnoty/rada">
                <div className='flex h-[15vh] w-[15vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>RADA PARAFIALNA</p>
                </div>
                </Link> */}
            
        </div>
    </div>
  )
}

export default Wspolnoty