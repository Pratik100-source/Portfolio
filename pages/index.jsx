"use client";
import Hamburger from "hamburger-react";
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
import ModeToggle from "@/components/ui/toggle";

const MotionImage = motion(Image);

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    // <SplashScreen>
    <motion.div
      className="flex flex-col h-auto bg-background text-foreground"
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // smooth butter cubic easing
        type: "tween",
      }}
    >
      <div className="w-full h-auto bg-secondary-background/50 text-foreground">
        <div className="bg-secondary-background/40 text-foreground border-b-1 shadow-2x flex z-40  w-full h-auto items-center justify-center  fixed top-0 ">
          <motion.nav
            className={
              "z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center  justify-between h-[4rem] max-w-[1024px]"
            }
          >
            <ul>
              <p className="text-2xl antialiased font-semibold font-yellowTail bg-gradient-to-b from-fuchsia-500 to-cyan-500 tracking-wider bg-clip-text text-transparent whitespace-nowrap">
                &lt;Pratik Panthi/&gt;
              </p>
            </ul>
            <ul className=" hidden lg:flex space-x-4">
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
              <li className="bg-none border-none border-r-0 border-s-0 pt-0.5 item-center">
                <ModeToggle></ModeToggle>
              </li>
            </ul>
            {/* Hamburger */}
            <div className="lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </motion.nav>
          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ x: "+100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="lg:hidden fixed top-[4rem] left-0 bg-secondary-background/90 backdrop-blur-sm shadow-xl h-full "
            >
              <ul className="flex flex-col items-center gap-6 py-8 text-lg">
                <li className=" hover:bg-sky-700 w-full text-center ">
                  <Link href="/" onClick={() => setOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className=" hover:bg-sky-700 w-full text-center">
                  <Link href="/about" onClick={() => setOpen(false)}>
                    About
                  </Link>
                </li>
                <li className="hover:bg-sky-700 w-full text-center">
                  <Link href="/projects" onClick={() => setOpen(false)}>
                    Projects
                  </Link>
                </li>
                <li className="hover:bg-sky-700 w-full text-center">
                  <Link href="/resume" onClick={() => setOpen(false)}>
                    Resume
                  </Link>
                </li>
                <li className="hover:bg-sky-700 w-full text-center">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </li>
                <li>
                  <ModeToggle />
                </li>
              </ul>
            </motion.div>
          )}
        </div>
        <div className="flex flex-col lg:flex-row min-h-screen md:py-2 py-[3rem] max-w-full">
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
            <h1 className="rockwellNova font-medium text-2xl sm:text-3xl md:text-4xl antialiased tracking-wider text-foreground">
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
              className="w-full h-auto sm:w-full sm:h-auto md:w-[50%] md:h-auto lg:w-full lg:h-auto lg:object-contain"
            />
          </div>
        </div>
      </div>
      <div id="about" className=" h-auto overflow-y-visible">
        <About />
      </div>
      <div id="projects" className=" h-auto  text-foreground bg-background">
        <Project />
      </div>
      <div id="skills" className=" bg-secondary-background/50 text-foreground">
        <Skill />
      </div>
      <div id="footer" className="w-full text-foreground">
        <Footer />
      </div>
    </motion.div>
    // </SplashScreen>
  );
}
