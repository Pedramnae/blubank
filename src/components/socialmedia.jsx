import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img1 from './../assets/imgs/1.jpg'
import img2 from './../assets/imgs/2.jpeg'
import img3 from './../assets/imgs/3.jpeg'
import img4 from './../assets/imgs/4.jpg'
import img5 from './../assets/imgs/5.jpeg'
import img6 from './../assets/imgs/6.jpeg'
import img7 from './../assets/imgs/7.jpeg'

// Import Swiper styles
import 'swiper/css';


function Socialmedia() {
    return (
        <section className='w-full h-[100vh] bg-white flex flex-wrap content-center'>
            <h2 className='w-full h-fit flex justify-center font-yekanr font-bold text-[#3094ea] py-[15px] text-[28px] text-center md:text-[35px] '>:مارا در شبکه های اجتماعی دنبال کنید</h2>
            <div className='w-full h-[50%]  flex flex-wrap'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={70}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper lg:flex hidden"
                >
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-750px] h-[70px]  rounded-[40px] overflow-hidden [border:4px_solid_#3094ea]'>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img1} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaLinkedin /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>ali shirdastian</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>امروز کارت اعتباری #بلو رسید دستم. الحق که پکینگ و حویت بصریش حس اعتماد و احترام خیلی خوبی بهم داد</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden [border:4px_solid_#ea567e]'>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img2} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#ea567e] text-[22px]'><FaInstagram /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>sani.hb</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>واقعا فوق العاده است!😍 من که تاحالا اینهمه حس خوب نسبت به کارت بانکیم و بانک نداشتم</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden [border:4px_solid_#3094ea]'>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img3} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaTwitter /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>@Kiumad</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>به به بلو کارت منم رسید 😍👍 از نظر برندینگ و دیجیتال مارکتینگ واقعا عالی اومدن جلو</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden [border:4px_solid_#3094ea]'>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img4} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaLinkedin /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>Mohammad Mehdi Roshani</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>کارت بلو بانک منم رسید  ببینیم سرنوشتش چی میشه...بسته بندی و طراحی کارتشون قشنگ بود خوشمان آمد</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden [border:4px_solid_#3094ea]'>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img5} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaTwitter /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>@Vahidstar</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>والا من از روزی که رسید دستم همه بانکامو منتقل کردم بهش. یکی دوتا مشکل هم باهاش داشتم که تیم پشتیانی ... </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden [border:4px_solid_#ea567e]'>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img6} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#ea567e] text-[22px]'><FaInstagram /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>Rezanilforoshan.pv</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>واقعا رایط کاربری اپلیکیشن فوق العاده خوب و راحته. تبریک میگم بهتون من که بی صبرانه منتظرم کارت بانکیمو تحویل بگیرم</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden [border:4px_solid_#ea567e]'>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img7} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#ea567e] text-[22px]'><FaInstagram /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>Rezanilforoshan.pv</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>من کارتم رسید بشیار عالی و راحت فعال شد امروز هم با مبلغ هدیه ای که وایز کرده بودید خرید کردم 😍</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={70}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper hidden sm:flex lg:hidden"
                >
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-750px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img1} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaLinkedin /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>ali shirdastian</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>امروز کارت اعتباری #بلو رسید دستم. الحق که پکینگ و حویت بصریش حس اعتماد و احترام خیلی خوبی بهم داد</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img2} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#ea567e] text-[22px]'><FaInstagram /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>sani.hb</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>واقعا فوق العاده است!😍 من که تاحالا اینهمه حس خوب نسبت به کارت بانکیم و بانک نداشتم</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img3} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaTwitter /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>@Kiumad</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>به به بلو کارت منم رسید 😍👍 از نظر برندینگ و دیجیتال مارکتینگ واقعا عالی اومدن جلو</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img4} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaLinkedin /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>Mohammad Mehdi Roshani</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>کارت بلو بانک منم رسید  ببینیم سرنوشتش چی میشه...بسته بندی و طراحی کارتشون قشنگ بود خوشمان آمد</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img5} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaTwitter /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>@Vahidstar</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>والا من از روزی که رسید دستم همه بانکامو منتقل کردم بهش. یکی دوتا مشکل هم باهاش داشتم که تیم پشتیانی ... </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img6} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#ea567e] text-[22px]'><FaInstagram /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>Rezanilforoshan.pv</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>واقعا رایط کاربری اپلیکیشن فوق العاده خوب و راحته. تبریک میگم بهتون من که بی صبرانه منتظرم کارت بانکیمو تحویل بگیرم</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img7} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#ea567e] text-[22px]'><FaInstagram /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>Rezanilforoshan.pv</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>من کارتم رسید بشیار عالی و راحت فعال شد امروز هم با مبلغ هدیه ای که وایز کرده بودید خرید کردم 😍</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={70}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper flex sm:hidden"
                >
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-750px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img1} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaLinkedin /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>ali shirdastian</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>امروز کارت اعتباری #بلو رسید دستم. الحق که پکینگ و حویت بصریش حس اعتماد و احترام خیلی خوبی بهم داد</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img2} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#ea567e] text-[22px]'><FaInstagram /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>sani.hb</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>واقعا فوق العاده است!😍 من که تاحالا اینهمه حس خوب نسبت به کارت بانکیم و بانک نداشتم</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img3} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaTwitter /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>@Kiumad</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>به به بلو کارت منم رسید 😍👍 از نظر برندینگ و دیجیتال مارکتینگ واقعا عالی اومدن جلو</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img4} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaLinkedin /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>Mohammad Mehdi Roshani</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>کارت بلو بانک منم رسید  ببینیم سرنوشتش چی میشه...بسته بندی و طراحی کارتشون قشنگ بود خوشمان آمد</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img5} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#3094ea] text-[22px]'><FaTwitter /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>@Vahidstar</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>والا من از روزی که رسید دستم همه بانکامو منتقل کردم بهش. یکی دوتا مشکل هم باهاش داشتم که تیم پشتیانی ... </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img6} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#ea567e] text-[22px]'><FaInstagram /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>Rezanilforoshan.pv</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>واقعا رایط کاربری اپلیکیشن فوق العاده خوب و راحته. تبریک میگم بهتون من که بی صبرانه منتظرم کارت بانکیمو تحویل بگیرم</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className='w-full h-[250px] flex flex-wrap  relative [box-shadow:0px_0px_10px_0px_gray] content-start rounded-[20px] px-[15px]'>
                            <div className='w-full flex justify-center translate-y-[-30px]  h-fit'>
                                <figure className='w-[70px] h-[70px]  rounded-[40px] overflow-hidden '>
                                    <img loading='lazy' className='w-full h-full object-contain' src={img7} alt="social media user" />
                                </figure>
                            </div>
                            <span className='w-fit h-fit p-[10px] absolute top-[20px] right-[20px]  text-[#ea567e] text-[22px]'><FaInstagram /></span>
                            <h6 className='w-full font-bold  h-fit flex py-[10px] justify-center translate-y-[-30px] '>Rezanilforoshan.pv</h6>
                            <p className='w-full h-fit py-[15px]  font-yekanr text-[#828696] leading-[30px] translate-y-[-30px] text-right text-[14px]'>من کارتم رسید بشیار عالی و راحت فعال شد امروز هم با مبلغ هدیه ای که وایز کرده بودید خرید کردم 😍</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Socialmedia