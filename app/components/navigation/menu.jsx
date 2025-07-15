'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useHeaderVisibility } from '@/app/HeaderVisibilityContext'

const Menu = () => {
    const { isHeaderVisible, toggleMenu } = useHeaderVisibility();
    const [menuElement, setElement] = useState('');
    const closeReset = () => {
        setElement('');
        toggleMenu();
    }
    console.log(isHeaderVisible, toggleMenu);
  return (
    <div className={`fixed z-20 overflow-hidden w-full h-screen bg-dark text-white px-[10vw] flex md:flex-col justify-center ${isHeaderVisible ? 'fixed' : 'hidden'} `}>
        <div className='flex flex-col w-full h-full'>
            {/* <div className={`flex flex-row justify-end h-auto mt-[5vh] mb-[10vh]`}  onClick={() => closeReset()}>
                <Image src="/close.png" alt="close icon"  width={20} height={10} objectFit='contain'></Image>
                <p className='flex align-center justify-center ml-[10px]'>ZAMKNIJ</p>
                
            </div> */}
            <div className={`flex flex-row w-full h-full`}>
                <div className={`hidden md:flex flex-col w-[35%]  text-[2.3vh] h-full justify-center`}>
                    <div className={`flex relative h-[35vh] w-[60%] mb-[5vh] `}>
                    <Link href="/" onClick={closeReset}><Image src="/kosciol_logo.png" alt="logo kosciola" fill={true} objectFit='contain' className='align-left' ></Image></Link>
                    </div>
                    <h3 className='font-bold text-[30px] font-header2'>Adres</h3>
                    <p>Chłodna 9</p>
                    <p>00-891 Warszawa</p>
                    <h2 className='font-bold text-[30px] mt-[3vh] font-header2'>Kontakt</h2>
                    <p>parafianachlodnej@gmail.com</p>
                    <p>22 620 37 47</p>
                </div>
                <div className={`flex flex-col w-full md:w-[65%] text-white text-[35px] justify-center md:ml-[10%] ${menuElement == '' ? '' : 'hidden'} font-header2`}>
                    <Link href="/nabozenstwa" onClick={closeReset}>Msze Św. i nabożeństwa</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <a className='mt-[1vh] mb-[1vh] border-1 cursor-pointer' onClick={() => setElement('aktualnosci')}>Aktualności</a>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <a className='mt-[1vh] mb-[1vh] border-1 cursor-pointer' onClick={() => setElement('sakramenty')}>Sakramenty</a>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <a className='mt-[1vh] mb-[1vh] border-1 cursor-pointer' onClick={() => setElement('wspolnoty')}>Wspólnoty</a>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <a className='mt-[1vh] mb-[1vh] border-1 cursor-pointer' onClick={() => setElement('parafia')}>Parafia</a>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>

                <div className={`flex flex-col w-[65%] text-white text-[35px] justify-center md:ml-[10%] ${menuElement == 'aktualnosci' ? '' : 'hidden'} font-header2`}>
                    <p className='mb-[3vh] text-[25px] cursor-pointer' onClick={() => {setElement('')}}><i className='fa-solid fa-arrow-left mr-[0.5vw]'></i>Powrót</p>
                    <Link onClick={closeReset} href="/aktualnosci/ogloszenia">Ogłoszenia</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/aktualnosci/biuletyn">Biuletyn</Link>
                    {/* <hr className='mt-[1vh] mb-[1vh] border-1'/> */}
                    {/* <Link onClick={closeReset} href="/aktualnosci/wydarzenia">Wydarzenia</Link> */}
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    {/* <Link onClick={closeReset} href="/aktualnosci/ciekawostki">Ciekawostki z kościoła</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/> */}
                    <Link onClick={closeReset} href="/aktualnosci/kazania">Kazania Ojca Leszka</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>

                <div className={`flex flex-col w-[65%] text-white text-[35px] justify-center md:ml-[10%] ${menuElement == 'parafia' ? '' : 'hidden'} font-header2`}>
                    <p className='mb-[3vh] text-[25px] cursor-pointer' onClick={() => {setElement('')}}><i className='fa-solid fa-arrow-left mr-[0.5vw]'></i>Powrót</p>
                    <Link onClick={closeReset} href="/parafia/duszpasterze">Duszpasterze</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/parafia/historia" className='text-4'>Historia</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/parafia/kosciol">Kościół dzisiaj</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/parafia/teren">Teren parafii</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    {/* <Link onClick={closeReset} href="/parafia/ciekawostki">Ciekawostki w Parafii</Link> */}
                    {/* <hr className='mt-[1vh] mb-[1vh] border-1'/> */}
                    <Link onClick={closeReset} href="/parafia/kancelaria">Kancelaria</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    {/* <Link onClick={closeReset} href="/parafia/galeria">Galeria</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/> */}
                </div>

                <div className={`flex flex-col w-[65%] text-white text-[35px] justify-center md:ml-[10%] ${menuElement == 'sakramenty' ? '' : 'hidden'} font-header2`}>
                    <p className='mb-[3vh] text-[25px] cursor-pointer' onClick={() => {setElement('')}}><i className='fa-solid fa-arrow-left mr-[0.5vw]'></i>Powrót</p>
                    <Link onClick={closeReset} href="/sakramenty/chrzest" className='text-4'>Chrzest</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/sakramenty/pokuta">Pokuta</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/sakramenty/komunia">Eucharystia</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/sakramenty/bierzmowanie">Bierzmowanie</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/sakramenty/malzenstwo">Małżenstwo</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/sakramenty/namaszczenie">Namaszczenie Chorych</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/sakramenty/kaplanstwo">Kapłaństwo</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>

                <div className={`flex flex-col w-[65%] text-white text-[35px] justify-center md:ml-[10%] ${menuElement == 'wspolnoty' ? '' : 'hidden'} font-header2`}>
                    <p className='mb-[3vh] text-[25px] cursor-pointer' onClick={() => {setElement('')}}><i className='fa-solid fa-arrow-left mr-[0.5vw]'></i>Powrót</p>
                    <Link onClick={closeReset} href="/wspolnoty/schola" className='text-4'>Schola</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/wspolnoty/schola-dziecieca">Schola Rodzinna</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/wspolnoty/caritas">Caritas</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/wspolnoty/ministranci">Ministranci</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/wspolnoty/mloda-inteligencja">Klub Młodej Inteligencji</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link onClick={closeReset} href="/wspolnoty/rycerstwo-niepokalanej">Rycerstwo Niepokalanej</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Menu