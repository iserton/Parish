import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Pozostali = () => {
  return (
    <div className='w-full flex flex-col px-[5vw] py-[10vh] bg-white'>
        <div className='w-full  flex flex-row'>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pr-[5vw]' alt="zdjecie wikariusza" src="/ksiadz_andrzej.jpeg" fill objectFit='cover'/>
            </div>
            <div className='flex flex-col w-full md:w-1/2 justify-center md:pl-[3vw] items-start'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Andrzej Ostrowski</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/ksiadz_andrzej.jpeg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>Człowiek, ksiądz, duszpasterz, katecheta. Obieżyświat, lubiący podróże, przewodnik po świecie arabskim. Zafascynowany Ziemią Boga - Ziemią Świętą i Bliskim Wschodem. Duszpasterz, nauczyciel i wychowawca w klasach SMS Akademii Legia Warszawa.</p>
                <Link href="/parafia/duszpasterze/ostrowski"><button className='bg-dark text-white px-4 py-3 mt-[2vh]'>Zobacz więcej</button></Link>
            </div>
        </div>
        <div className='w-full  flex flex-row mt-[5vh]'>
            
            <div className='flex flex-col w-full md:w-1/2 justify-center pr-[3vw]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Paweł Powierza</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/ksiadz_pawel2.jpeg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>Wikariusz Parafii św. Andrzeja Apostoła od 2020 r., katecheta, miłośnik filozofii i historii szczególnie tej najnowszej, pasjonat gór i pieszych wycieczek</p>
                <Link href="/parafia/duszpasterze/powierza"><button className='bg-dark text-white px-4 py-3 mt-[2vh]'>Zobacz więcej</button></Link>
            </div>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pl-[5vw]' alt="zdjecie wikariusza" src="/ksiadz_pawel2.jpeg" fill objectFit='cover'/>
            </div>
        </div>
        <div className='w-full  flex flex-row mt-[5vh]'>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pr-[5vw]' alt="zdjecie wikariusza" src="/ksiadz_zbigniew.jpeg" fill objectFit='cover'/>
            </div>
            <div className='flex flex-col w-full md:w-1/2 justify-center md:pl-[3vw]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Zbigniew Badowski</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/ksiadz_zbigniew.jpeg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>Prywatnie interesuje się literaturą teologiczną, prawniczą, historyczną, filozoficzną. Lubi rozmawiać z ludźmi, jeździć na rowerze, odbywać wycieczki krajoznawcze. Jednak – jak mówi - wszystko powyższe jest tylko dodatkiem, gdyż od ponad 45 lat najpełniej realizuje się jako ksiądz w pracy duszpasterskiej.</p>
                <Link href="/parafia/duszpasterze/badowski"><button className='bg-dark text-white px-4 py-3 mt-[2vh]'>Zobacz więcej</button></Link>
            </div>
        </div>
        <div className='w-full  flex flex-row mt-[5vh]'>
            
            <div className='flex flex-col w-full md:w-1/2 justify-center pr-[3vw]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. diakon Cezary J. Uszyński</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/diakon.jpg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>w przeszłości instruktor ZHP i ZHR, miłośnik przyrody, turysta; orędownik wychowania młodzieży do samodzielności i zaradności, przez praktyczne działanie. Absolwent Wydziału Elektrycznego Politechniki Warszawskiej (inżynier elektryk); od 1980 roku prowadzi działalność we własnej firmie instalacyjnej; dziś - czynny zawodowo emeryt.</p>
                <Link href="/parafia/duszpasterze/uszynski"><button className='bg-dark text-white px-4 py-3 mt-[2vh]'>Zobacz więcej</button></Link>
            </div>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pl-[5vw]' alt="zdjecie wikariusza" src="/diakonnew1.jpeg" fill objectFit='cover'/>
            </div>
        </div>
    </div>
  )
}

export default Pozostali