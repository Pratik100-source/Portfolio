import React from "react";
import { CardComponent } from "./box";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      key: "01",
      title: "Project One",
      description:
        "Is a digital healthcare platform that connects patients with verified medical professionals for on-demand and scheduled services, including in-person care and online consultations, with secure booking, communication, and payments.",
      image: "/CareAssist.png",
      link: "https://care-assist-vert.vercel.app/",
    },
    {
      key: "02",
      title: "Project Two",
      description:
        "Is a digital healthcare platform that connects patients with verified medical professionals for on-demand and scheduled services, including in-person care and online consultations, with secure booking, communication, and payments.",
      image: "/CareAssist.png",
      link: "",
    },
    {
      key: "03",
      title: "Project Three",
      description:
        "Is a digital healthcare platform that connects patients with verified medical professionals for on-demand and scheduled services, including in-person care and online consultations, with secure booking, communication, and payments.",
      image: "/CareAssist.png",
      link: "",
    },
  ];
  return (
    <div className="flex gap-3 flex-col md:items-center pt-[2rem] pb-[15rem] bg-secondary-background/50 ">
      <div className="max-w-6xl md:mx-auto">
        <div className="pb-[3rem] flex md:justify-center">
          <span className="text-3xl px-5 md:px-0 antialiased font-semibold font-yellowTail bg-gradient-to-b from-fuchsia-500 to-cyan-500 -tracking-normal bg-clip-text text-transparent whitespace-nowrap">
            Projects and more
          </span>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:margin-auto w-full gap-5 px-5 md:px-0">
          {projects.map((project, index) => {
            let initialAnimation;

            if (index % 3 === 0) {
              initialAnimation = { opacity: 0, x: -60, y: 20 };
            } else if (index % 3 === 2) {
              initialAnimation = { opacity: 0, x: 60, y: 20 };
            } else {
              initialAnimation = { opacity: 0, y: 60 };
            }

            return (
              <motion.div
                key={project.key}
                initial={initialAnimation}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
              >
                <CardComponent
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
