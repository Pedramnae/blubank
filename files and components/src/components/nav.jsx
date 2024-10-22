import React from 'react'
import logorangi from './../assets/imgs/logorangi.png'
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

function Nav() {
  const handlesidemenu = (e) => {
    let openorclose = e.currentTarget.getAttribute('data-name')
    if (openorclose == 'close') {
      let sidemenu = e.currentTarget.parentElement.parentElement.parentElement.parentElement
      setTimeout(() => {
        sidemenu.classList.remove('flex')
        sidemenu.classList.add('hidden')
      }, 1000);
      sidemenu.classList.add('[transform:_rotateY(90deg)]')
      sidemenu.classList.remove('[transform:_rotateY(0deg)]')

    } else {
      let sidemenu = e.currentTarget.parentElement.nextElementSibling
      sidemenu.classList.add('flex')
      sidemenu.classList.remove('hidden')
      setTimeout(() => {
        sidemenu.classList.remove('[transform:_rotateY(90deg)]')
        sidemenu.classList.add('[transform:_rotateY(0deg)]')
      }, 10);
    }
  }


  return (
    <header className='w-full h-[100px] flex flex-wrap [box-shadow:0px_1px_10px_0px_#d7d7d7] fixed top-0 left-0 bg-white z-[10]'>
      <figure className='w-[20%] h-full flex items-center '>
        <img loading='lazy' className='w-full h-[60%] object-contain' src={logorangi} alt="blubank" />
      </figure>
      <div className='w-[60%] h-full md:hidden '></div>
      <div className='w-[20%] md:w-[60%] h-full flex flex-wrap xl:hidden md:justify-start justify-end pe-[20px] md:pe-[0px]'>
        <span className='w-fit h-full text-[32px]  flex items-center'>
          <IoMenu data-name='open' onClick={handlesidemenu} className='cursor-pointer' />
        </span>
        {/* sidemenu */}
        {/* sidemenu */}
        {/* sidemenu */}
        <div className='w-full origin-right [transform:_rotateY(90deg)] rotate-[90deg] duration-[1s] h-[100vh] fixed top-0 right-0 bg-[#666b8196] hidden justify-end'>
          <div className='w-[70%] sm:w-[50%] h-full flex flex-wrap bg-white content-start'>
            <span className='w-full h-[10%]  flex'><span className='w-fit h-full flex items-center ps-[50px] sm:ps-[100px] text-[32px] '><MdClose data-name='close' onClick={handlesidemenu} className='cursor-pointer' /></span></span>
            <nav className='w-full h-[45%]  flex'>
              <ul className='w-[90%] h-full flex flex-wrap content-center'>
                <li className='w-full h-fit font-yekan  py-[12px] text-[14px] flex justify-end'><span className='w-fit h-fit hover:text-[#3094ea] duration-[0.4s] cursor-pointer'> درباره ما</span></li>
                <li className='w-full h-fit font-yekan  py-[12px] text-[14px] flex justify-end'><span className='w-fit h-fit hover:text-[#3094ea] duration-[0.4s] cursor-pointer'>بلاگ</span></li>
                <li className='w-full h-fit font-yekan  py-[12px] text-[14px] flex justify-end'><span className='w-fit h-fit hover:text-[#3094ea] duration-[0.4s] cursor-pointer'>سوالات متداول</span></li>
                <li className='w-full h-fit font-yekan  py-[12px] text-[14px] flex justify-end'><span className='w-fit h-fit hover:text-[#3094ea] duration-[0.4s] cursor-pointer'>موقعیت شغلی</span></li>
                <li className='w-full h-fit font-yekan  py-[12px] text-[14px] flex justify-end'><span className='w-fit h-fit hover:text-[#3094ea] duration-[0.4s] cursor-pointer'>بلو جونیور</span></li>
              </ul>
            </nav>
            <div className='w-full h-fit flex  justify-center'>
              <span className='w-fit h-fit flex justify-center px-[15px] py-[40px]'><div className='w-[50px] h-[50px] rounded-[25px] bg-[#e4e4ee] text-white flex items-center justify-center cursor-pointer relative overflow-hidden group'><span className='w-full  h-full bg-[#3094ea] absolute rounded-[25px] bottom-[-100%] left-0 group-hover:bottom-0 ease-out duration-[0.4s]'></span><IoLogoTwitter className='relative z-[2]' /></div></span>
              <span className='w-fit h-fit flex justify-center px-[15px] py-[40px]'><div className='w-[50px] h-[50px] rounded-[25px] bg-[#e4e4ee] text-white flex items-center justify-center cursor-pointer relative overflow-hidden group'><span className='w-full  h-full bg-[#3094ea] absolute rounded-[25px] bottom-[-100%] left-0 group-hover:bottom-0 ease-out duration-[0.4s]'></span><IoLogoInstagram className='relative z-[2]' /></div></span>
              <span className='w-fit h-fit flex justify-center px-[15px] py-[40px]'><div className='w-[50px] h-[50px] rounded-[25px] bg-[#e4e4ee] text-white flex items-center justify-center cursor-pointer relative overflow-hidden group'><span className='w-full  h-full bg-[#3094ea] absolute rounded-[25px] bottom-[-100%] left-0 group-hover:bottom-0 ease-out duration-[0.4s]'></span><FaLinkedin className='relative z-[2]' /></div></span>
            </div>
          </div>
        </div>
      </div>
      {/* topmenu */}
      {/* topmenu */}
      {/* topmenu */}
      <ul className='w-[60%] h-full hidden xl:flex flex-wrap justify-center '>
        <li className='w-fit h-full flex items-center  font-yekanr text-[#767a8b] hover:text-[#3094ea] duration-[0.4s]  cursor-pointer px-[15px]'>بلوجونیور</li>
        <li className='w-fit h-full flex items-center  font-yekanr text-[#767a8b] hover:text-[#3094ea] duration-[0.4s]  cursor-pointer px-[15px]'>موقعیت شغلی</li>
        <li className='w-fit h-full flex items-center  font-yekanr text-[#767a8b] hover:text-[#3094ea] duration-[0.4s]  cursor-pointer px-[15px]'>سوالات متداول</li>
        <li className='w-fit h-full flex items-center  font-yekanr text-[#767a8b] hover:text-[#3094ea] duration-[0.4s]  cursor-pointer px-[15px]'>بلاگ</li>
        <li className='w-fit h-full flex items-center  font-yekanr text-[#767a8b] hover:text-[#3094ea] duration-[0.4s]  cursor-pointer px-[15px]'>درباره ما</li>
      </ul>
      <div className='w-[20%] h-full md:flex  items-center justify-center hidden'>
        <button className='w-fit h-fit text-white font-yekanr bg-[#3094ea] p-[15px] rounded-[40px]'>باز کردن حساب بلو</button>
      </div>
    </header>
  )
}

export default Nav
