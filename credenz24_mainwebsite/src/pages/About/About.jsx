import React from 'react'
import { AnimatedTooltip } from '../../components/ui/animated-tooltip'
import credenz23 from "../../assets/logo-images/credenz23.avif"
import credenz22 from "../../assets/logo-images/credenz22.png"
import credenz21 from "../../assets/logo-images/credenz21.jpg"
import credenz19 from "../../assets/logo-images/credenz19.jpg"
import credenz18 from "../../assets/logo-images/credenz18.jpg"
import credenz15 from "../../assets/logo-images/credenz15.jpg"
import credenz14 from "../../assets/logo-images/credenz14.jpg"
import { StickyScroll } from '../../components/ui/sticky-scroll-reveal'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards'
import { HeroParallax } from '../../components/ui/hero-parallax'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { TabsDemo } from '../../components/cards/aboutuscards'
import "./about.css"
const About = () => {
	const people = [
		{
		  id: 1,
		  name: "Credenz'23",
		  designation: "Exploring Paradigms",
		  image:credenz23,
		},
		{
		  id: 2,
		  name: "Credenz'22",
		  designation: "Augmenting Tomorrow",
		  image: credenz22,
			
		},
		{
		  id: 3,
		  name: "Credenz'21",
		  designation: "Imbibing Ingenuity",
		  image:credenz21,
		},
		{
		  id: 4,
		  name: "Credenz'19",
		  designation: "Mapping Minds",
		  image:credenz19,
		},
		{
		  id: 5,
		  name: "Credenz'18",
		  designation: "Transcending Perspective",
		  image:credenz18,
		},
		{
		  id: 6,
		  name: "Credenz'15",
		  designation: "Rendering your Imagination",
		  image:credenz15		
		},
		{
			id: 7,
			name: "Credenz'14",
			designation: "A Technical Renaissance",
			image:credenz14
		},
	  ];

	  const content = [
		{
		  title: "CREDENZ",
		  description:
			"Credenz, organized by the PICT IEEE Student Branch, is an annual technical festival that began in 2004. It has become one of Pune's premier technical events, aiming to inspire participants to bring out their best. Credenz offers a diverse range of seminars and workshops that help expand participants' knowledge in the ever-evolving field of technology, while also instilling a competitive spirit among them. With events like Clash, B Plan, WebWeaver, Cretronix, Wall Street, and DataWiz, participants have ample opportunities to explore their talents and succeed. Credenz is a unique opportunity for students to surpass the conventional boundaries of academia and unlock their full potential. The PICT IEEE Student Branch's vision is to promote learning and exploration through Credenz, creating a platform for individuals to nurture their skills and achieve their goals.",
		  content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
			  CREDENZ
			</div>
		  ),
		},
	
		{
		  title: "PICT IEEE Student Branch (PISB)",
		  description:
			"PICT IEEE Student Branch or PISB was founded in 1988, with the primary goal of fostering technical awareness and knowledge among its student members. PISB endeavors to keep its members informed about the latest technology trends in various fields. Two significant events are hosted by PISB each year, namely Credenz and Credenz Tech Dayz. Credenz is conducted in even semesters, while Credenz Tech Dayz takes place in odd semesters. Additionally, PISB has a Women in Engineering (WIE) chapter dedicated to empowering women.",
		  content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
			  PICT IEEE Student Branch (PISB)
			</div>
		  ),
		},
		{
		  title: "PICT IEEE NEWSLETTER GROUP (P.I.N.G.)",
		  description:
			"P.I.C.T. IEEE Newsletter Group or P.I.N.G. is an annual technical magazine that is published by the student members of PICT IEEE Student Branch (PISB). It serves as a platform for technology enthusiasts to showcase their technical expertise. P.I.N.G. features articles on cutting-edge technologies from technocrats worldwide and includes interviews with distinguished personalities in various technical domains. The magazine's primary objective is to keep its readers informed about recent technology advancements and guide them towards modernization. With the upcoming release of Issue 18.1, prepare yourself to be 'P.I.N.G.'d.",
		  content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
			  PICT IEEE NEWSLETTER GROUP (P.I.N.G.)
			</div>
		  ),
		},
	  ];
	 
	
  return (
	<div className="Aboutus">
	 <Parallax pages={5} style={{ top: '0', left: '0' }} className='animation bg-[#0f1b34]'>
      <ParallaxLayer offset={0} speed={0.75}>
      <div class="animation_layer parallax" id="bgblue"></div>
      </ParallaxLayer>
	  <ParallaxLayer offset={0} speed={0.9}>
      <div class="animation_layer parallax" id="flora4"></div>
      </ParallaxLayer>
	  <ParallaxLayer offset={0} speed={0.84}>
      <div class="animation_layer parallax" id="flora3"></div>
      </ParallaxLayer>
	  <ParallaxLayer offset={0} speed={0.6}>
      <div class="animation_layer parallax" id="flora2"></div>
      </ParallaxLayer>
	  <ParallaxLayer offset={0} speed={-1.2}>
      <div className="animation_layer parallax text-center align-middle
	    text-9xl font-extrabold text-sky-200 flex justify-center items-start">
		<p className='mt-[20%]'>About Us</p>
		</div>
      </ParallaxLayer>
	  <ParallaxLayer offset={0} speed={0.6}>
      <div class="animation_layer parallax" id="flora1"></div>
      </ParallaxLayer>
	  {/* <ParallaxLayer offset={0} speed={0.3}>
      <div class="animation_layer parallax" id="flora"></div>
      </ParallaxLayer> */}
	  <ParallaxLayer offset={0} speed={1.2}>
		<div class="animation_layer parallax shark" id="shark"></div>
		</ParallaxLayer>
	 
	  <ParallaxLayer offset={0} speed={1.05}>
      <div class="animation_layer parallax" id="aquaman"></div>
      </ParallaxLayer>
	  <ParallaxLayer offset={0} speed={1.12}>
      <div class="animation_layer parallax" id="bigfish"></div>
      </ParallaxLayer>
	  <ParallaxLayer offset={0} speed={1.1}>
      <div class="animation_layer parallax" id="smallfish"></div>
      </ParallaxLayer>
	  <ParallaxLayer offset={1} speed={1.35}>
	  <div className="flex flex-row items-center justify-center mr-10 p-4 w-full">
      <AnimatedTooltip items={people} />
    </div>
	<div className="p-10">
      <TabsDemo></TabsDemo>
    </div>
	<div>
	
	</div>
	
	<div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
	
      </ParallaxLayer>

	
    </Parallax>
	
	

	
	</div>



  )
}

export default About

const testimonials = [
	{
	  quote:
		"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
	  name: "Charles Dickens",
	  title: "A Tale of Two Cities",
	},
	{
	  quote:
		"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
	  name: "William Shakespeare",
	  title: "Hamlet",
	},
	{
	  quote: "All that we see or seem is but a dream within a dream.",
	  name: "Edgar Allan Poe",
	  title: "A Dream Within a Dream",
	},
	{
	  quote:
		"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
	  name: "Jane Austen",
	  title: "Pride and Prejudice",
	},
	{
	  quote:
		"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
	  name: "Herman Melville",
	  title: "Moby-Dick",
	},
  ];


  export const products = [
	{
	  title: "Moonbeam",
	  link: "https://gomoonbeam.com",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
	},
	{
	  title: "Cursor",
	  link: "https://cursor.so",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/cursor.png",
	},
	{
	  title: "Rogue",
	  link: "https://userogue.com",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/rogue.png",
	},
   
	{
	  title: "Editorially",
	  link: "https://editorially.org",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/editorially.png",
	},
	{
	  title: "Editrix AI",
	  link: "https://editrix.ai",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/editrix.png",
	},
	{
	  title: "Pixel Perfect",
	  link: "https://app.pixelperfect.quest",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
	},
   
	{
	  title: "Algochurn",
	  link: "https://algochurn.com",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/algochurn.png",
	},
	{
	  title: "Aceternity UI",
	  link: "https://ui.aceternity.com",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
	},
	{
	  title: "Tailwind Master Kit",
	  link: "https://tailwindmasterkit.com",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
	},
	{
	  title: "SmartBridge",
	  link: "https://smartbridgetech.com",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
	},
	{
	  title: "Renderwork Studio",
	  link: "https://renderwork.studio",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/renderwork.png",
	},
   
	{
	  title: "Creme Digital",
	  link: "https://cremedigital.com",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
	},
	{
	  title: "Golden Bells Academy",
	  link: "https://goldenbellsacademy.com",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
	},
	{
	  title: "Invoker Labs",
	  link: "https://invoker.lol",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/invoker.png",
	},
	{
	  title: "E Free Invoice",
	  link: "https://efreeinvoice.com",
	  thumbnail:
		"https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
	},
  ];