import React from 'react'
import { FaQuestion } from "react-icons/fa6";

function Soalat() {

    const accordion = (e) => {
        let stat = e.currentTarget.getAttribute('data-stat')
        let acc = e.currentTarget.nextElementSibling
        let icon = e.currentTarget.children[0].children[0]
        let question = e.currentTarget.children[1]
        if (stat == 'close') {
            e.currentTarget.setAttribute('data-stat', 'open')
            acc.classList.add('flex')
            acc.classList.remove('hidden')
            icon.classList.add('bg-white')
            icon.classList.remove('bg-[#3094ea]')
            icon.classList.add('text-[#3094ea]')
            icon.classList.add('[border:_1px_solid_#3094ea]')
            icon.classList.remove('text-white')
            icon.classList.add('border-[#3094ea]')
            icon.classList.remove('border-none')
            question.classList.add('text-[#3094ea]')
            question.classList.remove('text-[#828696]')
        } else {
            e.currentTarget.setAttribute('data-stat', 'close')
            acc.classList.remove('flex')
            acc.classList.add('hidden')
            icon.classList.remove('bg-white')
            icon.classList.add('bg-[#3094ea]')
            icon.classList.remove('text-[#3094ea]')
            icon.classList.remove('[border:_1px_solid_#3094ea]')
            icon.classList.add('text-white')
            icon.classList.remove('border-[#3094ea]')
            icon.classList.add('border-none')
            question.classList.remove('text-[#3094ea]')
            question.classList.add('text-[#828696]')
        }
    }

    return (
        <section className='w-full h-fit flex flex-wrap bg-[#fbfafb] py-[40px]'>
            <h2 className='w-full font-yekanr font-bold text-[35px] text-[#3094ea] h-fit py-[40px]  flex justify-center'>سوالات متداول </h2>
            <div className='w-full h-fit flex flex-wrap justify-center'>
                <div className='w-[90%] md:w-[60%] h-fit py-[15px] flex flex-wrap [border-bottom:1px_solid_#8286969d]'>
                    <div data-stat='close' onClick={accordion} className='w-full h-fit flex flex-wrap items-center justify-between cursor-pointer'>
                        <div className='w-[20%] h-fit flex justify-center'>
                            <span className='w-[42px] h-[42px] duration-[0.4s] rounded-[30px] bg-[#3094ea] flex items-center justify-center text-white'><FaQuestion /></span>
                        </div>
                        <p className='w-[80%]  text-right h-fit py-[10px] duration-[0.4s] font-yekanr text-[#828696] text-[18px] '>چگونه میتوانم حساب باز کنم؟</p>
                    </div>
                    <p className='w-full h-fit py-[10px] text-[14px] justify-end hidden text-right font-yekanr text-[#828696]'>
                        مراحل بازکردن حساب : ١.دانلود و نصب اپلیکیشن بلو ٢.داشتن یک خط تلفن همراه فعال که به نام خودتان است ٣.همراه داشتن اصل کارت ملی (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور کارت هوشمند) برای ارسال تصاویر مربوطه
                    </p>
                </div>
                <div className='w-[90%] md:w-[60%] h-fit py-[15px]  flex flex-wrap [border-bottom:1px_solid_#8286969d]'>
                    <div data-stat='close' onClick={accordion} className='w-full h-fit flex flex-wrap items-center justify-between cursor-pointer'>
                        <div className='w-[20%] h-fit flex justify-center'>
                            <span className='w-[42px] h-[42px] duration-[0.4s] rounded-[30px] bg-[#3094ea] flex items-center justify-center text-white'><FaQuestion /></span>
                        </div>
                        <p className='w-[80%]  text-right h-fit py-[10px] duration-[0.4s] font-yekanr text-[#828696] text-[18px] '>برای باز کردن حساب چه مدارکی لازم است؟</p>
                    </div>
                    <p className='w-full h-fit py-[10px] text-[14px] justify-end hidden text-right font-yekanr text-[#828696]'>
                        اصل کارت ملی (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور کارت هوشمند) برای ارسال تصاویر مربوطه و داشتن یک خط تلفن همراه فعال که به نام خودتان است.
                    </p>
                </div>
                <div className='w-[90%] md:w-[60%] h-fit py-[15px]  flex flex-wrap [border-bottom:1px_solid_#8286969d]'>
                    <div data-stat='close' onClick={accordion} className='w-full h-fit flex flex-wrap items-center justify-between cursor-pointer'>
                        <div className='w-[20%] h-fit flex justify-center'>
                            <span className='w-[42px] h-[42px] duration-[0.4s] rounded-[30px] bg-[#3094ea] flex items-center justify-center text-white'><FaQuestion /></span>
                        </div>
                        <p className='w-[80%]  text-right h-fit py-[10px] duration-[0.4s] font-yekanr text-[#828696] text-[18px] '>من کارت ملی هوشمند دریافت نکرده ام آیا میتوانم حساب باز کنم؟</p>
                    </div>
                    <p className='w-full h-fit py-[10px] text-[14px] justify-end hidden text-right font-yekanr text-[#828696]'>
                        بله، اگر درخواست کارت ملی هوشمند را ثبت کردید، از راه ثبت کد رهگیری نوشته شده روی رسید ثبت‌نام کارت ملی هوشمند، امکان بازکردن حساب را دارید.
                    </p>
                </div>
                <div className='w-[90%] md:w-[60%] h-fit py-[15px]  flex flex-wrap [border-bottom:1px_solid_#8286969d]'>
                    <div data-stat='close' onClick={accordion} className='w-full h-fit flex flex-wrap items-center justify-between cursor-pointer'>
                        <div className='w-[20%] h-fit flex justify-center'>
                            <span className='w-[42px] h-[42px] duration-[0.4s] rounded-[30px] bg-[#3094ea] flex items-center justify-center text-white'><FaQuestion /></span>
                        </div>
                        <p className='w-[80%]  text-right h-fit py-[10px] duration-[0.4s] font-yekanr text-[#828696] text-[18px] '>من کارت ملی هوشمند دریافت نکرده ام و برگه رسید کارت ملی هوشند را گم کرده ام، چطور میتوانم حساب باز کنم؟</p>
                    </div>
                    <p className='w-full h-fit py-[10px] text-[14px] justify-end hidden text-right font-yekanr text-[#828696]'>
                        در وب‌سایت سازمان ثبت و احوال کد رهگیری کارت ملی خود را پیداکنید و فرآیند بازکردن حساب را انجام دهید.
                    </p>
                </div>
                <div className='w-[90%] md:w-[60%] h-fit py-[15px]  flex flex-wrap [border-bottom:1px_solid_#8286969d]'>
                    <div data-stat='close' onClick={accordion} className='w-full h-fit flex flex-wrap items-center justify-between cursor-pointer'>
                        <div className='w-[20%] h-fit flex justify-center'>
                            <span className='w-[42px] h-[42px] duration-[0.4s] rounded-[30px] bg-[#3094ea] flex items-center justify-center text-white'><FaQuestion /></span>
                        </div>
                        <p className='w-[80%]  text-right h-fit py-[10px] duration-[0.4s] font-yekanr text-[#828696] text-[18px] '>مراحل باز کردن حساب چقدر زمان میبرد؟</p>
                    </div>
                    <p className='w-full h-fit py-[10px] text-[14px] justify-end hidden text-right font-yekanr text-[#828696]'>
                        باز کردن حساب در کمتر از ۷ دقیقه، بررسی مدارک، شناسایی هویت و فعال شدن حساب(در صورت تایید استعلام بانک مرکزی) حداکثر تا ۳ روز انجام می‌شود.
                    </p>
                </div>
                <div className='w-[90%] md:w-[60%] h-fit py-[15px]  flex flex-wrap '>
                    <span className='w-fit h-fit py-[10px] hover:text-[#305fea] text-[18px] cursor-pointer flex text-right font-yekanr text-[#3094ea]'>
                        ... سوالات بیشتر
                    </span>
                </div>
            </div>
            <div className='w-full h-fit '>
                <h3 className='w-full h-fit py-[15px] font-yekanr font-bold text-[#828696] text-[28px] md:text-[35px] flex justify-center'>خط ارتباطی برای پاسخ به سوالات شما</h3>
                <div className='w-full h-fit py-[10px] flex items-center justify-center'>
                    <button className='w-fit h-fit font-yekanr text-white bg-[#3094ea] hover:text-[#305fea] px-[25px] py-[10px] text-[18px] rounded-[40px]'>بلولاین</button>
                </div>
            </div>
        </section>
    )
}

export default Soalat