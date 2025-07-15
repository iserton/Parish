// 'use client'
import React from 'react'
import Image from 'next/image'
// import { useState } from 'react'
// import { useEffect } from 'react'

const Episodes = async () => {
    const res = await fetch('https://parafia.bieda.it/api/kazania?populate=*', { next: { revalidate: 0 } });
    const data = res.ok && await res.json();
    // const [data, setData] = useState(null)

    // useEffect(() => {
    //     fetch('https://parafia.bieda.it/api/kazania?populate=*')
    //     .then(res => res.json())
    //     .then(data => {setData(data)})
    // }, [])

    console.log(data);
    let years = []
    if (data !== null && data.data) {
        console.log("checking")
        console.log(data)
        data.data.sort((a, b) => new Date(b.attributes.data) - new Date(a.attributes.data));
        years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
    }
    // const years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
    // const [currentYear, changeYear] = useState(new Date().getFullYear());
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    console.log(years);

    if (!data) return <>Problem</>
  return (

    <div id="first" className='w-full flex flex-col py-[10vh] bg-white'>

        <div className='flex flex-row w-full space-x-4 h-[5vh] pb-[5vh] items-center justify-center '>
            {years && years.map(item => (
                // eslint-disable-next-line react/jsx-key
                <button onClick={() => changeYear(item)} className={`p-4 ${item == currentYear ? 'bg-dark text-white border-2 border-dark' : 'bg-white text-black border-2 border-black'}`}>
                    {item}
                </button>
            ))}
            {/* <button className='bg-dark text-white p-4'>
                2023
            </button>
            <button className='border-1 p-4'>
                2022
            </button>
            <button className='border-1 p-4'>
                2021
            </button> */}
        </div>
        
        
        <div  className={`w-full flex flex-col items-center justify-center `}>
            {data !== null && data.data.map((item) => (
                <div key={item.id} className={`my-[5vh] w-4/5 flex flex-col md:flex-row ${item.attributes.data.split('-')[0] == currentYear ? '': 'hidden'} items-center`}>
                    <div className='flex flex-col h-full w-full md:w-1/2 justify-center items-start'>
                        <h2 className='text-[2.3vh] font-header2'>{item.attributes.data}</h2>
                        <h2 className='text-[4.5vh] font-header2'>{item.attributes.tytul}</h2>
                        <div className='flex md:hidden h-[40vh] w-full relative'>
                            <Image fill objectFit="cover" alt='zdjecie kazanie' src={'https://parafia.bieda.it' + item.attributes.zdjecie.data.attributes.url}></Image>
                        </div>
                        <p className='mt-[2vh] '>{item.attributes.opis}</p>
                        <button className='mt-[4vh] p-4 bg-dark text-white'>Obejrzyj</button>
                    </div>
                    <div className='hidden md:flex h-[50vh] w-1/2 relative'>
                        <Image fill objectFit="cover" alt='zdjecie kazanie' src={'https://parafia.bieda.it' + item.attributes.zdjecie.data.attributes.url}></Image>
                    </div>
                </div>
            
            ))}
        </div>
        
        
    </div>
  )
}

export default Episodes