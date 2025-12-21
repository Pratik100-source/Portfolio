"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SplashScreen from "@/components/splashScreen";
import { motion } from "framer-motion";
import Link from "next/link";
import About from "@/components/about";
import Project from "@/components/project";
import Skill from "@/components/skill";
import Footer from "@/components/footer";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const MotionImage = motion(Image);

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: false, amount: 0.1 });
  const isInView2 = useInView(ref2, { once: false, amount: 0.1 });
  const isInView3 = useInView(ref3, { once: false, amount: 0.5 });
  const [bg, setBg] = useState("#f8f6f7");

 useEffect(() => {
  if (isInView3) setBg("#f8f6f7");
  else if (isInView2) setBg("#080806");
  else if (isInView1) setBg("#f8f6f7");
}, [isInView1, isInView2, isInView3]);
  return (
    <SplashScreen>
    
    <motion.div
      className="flex flex-col max-w-screen h-auto"
      animate={{ backgroundColor: bg }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // smooth butter cubic easing
        type: "tween",
      }}
    >
      <div className="w-screen h-auto" ref={ref1}>
        <div className="flex z-40 overflow-x-hidden w-full h-auto items-center justify-center data-[menu-open=true]:border-none fixed top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 shadow-md ">
          <motion.nav
            className={`z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center overflow-x-hidden justify-between h-[4rem] max-w-[1024px] ${
              bg === "#f8f6f7" ? "text-black" : "text-white"
            }`}
          >
            <ul>
              <p className="text-2xl antialiased font-semibold font-yellowTail bg-gradient-to-b from-fuchsia-500 to-cyan-500 tracking-wider bg-clip-text text-transparent whitespace-nowrap">
                &lt;Pratik Panthi/&gt;
              </p>
            </ul>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-sky-700 antialiased">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-700 antialiased">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-sky-700 antialiased"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-sky-700 antialiased">
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className=" hover:text-sky-700 antialiased"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        </div>
        <div className="flex flex-col lg:flex-row min-h-screen py-2 max-w-screen">
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col px-5 pt-20 lg:pl-40 lg:pt-40 w-full lg:w-7/12 h-auto"
          >
            <h1 className="rockwellNova font-medium text-2xl sm:text-3xl md:text-4xl antialiased tracking-wider">
              Hey! I am Pratik
            </h1>
            <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl antialiased tracking-wider mt-2">
              I am a&ensp;
              <span className="hollywoodStarfire bg-clip-text text-transparent bg-sky-700 font-semibold whitespace-nowrap">
                <Typewriter
                  words={[
                    "Human",
                    "Fullstack Dev",
                    "CS Graduate",
                    "Tech Enthusiast",
                    "UI/UX Designer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg antialiased tracking-wider max-w-xl">
              I am a Computer Science student passionate about creating
              beautiful and functional web experiences. Currently pursuing BSc.
              HONS Computer Science.
            </p>
          </motion.div>

          <div className="flex w-full lg:w-5/12 h-auto mt-10 lg:mt-0 lg:justify-center lg:items-center">
            <MotionImage
              src={"/character.webp"}
              alt="character"
              width={350}
              height={350}
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                duration: 1,
              }}
              className="w-100 h-auto sm:w-100 sm:h-auto md:w-100 md:h-auto lg:w-full lg:h-auto lg:object-contain"
            />
          </div>
        </div>
      </div>
      <div id="about" ref={ref2}   className="w-screen h-auto overflow-y-visible" >
        <About />
      </div>
      <div id="projects" className="pt-20 w-screen h-screen" >
        <Project />
      </div>
      <div id="skills" className="pt-20 w-screen h-screen">
        <Skill />
      </div>
      <div id="footer" ref={ref3} className="pt-20 w-screen h-screen">
        <Footer />
      </div>
    </motion.div>
    </SplashScreen>
  );
}
