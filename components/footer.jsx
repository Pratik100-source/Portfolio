export default function Footer() {
  return (
    <div className=" bg-slate-50 relative dark:bg-[#020013] ">
      {/* <canvas
        width={577}
        height={528}
        className="absolute top-0 left-0 w-full h-full z-index-10 opacity-100"
      > */}
      <div className="bg-slate-50 dark:bg-[#000013] overflow-hidden mx-auto flex flex-col ">
        <div className="relative h-[55rem] gridtoota:h-[33rem] sm:h-[50.5rem] md:h-[52rem] lg:h-[43.5rem] w-full bg-[#030014]">
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Video background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hidden sm:block w-full h-full object-cover absolute top-[-57px] md:top-[-58px] md:max-w-[1440px] sm:top-[-114px] sm:max-h-[40rem] md:max-h-[40.7rem] lg:max-h-[40.3rem] lg:top-[-3px]"
            >
              <source src="/blackhole.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="backdrop-blur-xl pt-16 pb-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 gridtoota:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-24 mb-12 pr-8 pl-8 xs:px-20 gridtoota:px-6">
                  <div className="space-y-4 group">
                    <h3 className="text-white font-bold text-lg font-serif relative inline-block">
                      Pratik .
                    </h3>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
                    <p className="text-gray-400 text-sm font-openSans gridtoota:pr-0 pr-12 transition-all duration-300 ease-out group-hover:text-gray-300">
                      Crafting digital
                      <strong className="text-white opacity-25 transition-opacity duration-500 ease-out group-hover:opacity-100">
                        ecstasies
                      </strong>
                      with code, creativity (& a bit of caffiene of course!).
                      <br />
                      <br /> Thanks for stopping by!
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold font-openSans">
                      {" "}
                      Quick Lines
                    </h4>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href=""
                          className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm font-openSans relative inline-block group"
                        >
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm font-openSans relative inline-block group"
                        >
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm font-openSans relative inline-block group"
                        >
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm font-openSans relative inline-block group"
                        >
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold font-openSans">
                      {" "}
                      Get in touch
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="mailto:pratikpanthi100@gmail.com"
                        className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm font-openSans flex items-center group"
                      >
                        <span className="transform transition-all duration-300 ease-out group-hover:translate-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail transition-colors duration-300 ease-out group-hover:text-white"
                          >
                            <rect width={20} height={16} x={2} y={4}></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                        </span>
                        <span className="ml-2 relative">
                          "pratikpanthi100@gmail.com"
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                        </span>
                      </a>
                      <div className="text-gray-400 text-sm font-openSans flex items-center group">
                        <span className="transform transition-all duration-300 ease-out group-hover:translate-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-map-pin transition-colors duration-300 ease-out group-hover:text-white"
                          >
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          </svg>
                        </span>
                        <span className="ml-2">Kathmandu, Nepal</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold font-openSans">
                      Connect
                    </h4>
                    <div>
                      <a href="" target="_blank" className="group relative"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </canvas> */}
    </div>
  );
}
