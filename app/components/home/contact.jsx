import React from 'react'

const Contact = () => {
  return (
    <>
        

        <div className='w-full h-[70vh] px-[5vw] my-[5vh]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.3313466167734!2d20.992228354675344!3d52.238162823798994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc865a66dd77%3A0x787bfcd0383976fd!2sRoman%20Catholic%20Parish%20of%20St.%20Andrew%20the%20Apostle!5e0!3m2!1sen!2spl!4v1700818752335!5m2!1sen!2spl" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='w-full  px-[5vw] my-[5vh] grid grid-cols-1 md:grid-cols-3 md:justify-items-center'>
            <div className='flex flex-col h-full mt-[2vh] md:mt-0'>
                <i className='fa-solid fa-envelope text-[4.5vh]'></i>
                <h3 className='mt-[2vh] text-[4.5vh] font-header2'>Email</h3>
                <p className='mt-[1vh] text-black text-[1.7vh]'>Zachecamy do kontaktu mailowego</p>
                <a className='mt-[1vh] text-black text-[1.7vh]'>parafianachlodnej@gmail.com</a>
            </div>
            <div className='flex flex-col h-full mt-[4vh] md:mt-0'>
                <i className='fa-solid fa-phone text-[4.5vh]'></i>
                <h3 className='mt-[2vh] text-[4.5vh] font-header2'>Telefon</h3>
                <p className='mt-[1vh] text-black text-[1.7vh]'>Zachecamy do kontaktu mailowego</p>
                <a className='mt-[1vh] text-black text-[1.7vh]'>22 620 37 47</a>
            </div>
            <div className='flex flex-col h-full mt-[4vh] md:mt-0'>
                <i className='fa-solid fa-location-dot text-[4.5vh]'></i>
                <h3 className='mt-[2vh] text-[4.5vh] font-header2'>Adres</h3>
                <p className='mt-[1vh] text-black text-[1.7vh]'>ul. Chłodna 9</p>
                <p className='mt-[1vh] text-black text-[1.7vh]'>00-891 Warszawa</p>
            </div>
        </div>
        

    </>
  )
}

export default Contact