import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import React from "react";
("use1 client");
const MotionImage = motion(Image);

export default function SplashScreen({ children }) {
  const [isLoading, setisLoading] = React.useState(false);
  const [isFirstLoad, setisFirstLoad] = React.useState(false);
  const [isSecondLoad, setisSecondLoad] = React.useState(false);
  const [isThirdLoad, setisThirdLoad] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setisLoading(true);
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/SplashAnimate.webm" type="video/webm" />
        </video>
        <div className="text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              ease: [0.6, 0.01, -0.05, 0.95],
              delay: 0.5,
              type: "spring",
              stiffness: 70,
              damping: 20,
            }}
            onAnimationComplete={() => setisFirstLoad(true)}
            className="text-3xl font-yellowTail text-white tracking-wider"
          >
            &nbsp; Web dev who builds with purpose <br />
          </motion.p>

          {isFirstLoad && (
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              duration={1}
              ease={[0.6, 0.01, -0.05, 0.95]}
              delay={0.5}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
              }}
              className="text-3xl justify-center items-center font-yellowTail text-white absolute mt-5 sm:mt-3 left-0 right-0 tracking-wider"
              onAnimationComplete={() => setisSecondLoad(true)}
            >
              Meet Pratik!
            </motion.p>
          )}
        </div>

        <motion.footer className="absolute w-full flex justify-center items-center bottom-0 mb-5">
          {isSecondLoad && (
            <motion.p
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.95],
                delay: 0.5,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              onAnimationStart={() =>
                setTimeout(() => setisThirdLoad(true), 500)
              }
              className="text-md font-yellowTail text-white absolute bottom-5"
            >
              @Pratik Panthi, 2025
            </motion.p>
          )}
          {isThirdLoad && (
            <MotionImage
              src="/character.webp"
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.01, -0.05, 0.95],
                delay: 0.5,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              width={90}
              height={90}
              className="absolute bottom-8"
            ></MotionImage>
          )}
        </motion.footer>
      </motion.div>
    );
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
