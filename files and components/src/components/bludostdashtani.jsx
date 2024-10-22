import React from 'react'
import video from '../assets/videos/vid1.mp4'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FiDownload } from "react-icons/fi";
import img1 from './../assets/imgs/1.svg'
import img2 from './../assets/imgs/2.svg'
import img3 from './../assets/imgs/3.svg'

function Bludostdashtani() {
    return (
        <section className='w-full h-[220vh] lg:h-[100vh] flex items-center justify-center'>
            <div className='w-full lg:w-[80%] h-full lg:h-[80%]  flex flex-wrap'>
                <div className='w-full lg:w-[55%] h-[45%]  lg:h-full flex flex-wrap'>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide className='flex items-center'>
                            <div className='w-full h-fit flex flex-wrap  px-[60px]'>
                                <h2 className='w-full h-fit py-[10px] font-yekanr font-bold text-[35px] text-[#3094ea]  text-right'>بلو، بانک ولی دوست داشتنی</h2>
                                <p className='w-full h-fit py-[10px] font-yekanr text-[#828696] text-right flex leading-[35px]'>بلو، پلتفرمی تمام دیجیتال است که همه ی عملیات بانکداری روی اپلیکیشن موبایل و کاملا آنلاین انجام می شود. به زیان ساده، بانکی است که همیشه همراه شما خواهد بود</p>
                                <div className='w-full h-fit py-[50px]  flex items-center justify-center'>
                                    <span className='w-fit h-fit py-[10px] cursor-pointer bg-[#3094ea] rounded-[30px] font-yekanr text-white text-[14px] flex flex-wrap px-[10px]'>
                                        <span className='w-fit h-fit px-[6px]'>دانلود اپلیکیشن</span>
                                        <span className='w-fit h-fit px-[6px] text-[18px]'><FiDownload /></span>
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center'>
                            <div className='w-full h-fit flex flex-wrap content-between justify-center lg:justify-between'>
                                <article className='w-[90%] lg:w-[40%] xl:w-[30%]  h-[28%] lg:h-[45%] xl:h-fit flex flex-wrap '>
                                    <figure className='w-full h-[80px] '>
                                        <img loading='lazy' className='w-full h-full object-contain' src={img1} alt="blubank" />
                                    </figure>
                                    <div className='w-full h-fit py-[20px] rounded-[20px] bg-[#ebf4fc] flex flex-wrap px-[10px] content-start'>
                                        <h4 className='w-full py-[10px] h-fit flex justify-center font-yekanr '>بدون حداقل موجودی حساب</h4>
                                        <p className='w-full py-[10px] h-fit text-[#3094ea] text-center font-yekanr leading-[30px]'>در بلو برای باز کردن حساب، نیاز حتی به یک ریال موجودی نیست</p>
                                    </div>
                                </article>
                                <article className='w-[90%] lg:w-[40%] xl:w-[30%]  h-[28%] lg:h-[45%] xl:h-fit flex flex-wrap '>
                                    <figure className='w-full h-[80px] '>
                                        <img loading='lazy' className='w-full h-full object-contain' src={img2} alt="blubank" />
                                    </figure>
                                    <div className='w-full h-fit py-[20px] rounded-[20px] bg-[#ebf4fc] flex flex-wrap px-[10px] content-start'>
                                        <h4 className='w-full py-[10px] h-fit flex justify-center font-yekanr '>بدون کارمزد باز کردن حساب</h4>
                                        <p className='w-full py-[10px] h-fit text-[#3094ea] text-center font-yekanr leading-[30px]'>در بلو باز کردن حساب کاملا رایگان است و نیاز به هیچ کارمزدی ندارد</p>
                                    </div>
                                </article>
                                <article className='w-[90%] lg:w-[40%] xl:w-[30%]  h-[28%] lg:h-[45%] xl:h-fit flex flex-wrap '>
                                    <figure className='w-full h-[80px] '>
                                        <img loading='lazy' className='w-full h-full object-contain' src={img3} alt="percent" />
                                    </figure>
                                    <div className='w-full h-fit py-[20px] rounded-[20px] bg-[#ebf4fc] flex flex-wrap px-[10px] content-start'>
                                        <h4 className='w-full py-[10px] h-fit flex justify-center font-yekanr '>پنج درصد سود سپرده</h4>
                                        <p className='w-full py-[10px] h-fit text-[#3094ea] text-center font-yekanr leading-[30px]'>در بلو برای حداقل مانده موجودی در ماه، سود سالیانه پنج درصد به صورت ماه شمار پرداخت میشود</p>
                                    </div>
                                </article>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center'>
                            <div className='w-full h-fit flex flex-wrap  px-[60px] justify-start'>
                                <h2 className='w-[90%] h-fit py-[10px]  font-yekanr font-bold text-[#3094ea] text-[35px] text-right'>حفاظت از سرمایه مشتریان</h2>
                                <div className='w-full h-fit flex flex-wrap py-[10px]'>
                                    <p className='w-[90%] h-fit  font-yekanr text-right text-[#828696] leading-[35px]'>مبلغ سپرده های مشتریان در چهارچوب ضوابط قانونی و تا سقف قانونی تعیین شده، مورد تضمین صندوق ضمانت سپرده های بانک مرکزی است</p>
                                    <span className='w-[10%]  h-fit px-[10px] flex justify-center py-[10px]'>
                                        <span className='w-[15px] h-[4px] bg-[#3094ea] '></span>
                                    </span>
                                </div>
                                <div className='w-full h-fit flex flex-wrap py-[10px]'>
                                    <p className='w-[90%] h-fit  font-yekanr text-right text-[#828696] leading-[35px]'>ما همه ی اطلاعات حساب ها و مدارک هویتی مشتریان خود را محرمانه تلقی کرده و متعهد میشویم تحت هر شرایطی جز در موارد قانونی از انتشار آن جلوگیری کرده و مسئولیت این موضوع را کامل میپذیریم</p>
                                    <span className='w-[10%]  h-fit px-[10px] flex justify-center py-[10px]'>
                                        <span className='w-[15px] h-[4px] bg-[#3094ea] '></span>
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='w-full lg:w-[45%] h-[45%] my-[40px] lg:h-full flex '>
                    <video autoPlay loop muted className='w-full h-full object-contain'>
                        <source className='w-full h-full' src={video} type='video/mp4' />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Bludostdashtani