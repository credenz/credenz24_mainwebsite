import React from 'react'
import { IconAppWindow } from "@tabler/icons-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BackgroundGradient } from '../ui/background-gradient';
import { animated,useSpring } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';
const ContactProfileCard = ({name,image,}) => {
  const ref = React.useRef(null);
  const {style, ...mouseHandlers} = use3dEffect(ref);
  return (
    <>
     <animated.div className=' md:w-1/5 lg:w-1/5' >
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
       <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-blue-500 mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Joint Secretary</span>
         
        </button>
      
      </BackgroundGradient>
    </animated.div>
     
    </>
  )
}

export default ContactProfileCard
