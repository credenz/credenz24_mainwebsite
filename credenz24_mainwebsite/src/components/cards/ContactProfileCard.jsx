import React from 'react'
import { IconAppWindow } from "@tabler/icons-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BackgroundGradient } from '../ui/background-gradient';
import img from "../../assets/admin-photos/me-professional.jpg"
const ContactProfileCard = ({name,image}) => {
  return (
    <>
     <div className=' md:w-1/5 lg:w-1/5'>
      <BackgroundGradient className="rounded-[22px] max-w-xs p-4 sm:p-10 bg-slate-900">
        <LazyLoadImage
          src={image}
          alt="jordans"
          height="400"
          width="400"
          
          className="object-contain rounded-[22px]"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
         {name}
        </p>
       {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button> */}
      </BackgroundGradient>
    </div>
     
    </>
  )
}

export default ContactProfileCard
