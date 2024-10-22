import React from 'react'
import cart from './../assets/imgs/cart.png'

function Ragbandicart() {
    return (
        <section className='w-full h-[80vh] flex  justify-center'>
            <div className='w-[80%] h-full flex flex-wrap  #3094ea relative'>
                <div className='w-full z-[4] lg:w-[45%] h-full absolute   top-0 left-0 lg:relative'>
                    <figure className='w-full h-full animate-updown relative z-[2]'>
                        <img loading='lazy' className='w-full h-full object-contain' src={cart} alt="credit card" />
                    </figure>
                </div>
                <span className='absolute top-[150px] left-[-250px] bg-[#f8f8f8] w-[750px] h-[750px] rounded-[450px]'></span>
                <div className='w-full lg:w-[55%] h-full flex flex-wrap  content-center relative z-[5]'>
                    <article className='w-full h-fit  pe-[90px] flex flex-wrap content-center'>
                        <h2 className='w-full h-fit  flex justify-end py-[15px] font-yekanr font-bold text-[#3094ea] text-[35px]'>... بلو فقط آبی نیست</h2>
                        <div className='w-full h-fit flex flex-wrap justify-end items-start '>
                            <p className='w-[80%] text-right h-fit py-[10px]  font-yekanr text-[#828696]'>عضو سامانه شتاب بانک مرکزی</p>
                            <span className='w-fit h-fit px-[10px]  py-[20px]'>
                                <div className='w-[16px] h-[4px] bg-[#3094ea]'></div>
                            </span>
                        </div>
                        <div className='w-full h-fit flex flex-wrap justify-end items-start '>
                            <p className='w-[80%] text-right h-fit py-[10px]  font-yekanr text-[#828696]'>ارسال رایگان کارت بانکی به آدرس دلخواه شما در کمتر از ۵ روز کاری در تهران و ۱۰ روز کاری در سایر نقاط کشور</p>
                            <span className='w-fit h-fit px-[10px]  py-[20px]'>
                                <div className='w-[16px] h-[4px] bg-[#3094ea]'></div>
                            </span>
                        </div>
                        <div className='w-full h-fit flex flex-wrap justify-end items-start '>
                            <p className='w-[80%] text-right h-fit py-[10px]  font-yekanr text-[#828696]'>دریافت و فعال‌سازی آنلاین رمزهای کارت از طریق اپلیکیشن بلو</p>
                            <span className='w-fit h-fit px-[10px]  py-[20px]'>
                                <div className='w-[16px] h-[4px] bg-[#3094ea]'></div>
                            </span>
                        </div>
                        <div className='w-full h-fit flex flex-wrap justify-end items-start '>
                            <p className='w-[80%] text-right h-fit py-[10px]  font-yekanr text-[#828696]'>امکان مسدودکردن کارت از طریق اپلیکیشن بلو</p>
                            <span className='w-fit h-fit px-[10px]  py-[20px]'>
                                <div className='w-[16px] h-[4px] bg-[#3094ea]'></div>
                            </span>
                        </div>
                    </article>
                    <div className='w-full h-fit flex items-center  py-[30px]'>
                        <span className='w-[12px] h-[12px] rounded-[6px] bg-[#ff0000] mx-[5px]'></span>
                        <span className='w-[12px] h-[12px] rounded-[6px] bg-[#0fa581] mx-[5px]'></span>
                        <span className='w-[12px] h-[12px] rounded-[6px] bg-[#3094ea] mx-[5px]'></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ragbandicart