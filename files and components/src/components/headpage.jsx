import React from 'react'
import bigbanner from './../assets/imgs/bigbanner.jpg'
import smallbanner from './../assets/imgs/smallbanner.jpg'

function Headpage() {
  return (
    <section className='w-full h-[100vh] sm:hidden md:flex flex items-center justify-center'>
        <figure className='hidden md:flex md:w-[690px] lg:w-[930px] xl:w-[1150px] md:h-[270px] lg:h-[370px] xl:h-[450px] overflow-hidden'>
            <img loading='lazy' className='w-full h-full object-cover rounded-[35px] ' src={bigbanner} alt="blubank" />
        </figure>
        <figure className='w-[90%] h-[70%] mt-[50px] sm:hidden overflow-hidden '>
            <img loading='lazy' className='w-full rounded-[35px]  h-full object-cover' src={smallbanner} alt="blubank" />
        </figure>
    </section>
  )
}

export default Headpage