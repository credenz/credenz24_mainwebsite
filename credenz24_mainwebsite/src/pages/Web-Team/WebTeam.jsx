import React, { useRef } from 'react';
import { GoogleGeminiEffect } from '../../components/ui/google-gemini-effect';
import { useScroll, useTransform } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional CSS for blur effect
import WaterEffectComponent from '../../components/ui/water-effect-component';
// import Animatedimg from "../../assets/logo-images/animatedbg2.png"; // Optional CSS for"
const WebTeam = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>
      <div
        className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <div className="" > 
     <WaterEffectComponent></WaterEffectComponent>
      
      </div>
     
    </>
  );
};

export default WebTeam;
