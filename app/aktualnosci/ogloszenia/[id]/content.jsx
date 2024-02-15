'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { marked } from 'marked'
import ReactMarkdown from 'react-markdown';

const Content = ({id}) => {
    // const router = useRouter()
    // const id = router.query.id
    console.log(id)
    // const [data, setData] = useState(null);
    const [data, setData] = useState(null)

    const CustomParagraph = ({ children }) => (
        <p className="my-4">{children}</p>
      );

    useEffect(() => {
        fetch('https://parafia.bieda.it/api/ogloszenia/' + id +'?populate=*')
        .then(res => res.json())
        .then(data => {setData(data)})
    },[])

    let htmlContent = null
    if (data != null){
        htmlContent = marked.parse(data.data.attributes.tresc)
    }

    if (data == null){
        return (
            <div>
                Problem
            </div>
        )
    }
    else {
        console.log(data);
        return (
            <div className='flex flex-col md:flex-row px-[5vw] md:px-[10vw] bg-white pt-[20vh] md:pt-[25vh] pb-[10vh]'>
                
                <div className='w-full md:w-1/2 md:pr-[5vw]'>
                    <h1 className='text-[5.5vh] font-header2 text-center mb-[2vh]'>{data.data.attributes.tytul}</h1>
                    <div className='flex md:hidden  w-full h-[30vh] mb-[2vh] relative'>
                        <Image fill alt="tlo ogloszenia" objectFit="cover" src={'https://parafia.bieda.it' + data.data.attributes.tlo.data.attributes.url}/>
                    </div>
                    {/* <textarea className='w-full mt-[5vh]'>{data.data.attributes.tresc}</textarea> */}
                    {/* <div className="markdown" dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
                    <ReactMarkdown components={{ p: CustomParagraph }}>{data.data.attributes.tresc}</ReactMarkdown>
                </div>
                <div className='hidden md:flex w-1/2 pl-[5vw] min-h-[50vh] relative'>
                    <Image fill alt="tlo ogloszenia" objectFit="cover" src={'https://parafia.bieda.it' + data.data.attributes.tlo.data.attributes.url}/>
                </div>
            </div>
        )
    }
}

export default Content