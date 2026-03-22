import { motion } from "framer-motion";

export default function About() {
  const sections = [
    {
      key: "01",
      title: "Fullstack Development",
      description:
        "Developing scalable web applications with modern frontend and backend technologies",
      first: "React, Node.js, Express.js",
      second: "REST APIs, MongoDB",
      third: "Git, Github, Postman",
    },
    {
      key: "02",
      title: "UI/UX and Frontend",
      description:
        "Designing user-centric interfaces with Figma, focusing on usability and aesthetics.",
      first: "Figma, TailwindCss, Framer Motion",
      second: "HTML, CSS, TailwindCSS, Next JS",
      third: "Responsive Design",
    },
  ];

  return (
    <div className="flex flex-col text-background bg-foreground">
      {/* Intro Section */}
      <div className="flex flex-col items-center h-auto md:w-[40%] py-6 justify-center mx-auto ">
        <h1 className="lg:text-5xl md:text-4xl text-3xl  font-bold antialiased rockwellNova tracking-wider">
          WHAT I DO ?
        </h1>
        <p className="text-center mt-4 px-4 tracking-wider">
          A passionate Computer Science student and aspiring Full Stack
          Developer with a strong foundation in modern web technologies. I
          combine technical expertise with creative problem-solving to build
          innovative digital solutions.
        </p>
      </div>

      {/* Scroll Stacking Wrapper */}
      <div className="relative h-[200vh] flex flex-col">
        {sections.map((section, idx) => (
          <motion.div
            key={section.key}
            className={` sticky flex flex-row px-8 py-10 
                        w-full h-[80vh] transition-colors duration-500 bg-foreground `}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            style={{
              borderTop: "1px solid #525252",
              zIndex: sections.length + idx,
              top: `calc(8rem + ${idx * 6}rem)`, // dynamic stacking offset
              marginBottom: `${idx === 0 ? 15 : 8}rem`, // adjust as needed
            }}
          >
            {/* Left Column */}
            <div className="w-[40%] pl-8 text-4xl montreal font-bold tracking-wider">
              ({section.key})
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-[60%]">
              <div>
                <p className="text-4xl font-bold montreal tracking-wider">
                  {section.title}
                </p>
                <p className="pt-5 text-[1.1rem] w-[55%]">
                  {section.description}
                </p>
              </div>

              <div className="pt-5 text-[1.5rem] font-semibold montreal">
                <ul>
                  <li className="border-b pb-3 border-b-neutral-600">
                    <span className="text-[1rem] font-light">
                      01&nbsp;&nbsp;&nbsp;
                    </span>
                    {section.first}
                  </li>
                  <li className="border-b pb-3 pt-3 border-b-neutral-600">
                    <span className="text-[1rem] font-light">
                      02&nbsp;&nbsp;&nbsp;
                    </span>
                    {section.second}
                  </li>
                  <li className="border-b pb-3 pt-3 border-b-neutral-600">
                    <span className="text-[1rem] font-light">
                      03&nbsp;&nbsp;&nbsp;
                    </span>
                    {section.third}
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
