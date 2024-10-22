import React from 'react'
import video from './../assets/videos/vid3.mp4'

function Enteghalhoshmad() {
    return (
        <section className='w-full h-[120vh] flex items-center justify-center'>
            <div className='w-[80%] h-[80%] flex flex-wrap '>
                <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex items-center'>
                    <article className='w-full h-fit flex flex-wrap  px-[20px] lg:px-[0px] lg:pe-[80px]'>
                        <h2 className='w-full h-fit py-[15px] text-[#3094ea] text-[35px] text-right font-yekanr font-bold'>انتقال هوشمند پول</h2>
                        <p className='w-full h-fit py-[15px] font-yekanr text-[#828696] text-right leading-[35px]'>«انتقال هوشمند پول» یعنی راحت و بدون دردسر پولی را که می‌خواهید، جابه جا کنید. در بلو، لازم نیست شما بدانید پایا، ساتنا یا شبا چیست و برای انتقال چه میزان پول از کدامیک از آنها باید استفاده کرد. ما این کار را برای شما انجام می‌دهیم.</p>
                    </article>
                </div>
                <div className='w-full lg:w-1/2 h-1/2 lg:h-full '>
                    <video  autoPlay loop muted className='w-full h-full object-contain '>
                        <source  src={video} type='video/mp4' />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Enteghalhoshmad