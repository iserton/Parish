// 'use client'
import React from 'react'
import Image from 'next/image'
// import { useState, useEffect } from 'react';

const Citations = async () => {
  const res = await fetch('https://twojabiblia.pl/wp-json/tbapi/v1/get_quote/MA==', { next: { revalidate: 0 } });
  const data = res.ok && await res.json();
  // const [activeIndex, setActiveIndex] = useState(1);
  // const [post, setPost] = useState(null);
  // const [post2, setPost2] = useState(null);
  // const [post3, setPost3] = useState(null);
  
  // const handleDotClick = (index) => {
  //   setActiveIndex(index);
  // };

  // function getRandomNumbers(min, max) {
  //   const randomNumbers = new Array(3);
  //   for (let i = 0; i < randomNumbers.length; i++) {
  //     randomNumbers[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
  //   return randomNumbers;
  // };

  // useEffect(() => {
  //   // const toGet = getRandomNumbers(1, 63);
  //   // const toAdd = []
  //   // console.log(toGet);
  //   fetch(`https://parafia.bieda.it/api/cytaty/0`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setPost({
  //       author:data.data.attributes.autor,
  //       text:data.data.attributes.tekst,
  //     })})

    // fetch(`https://parafia.bieda.it/api/cytaty/${toGet[1]}`)
    // .then(res => res.json())
    // .then(data => {
    //   setPost2({
    //     author:data.data.attributes.autor,
    //     text:data.data.attributes.tekst,
    //     id:2,
    //   })})

    // fetch(`https://parafia.bieda.it/api/cytaty/${toGet[2]}`)
    // .then(res => res.json())
    // .then(data => {
    //   setPost3({
    //     author:data.data.attributes.autor,
    //     text:data.data.attributes.tekst,
    //     id:3,
    //   })})

      // const intervalId = setInterval(() => {
      //   // Increment the active index or reset to the smallest value
      //   setActiveIndex((prevIndex) => (prevIndex % 3) + 1);
      // }, 9000);
    
      // Cleanup the interval when the component unmounts
      // return () => clearInterval(intervalId);
  
  // }, []);


  // useEffect()
  return (
    <div className="flex w-full py-[10vh] justify-center items-center relative flex flex-col">
        <Image src="/cytaty2.jpeg" alt="tlo kosciola" fill={true} objectFit='cover'/>
        {data.body_response ? (
          <div className={`border-[2px] h-auto w-[80%] md:w-[40%] z-10 flex flex-col justify-center items-center p-[5vh]`}>
            <div className='relative h-[3vh] w-[10%] mb-[3vh]'>
                <Image alt="ikonka cytat" src="/quotation-marks.png" fill={true} objectFit='contain'></Image>
            </div>
            <p className='text-white text-center text-[2.2vh]'>{data.body_response.content}</p>
            <div className='text-gold1 text-center mt-[2vh] text-[2vh]' dangerouslySetInnerHTML={{__html: data.body_response.siglum}}></div>
          </div>
        ) : null}

        {/* {post2 !== null ? (
          <div key={post2.id} className={`border-[2px] h-auto w-[80%] md:w-[40%] z-10 flex flex-col justify-center items-center p-[5vh] ${post2.id == activeIndex ? '' : 'hidden'}`}>
            <div className='relative h-[3vh] w-[10%] mb-[3vh]'>
                <Image alt="ikonka cytat" src="/quotation-marks.png" fill={true} objectFit='contain'></Image>
            </div>
            <p className='text-white text-center text-[2.2vh]'>{post2.text}</p>
            <p className='text-gold1 text-center mt-[2vh] text-[2vh]'>{post2.author}</p>
          </div>
        ) : null}

          {post3 !== null ? (
          <div key={post3.id} className={`border-[2px] h-auto w-[80%] md:w-[40%] z-10 flex flex-col justify-center items-center p-[5vh] ${post3.id == activeIndex ? '' : 'hidden'}`}>
            <div className='relative h-[3vh] w-[10%] mb-[3vh]'>
                <Image alt="ikonka cytat" src="/quotation-marks.png" fill={true} objectFit='contain'></Image>
            </div>
            <p className='text-white text-center text-[2.2vh]'>{post3.text}</p>
            <p className='text-gold1 text-center mt-[2vh] text-[2vh]'>{post3.author}</p>
          </div>
        ) : null} */}
      {/* <div className="flex items-center space-x-2 z-10 mt-[8vh]">
      {[1,2,3].map((index) => (
        <div
          key={index}
          className={`w-[2vh] h-[2vh] rounded-full cursor-pointer ${
            index === activeIndex
              ? 'bg-gold1' // Active dot is gold background
              : 'border border-gold1' // Inactive dots have gold border
          }`}
          onClick={() => handleDotClick(index)}
        ></div>
      ))}
    </div> */}
    </div> 
  )
}

export default Citations