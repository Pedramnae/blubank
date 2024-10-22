import React from 'react'
import android from './../assets/imgs/android.svg'
import web from './../assets/imgs/web.svg'
import sibapp from './../assets/imgs/sibapp.svg'
import sibche from './../assets/imgs/sibche.svg'
import iapps from './../assets/imgs/iapps.png'
import anar from './../assets/imgs/anar.svg'
import bazar from './../assets/imgs/bazar.svg'
import myket from './../assets/imgs/myket.svg'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className='w-full h-[170vh] md:h-[100vh] flex flex-wrap bg-[#3094ea]'>
            <div className='w-full h-[88%] md:h-[70%] flex flex-wrap  justify-center'>
                <div className='w-[80%] md:w-[20%] h-[45%]  md:h-full  flex flex-wrap justify-center md:justify-start'>
                    <ul className='w-[160px]  justify-center  h-full flex flex-wrap content-center'>
                        <li className='w-[95%] h-fit py-[8px] '>
                            <figure className='w-full h-full'>
                                <img loading='lazy' className='w-full h-full object-contain cursor-pointer' src={android} alt="android" />
                            </figure>
                        </li>
                        <li className='w-full h-fit py-[8px] '>
                            <figure className='w-full h-full'>
                                <img loading='lazy' className='w-full h-full object-contain cursor-pointer' src={web} alt="web" />
                            </figure>
                        </li>
                        <li className='w-[95%] h-fit py-[8px] '>
                            <figure className='w-full h-full'>
                                <img loading='lazy' className='w-full h-full object-contain cursor-pointer' src={sibapp} alt="sibapp" />
                            </figure>
                        </li>
                        <li className='w-[95%] h-fit py-[8px] '>
                            <figure className='w-full h-full'>
                                <img loading='lazy' className='w-full h-full object-contain cursor-pointer' src={sibche} alt="sibche" />
                            </figure>
                        </li>
                        <li className='w-[95%] h-fit py-[8px] '>
                            <figure className='w-full h-full'>
                                <img loading='lazy' className='w-full h-full object-contain cursor-pointer' src={iapps} alt="iapps" />
                            </figure>
                        </li>
                        <li className='w-[95%] h-fit py-[8px] '>
                            <figure className='w-full h-full'>
                                <img loading='lazy' className='w-full h-full object-contain cursor-pointer' src={anar} alt="anar" />
                            </figure>
                        </li>
                        <li className='w-[95%] h-fit py-[8px] '>
                            <figure className='w-full h-full'>
                                <img loading='lazy' className='w-full h-full object-contain cursor-pointer' src={bazar} alt="bazar" />
                            </figure>
                        </li>
                        <li className='w-[95%] h-fit py-[8px] '>
                            <figure className='w-full h-full'>
                                <img loading='lazy' className='w-full h-full object-contain cursor-pointer' src={myket} alt="myket" />
                            </figure>
                        </li>
                    </ul>
                </div>
                <div className='w-[80%] h-[10%]  justify-center  flex md:hidden flex-wrap items-center'>
                    <span className='w-[50px] h-[50px] flex items-center justify-center rounded-[50px] [border:1px_solid_white] cursor-pointer me-[10px] text-white'><FaTwitter /></span>
                    <span className='w-[50px] h-[50px] flex items-center justify-center rounded-[50px] [border:1px_solid_white] cursor-pointer me-[10px] text-white'><FaInstagram /></span>
                    <span className='w-[50px] h-[50px] flex items-center justify-center rounded-[50px] [border:1px_solid_white] cursor-pointer  text-white'><FaLinkedin /></span>
                </div>
                <div className='w-[80%] md:w-[60%]  h-[45%] md:h-full flex flex-wrap content-center '>
                    <h2 className='w-full h-fit text-white font-yekanr font-bold text-[28px]  text-center md:text-right py-[5px]'>امنیت حساب ها در بلو</h2>
                    <h4 className='w-full h-fit py-[12px]  text-center md:text-right font-yekanr font-bold text-white'>نحوه حفاظت از سرمایه مشتریان</h4>
                    <p className='w-full h-fit py-[12px]  text-center md:text-right font-yekanr text-white text-[14px]'>مبالغ سپرده‌‌های مشتریان در چارچوب ضوابط قانونی و تا سقف قانونی تعیین شده مورد تضمین «صندوق ضمانت سپرده‌های بانک مرکزی» است</p>
                    <h4 className='w-full h-fit py-[12px]  text-center md:text-right font-yekanr font-bold text-white'>پروتکل‌های امنیتی</h4>
                    <p className='w-full h-fit py-[12px]  text-center md:text-right font-yekanr text-white text-[14px]'>در بلو همه پروتکل‌های امنیتی در سیستم‌های زیرساخت بانکی و همچنین استانداردهای بانک مرکزی در خصوص تسویه وجوه و حسابداری، به‌دقت رعایت شده است.</p>
                    <h4 className='w-full h-fit py-[12px]  text-center md:text-right font-yekanr font-bold text-white'>آسایش بیشتر</h4>
                    <p className='w-full h-fit py-[12px]  text-center md:text-right font-yekanr text-white text-[14px]'>جایگزینی کارت بانکی با پول کاغذی به دلیل اشراف لحظه‌ای بر دارایی‌های مشتریان، سبب امنیت دوچندان حساب‌های بانکی شده است. این تجربه موفق نشان داده است، روند دیجیتالی شدن منجر به آسایش و راحتی بیشتری برای مشتریان می‌شود.</p>
                </div>
            </div>
            <div className='w-full h-[12%] md:h-[30%] flex flex-wrap  justify-center '>
                <div className='w-[80%] h-1/2 md:w-[40%] md:h-full  hidden md:flex flex-wrap items-center'>
                    <span className='w-[50px] h-[50px] flex items-center justify-center rounded-[50px] [border:1px_solid_white] cursor-pointer me-[10px] text-white'><FaTwitter /></span>
                    <span className='w-[50px] h-[50px] flex items-center justify-center rounded-[50px] [border:1px_solid_white] cursor-pointer me-[10px] text-white'><FaInstagram /></span>
                    <span className='w-[50px] h-[50px] flex items-center justify-center rounded-[50px] [border:1px_solid_white] cursor-pointer  text-white'><FaLinkedin /></span>
                </div>
                <div className='w-[80%]  md:w-[40%] h-full flex flex-wrap  content-center'>
                    <h2 className='w-full h-fit font-yekanr font-bold  py-[10px] text-[28px] text-white text-center md:text-right'>ارتباط با ما</h2>
                    <p className='w-full h-fit font-yekanr py-[10px]  text-white text-[14px] text-center md:text-right'>ادرس: تهران، خیابان نلسون ماندلا، خیابان شهید رحیمی، پلاک 43</p>
                    <p className='w-full h-fit font-yekanr py-[10px]  text-white text-[14px] text-center md:text-right'>تلفن : ۹۱۰۳۶۰۶۰ - ۰۲۱</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer