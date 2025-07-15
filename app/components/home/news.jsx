// 'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { useState, useEffect } from 'react'

const News = async () => {

    // const [news, setNews] = useState(null);
    // const [data, setData] = useState(null)
    // const [img1, setImg1] = useState(null)
    // const [img2, setImg2] = useState(null)
    // const [img3, setImg3] = useState(null)

    let img1 = null, img2 = null, img3 = null;

    function loadImages(id1, id2, id3) {
        fetch(`https://parafia.bieda.it/api/ogloszenia/${id1}?populate=*`, { next: { revalidate: 0 } })
        .then(res => res.json())
        .then(data => img1 = 'https://parafia.bieda.it' + data.data.attributes.tlo.data.attributes.url)

        fetch(`https://parafia.bieda.it/api/ogloszenia/${id2}?populate=*`, { next: { revalidate: 0 } })
        .then(res => res.json()) 
        .then(data => img2 = 'https://parafia.bieda.it' + data.data.attributes.tlo.data.attributes.url)

        fetch(`https://parafia.bieda.it/api/ogloszenia/${id3}?populate=*`, { next: { revalidate: 0 } })
        .then(res => res.json()) 
        .then(data => img3 = 'https://parafia.bieda.it' + data.data.attributes.tlo.data.attributes.url)

        console.log('laduje zdjecia')
    }

    const res = await fetch('https://parafia.bieda.it/api/ogloszenia-last-two/', { next: { revalidate: 0 } })
    const data = res.ok && await res.json()
    const news = data ? [data[0], data[1], data[2]] : null;
    data ?? loadImages(data[0].id, data[1].id, data[2].id);
    
    // useEffect(() => {
    //     fetch('https://parafia.bieda.it/api/ogloszenia-last-two/')
    //     .then(res => res.json())
    //     .then(data => {
    //         setNews([data[0], data[1], data[2]])
    //         return data
    //     })
    //     .then(data => {
    //         loadImages(data[0].id, data[1].id, data[2].id)})
    // }, []);

    if (!data) return <>Problem</>
  return (
    <div className='flex flex-col w-full py-[10vh] items-center justify-center bg-white text-black'>
        <h2 className='text-[5.5vh] font-header2 mb-[3vh]'>Aktualności</h2>
        
            {news !== null ? (
            <div className='flex flex-col '>
                <div className='flex flex-col md:flex-row w-full items-center justify-center'>
                
                <div className='w-3/4 md:w-[25%] px-[0.5vw] py-[1vh] mx-[1vw] h-full flex flex-col justify-center hover:bg-slate-200 mt-[3vh] md:mt-0'>
                    <h3 className='font-bold text-[30px] mb-[1vh] text-center font-header2'>{news[0].tytul}</h3>
                    <div className='w-full h-[25vh] md:h-[30vh] relative '>
                    {img1 !== null ? (
                            <Link href={`/aktualnosci/ogloszenia/${news[0].id}`}><Image alt="tlo aktualnosci" fill objectFit='cover' src={img1} /></Link>
                        ) : null}
                    </div>
                    <p className='mt-[2vh] text-[1.8vh]'>{news[0].skrot_tresci}</p>
                    <div className='flex flex-row justify-between mt-[2vh] text-gold2'>
                    <Link href={`/aktualnosci/ogloszenia/${news[0].id}`}>Czytaj więcej</Link>
                    <p>{news[0].data}</p>
                    </div>
                </div>
                <div className='w-3/4 md:w-[25%] px-[0.5vw] hover:bg-slate-200 mx-[1vw] py-[1vh] h-full flex flex-col justify-center mt-[3vh] md:mt-0'>
                    <h3 className='font-bold text-[30px] mb-[1vh] text-center font-header2'>{news[1].tytul}</h3>
                    <div className='w-full h-[25vh] md:h-[30vh] relative '>
                    {img2 !== null ? (
                            <Link href={`/aktualnosci/ogloszenia/${news[1].id}`}><Image alt="tlo aktualnosci" fill objectFit='cover' src={img2} /></Link>
                        ) : null}
                    </div>
                    <p className='mt-[2vh] text-[1.8vh]'>{news[1].skrot_tresci}</p>
                    <div className='flex flex-row justify-between mt-[2vh] text-gold2'>
                    <Link href={`/aktualnosci/ogloszenia/${news[1].id}`}>Czytaj więcej</Link>
                    <p>{news[1].data}</p>
                    </div>
                </div>
                <div className='w-3/4 md:w-[25%] px-[0.5vw] mx-[1vw] py-[1vh] h-full flex flex-col justify-center hover:bg-slate-200 mt-[3vh] md:mt-0'>
                    <h3 className='font-bold text-[30px] mb-[1vh] text-center font-header2'>{news[2].tytul}</h3>
                    <div className='w-full h-[25vh] md:h-[30vh] relative '>
                    {img3 !== null ? (
                            <Link href={`/aktualnosci/ogloszenia/${news[2].id}`}><Image alt="tlo aktualnosci" fill objectFit='cover' src={img3} /></Link>
                        ) : null}
                    </div>
                    <p className='mt-[2vh] text-[1.8vh]'>{news[2].skrot_tresci}</p>
                    <div className='flex flex-row justify-between mt-[2vh] text-gold2'>
                    <Link href={`/aktualnosci/ogloszenia/${news[2].id}`}>Czytaj więcej</Link>
                    <p>{news[2].data}</p>
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-row h-[30vh] w-[60vw] my-[2vh]'>
                <div className='w-[55%] px-[2vw] py-[1vh] h-full flex flex-col justify-center'>
                    <h3 className='font-bold text-[25px] mb-[1vh]'>{news[1].tytul}</h3>
                    <p>{news[1].skrot_tresci}</p>
                    <div className='flex flex-row justify-between mt-[2vh] text-gold2'>
                    <Link href={`/aktualnosci/ogloszenia/${news[1].id}`}>Czytaj więcej</Link>
                    <p>{news[1].data}</p>
                    </div>
                </div>
                <div className='w-[45%] h-full relative '>
                    {img2 !== null ? (
                        <Image alt="tlo aktualnosci" fill objectFit='cover' src={img2} />
                    ) : null}
                </div>
            </div> */}
            </div>
            ) : null}
        
        <Link href="/aktualnosci/ogloszenia" className='mt-[5vh]'>
            <button className='bg-dark text-white text-[2.3vh] p-4'>Zobacz więcej</button>
        </Link>
    </div>
  )
}

export default News