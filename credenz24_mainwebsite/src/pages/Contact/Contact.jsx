
import React from "react";

import ContactProfileCard from "../../components/cards/ContactProfileCard";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import "./contactus.css"
import { SignupForm } from "../../components/forms/Form";
import { BackgroundGradient } from  "../../components/ui/background-gradient"
import imgsh from "../../assets/admin-photos/Shruti_Shinde.jpg";
import imgpp from "../../assets/admin-photos/PrassnaPande.jpg";
import imghs from "../../assets/admin-photos/Harshk.jpg";
import imgkrn from "../../assets/admin-photos/karanmun.jpg";

const Contact = () => {
  return (
	<>
	<div className="contactus ">
	<Parallax pages={3} style={{ top: '0', left: '0'  }} className="animation  bg-[#080E3E]">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="bglayer"></div>
        </ParallaxLayer>
		<ParallaxLayer offset={0} speed={2}>
          <div className="animation_layer parallax" id="bubbles"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="layer0"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="layer1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="layer2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
        <div className="animation_layer parallax text-center align-middle
	    text-9xl font-extrabold text-blue-200 flex justify-center items-start">
		<p className='mt-[20%]'>Contact Us</p>
		</div>
        </ParallaxLayer>
		<ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="layer5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div className="animation_layer parallax" id="layer6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer7"></div>
        </ParallaxLayer>
		<ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer8"></div>
        </ParallaxLayer>
		<ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer9"></div>
        </ParallaxLayer>
		<ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer10"></div>
        </ParallaxLayer>
		<ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer11"></div>
        </ParallaxLayer>
		<ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer12"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <div className=" flex-col  m-10">
            <div className="text-6xl font-extrabold text-white text-center">Admin Team</div>
            <div  className="flex cardb justify-around gap-5  m-10">
            <ContactProfileCard className="" name={"Prasanna Pande"}image={imgpp}></ContactProfileCard>
<ContactProfileCard  className="" name={"Harsh Khandelwal"}image={imghs}></ContactProfileCard>
            <ContactProfileCard   className="" name={"Shruti Shinde"}image={imgsh}></ContactProfileCard>
            </div>
	<div className=" flex cardb justify-around gap-5 m-10">
  <ContactProfileCard  className="" name={"Karan Mundhada"}image={imgkrn}></ContactProfileCard>
		<ContactProfileCard  className="" name={"Jeeya Shah"}src={``}></ContactProfileCard>
		<ContactProfileCard  className="" name={"Kaushal Lande"}src={``}></ContactProfileCard>
  </div>
	

    </div>
    
   
 </ParallaxLayer>
 <ParallaxLayer offset={2} style={{ marginTop: 200, }} speed={1}>
 <div className="flex flex-col md:flex-row">
    
    <div className=" w-full p-5  md:mx-10 md:mb-20 md:w-1/2">
        <BackgroundGradient>
        <SignupForm ></SignupForm>
        </BackgroundGradient>
      </div>
    <iframe className=" map rounded-3xl  w-full md:w-1/2  md:mx-10 md:mb-20 p-5"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.304775421915!2d73.84210028503307!3d18.457541900113636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1678165753590!5m2!1sen!2sin"
             style={{ border: 0, }}
             allowFullScreen=""
             loading="lazy"
             title="map"
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
   
    </div>
      </ParallaxLayer>
      </Parallax>

	</div>

  
  {/* <div className="flex-col md:flex lg:flex-row bg-slate-950 ">

    <ContactProfileCard></ContactProfileCard>
 

	
  </div>  */}

  </>
  )
}

export default Contact
