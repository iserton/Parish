// 'use client'
import React from 'react'
// import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const News = async () => {
    const res = await fetch('https://parafia.bieda.it/api/ciekawostki?populate=*', { next: { revalidate: 0 } })
    const data = res.ok && await res.json()
    // const [data, setData] = useState(null)

    // useEffect(() => {
        
    //     .then(res => res.json())
    //     .then(data => {setData(data)})
    // }, [])

    console.log(data);
    let years = []
    let yearsData = []
    if (data && data.data) {
        data.data.sort((a, b) => new Date(b.attributes.data) - new Date(a.attributes.data));
        years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
        yearsData = years.map(year => ({year: year, data: data.data.filter((item) => item.attributes.data.startsWith(year))}));
        console.log(years.map(year => (yearsData.find(y => y.year == year).data)))
    }
    // const years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
    // const [currentYear, changeYear] = useState(new Date().getFullYear());
    const currentYear = new Date().getFullYear();
    // console.log(currentYear);
    console.log(years);
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
                            
                                <div key={entry.id} className={`flex flex-col shadow-xl my-[5vh] w-4/5 md:w-[17vw] relative ${entry.attributes.data.split('-')[0] == currentYear ? '': 'hidden'}`}>
                                    <Link className='w-full h-full' href={`/aktualnosci/ciekawostki/${entry.id}`}>
                                    <div className='w-full h-[25vh] relative'>
                                        <Image fill objectFit="cover" alt='zdjecie kazanie' src={'https://parafia.bieda.it' + entry.attributes.tlo.data.attributes.url}></Image>
                                    </div>
                                    
                                    <div className='px-[1vw] w-full py-[2vh] flex flex-col justify-center'> 
                                    
                                        <p className='px-[0.3vw] uppercase bg-red-600 bg-opacity-40 text-red-500 inline-block'>Ciekawostki</p>
                                        <h3 className='mt-[1vh] font-header2 text-[30px]'>{entry.attributes.tytul}</h3>
                                        <hr className='w-[40%] border-2 my-[1vh]'></hr>
                                        <p className='font-header2 text-[25px]'>{entry.attributes.data}</p>
                                    
                                    </div>
                                    </Link>
                                </div>
                            
                        ))}
                    </div>
                ))}

        
       

        
    </div>
  )
}

export default News