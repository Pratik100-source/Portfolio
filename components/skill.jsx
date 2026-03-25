import { motion } from "framer-motion";
import { useRef } from "react";

export default function Skill() {
  const ref = useRef(null);
  const skills = [
    {
      key: "01",
      image: "/html5.png",
      title: "HTML",
    },
    {
      key: "02",
      image: "/css3.png",
      title: "CSS",
    },
    {
      key: "03",
      image: "/js.png",
      title: "JavaScript",
    },
    {
      key: "04",
      image: "/react.png",
      title: "React JS",
    },
    {
      key: "05",
      image: "/node.png",
      title: "Node JS",
    },
    {
      key: "06",
      image: "/expressJS.png",
      title: "Express JS",
    },
    {
      key: "07",
      image: "/mongodb.svg",
      title: "MongoDB",
    },
    {
      key: "08",
      image: "/typescript.png",
      title: "TypeScript",
    },
    {
      key: "09",
      image: "/next.png",
      title: "Next JS",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:items-center gap-5 pl-5 pr-5 md:pl-0 md:pr-0 pt-[2rem] pb-[8rem]">
        <span className="pb-[2rem] text-3xl antialiased font-semibold font-yellowTail bg-gradient-to-b from-fuchsia-500 to-cyan-500 tracking-wider bg-clip-text text-transparent whitespace-nowrap ">
          Skills and more
        </span>
        <div className="grid md:grid-cols-4 md:gap-7 sm:grid-cols-3 sm:gap-5 grid-cols-2 gap-5">
          {skills.map((skill, index) => {
            let initialAnimation;
            let width;

            if (index % 3 === 0) {
              initialAnimation = { opacity: 0, x: -60, y: 20 };
            } else if (index % 3 === 1) {
              initialAnimation = { opacity: 0, x: 60, y: 20 };
            } else {
              initialAnimation = { opacity: 0, y: 60 };
            }
            68;
            return (
              <motion.div
                key={skill.key}
                className="group w-[140px] h-[140px] bg-[#3a2c4d] border-r-card flex flex-col gap-1 items-center montreal pt-5 pb-5 box-border rounded-lg cursor-pointer"
                whileHover={{
                  scale: [null, 1.1, 1.1],
                  transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                  },
                }}
                initial={initialAnimation}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  {skill.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
