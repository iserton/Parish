// 'use client'
import React from 'react'
// import { useEffect, useState } from 'react'
import Image from 'next/image'

const Files = async () => {
    const res = await fetch('https://parafia.bieda.it/api/biuletyny?populate=*', { next: { revalidate: 0 } })
    const data = res.ok && await res.json()

    console.log(data);
    let years = []
    let yearsData = []
    if (data && data.data) {
        data.data.sort((a, b) => new Date(b.attributes.data) - new Date(a.attributes.data));
        years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
        yearsData = years.map(year => ({year: year, data: data.data.filter((item) => item.attributes.data.startsWith(year))}));
        console.log(years.map(year => (yearsData.find(y => y.year == year).data)))
    }
    const currentYear = new Date().getFullYear();
    // const years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
    // const [currentYear, changeYear] = useState(new Date().getFullYear());
    // // console.log(currentYear);
    // console.log(years);
    // console.log(yearsData);
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
                    
                </div>
                {years && years.map(item => (
                    <div key={item.id} className={` w-full grid grid-cols-1 md:grid-cols-3 content-center justify-items-center ${item == currentYear ? '' : 'hidden'} px-[5vw]`}>
                        {yearsData && yearsData.find(y => y.year == item).data.map(entry => (
                            
                                <div key={entry.id} className={`my-[5vh] w-4/5 md:w-[17vw] h-[50vh] relative ${entry.attributes.data.split('-')[0] == currentYear ? '': 'hidden'}`}>
                                    <a key={entry.id} href={`https://parafia.bieda.it` + entry.attributes.plik.data.attributes.url} target="_blank">
                                        <Image fill objectFit="cover" alt='zdjecie kazanie' src={'https://parafia.bieda.it' + entry.attributes.tlo.data.attributes.url}></Image>
                                        <p className='absolute bottom-[10%] left-[17%] text-white text-[4.5vh] font-header3'>{entry.attributes.data}</p>
                                    </a>
                                </div>
                            
                        ))}
                    </div>
                ))}
        

        
        
        
    </div>
  )
}

export default Files