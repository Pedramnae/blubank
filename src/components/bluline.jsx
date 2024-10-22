import React from 'react'
import bluline from './../assets/imgs/bluline.png'

function Bluline() {
    return (
        <section className='w-full h-[100vh] flex flex-wrap justify-center bg-[#3094ea] relative z-[5]'>
            <div className='w-full lg:w-[42%] h-1/2 lg:h-full flex flex-wrap  content-center justify-center'>
                <h2 className='w-full px-[20px] md:px-[0px] md:w-[70%] lg:w-full h-fit py-[10px] flex  text-right justify-end font-yekanr font-bold text-white text-[35px]'>
                    بلو لاین، همیشه به وقت همه جا
                </h2>
                <p className='w-full px-[20px] md:px-[0px] md:w-[70%] lg:w-full h-fit py-[10px] font-yekanr text-right text-white flex justify-end '>
                    اگر سوالی دارید، در چت اپلیکیشن بلو پیام صوتی و یا متنی بگذارید، یا با شماره ۹۱۰۳۶۰۶۰-۰۲۱ تماس بگیرید.
                    کارشناسان بلولاین همیشه آماده‌ی پاسخ‌گویی و حل مشکلات احتمالی شما هستند.
                </p>
            </div>
            <div className='w-full lg:w-[42%] h-1/2 lg:h-full flex '>
                <figure className='w-full h-full'>
                    <img loading='lazy' className='w-full h-full object-contain' src={bluline} alt="blubank" />
                </figure>
            </div>
        </section>
    )
}

export default Bluline