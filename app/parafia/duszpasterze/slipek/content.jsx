import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <div className='flex flex-row w-full px-[5vw] pt-[18vh] md:pt-[25vh] pb-[10vh] bg-white'>
        
        <div className='w-full md:w-1/2 flex flex-col text-black md:mr-[2vw] justify-center'>
          <h2 className='text-[4.5vh] font-header2'>Ks. prałat dr Leszek Slipek</h2>
          <div className='flex md:hidden w-full h-[40vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ks_proboszcz3.jpeg" fill objectFit='cover'/>
          </div>
          <p className='text-[1.7vh] mt-[2vh] md:mt-[5vh]'>Urodził się 10.07.1953 w Legnicy. Ukończył Wyższe Metropolitalne Seminarium Duchowne w Warszawie
i w 1978 roku z rąk Kard. Stefana Wyszyńskiego otrzymał święcenia kapłańskie. Przez dwa lata był
wikariuszem w parafii Zalesie Dolne. W roku 1980 wyjechał na dalsze studia do Rzymu W 1982 roku
uzyskał doktorat z teologii duchowości na Uniwersytecie Gregoriańskim. Po powrocie ze studiów
wykładał na Papieskim Wydziale Teologicznym.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Przez cztery lata pełnił funkcję ojca duchownego w Wyższym Seminarium Duchownym w Warszawie. W
roku 1987 został proboszczem parafii o wdzięcznej nazwie Jasieniec. Następnie przez dziesięć lat był
proboszczem parafii św. Krzysztofa w Podkowie Leśnej.</p>
          {/* <p className='text-[1.7vh] mt-[2vh]'>25 listopada 2001 roku opuścił Miasto Ogród, ponieważ został mianowany przez Kard. Józefa Glempa
proboszczem parafii św. Andrzeja Apostoła w Warszawie. Jako proboszcz parafii odpowiedzialny jest za
posługę duszpasterską, wykonując zadania nauczania, uświecania i zarządzania.</p> */}
          <p className='text-[1.7vh] mt-[2vh]'>W roku 2001 kardynał Józef Glemp zlecił księdzu Leszkowi Slipkowi zarząd nad wiernymi parafii Świętego Andrzeja Apostoła w tym wszystkim, co się odnosi do głoszenia Słowa Bożego, administrowania sakramentów świętych, odprawiania nabożeństw, jako i w rzeczach z tymi trzema obowiązkami zwykle się łączących. Biskup polecił mu troszczyć się o zbawienie dusz pieczy jego powierzonych przy użyciu środków przez Chrystusa i Kościół ustanowionych.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Proboszcz z powodu znacznej liczby parafian sam uczynić zadość obowiązkom
swoim nie może, dlatego ma pomocników: dwóch wikariuszy i jednego
rezydenta (to znaczy tego, który w parafii przemieszkuje).</p>
          <p className='text-[1.7vh] mt-[2vh]'>Zarządzająca domem (plebanią), czyli tak zwana gospodyni, zgodnie z
konstytucją Benedykta XIV i uchwałami synodów jest niewiastą o
wypróbowanej uczciwości i „w podeszłym wieku, to jest powyżej 40 lat”.</p>
        </div>
        <div className='hidden md:flex w-1/2 h-[50vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ks_proboszcz3.jpeg" fill objectFit='cover'/>
        </div>
    </div>
  )
}

export default Content