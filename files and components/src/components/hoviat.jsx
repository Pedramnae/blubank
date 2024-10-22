import React from 'react'
import video from './../assets/videos/vid2.mp4'

function Hoviat() {
  return (
    <section className='w-full h-[100vh] flex justify-center bg-[#fbfafb]'>
        <div className='w-[80%] h-full flex flex-wrap'>
            <div className='w-full lg:w-1/2 h-1/2 lg:h-full boder'>
                <video autoPlay loop muted className='w-full h-full object-contain'>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>
            <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex items-center'>
                <article className='w-full h-fit flex flex-wrap  px-[20px] lg:px-[0px] lg:pe-[80px]'>
                    <h2 className='w-full h-fit py-[15px] text-[#3094ea] text-[35px] text-right font-yekanr font-bold'>شناسایی هویت</h2>
                    <p className='w-full h-fit py-[15px] font-yekanr text-[#828696] text-right leading-[35px]'>“اینجانب مهرداد اندامی با کد ملی ۱۲۳۴۵۶۷۸۹۰ درخواست بازکردن حساب در بلو را دارم.” یک ویدیو ۴۵ ثانیه‌ای با عبارت خواسته مشابه نمونه بالا ضبط و ارسال کنید.</p>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Hoviat