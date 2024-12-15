import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const changingTextRef = useRef(null);

  useEffect(() => {
    const texts =  [ "Hanane El attar", "Développeuse full stack" ];
    let currentIndex = 0;

    const changeText = () => {
      if (changingTextRef.current) {
        gsap.to(changingTextRef.current, {
          duration: 2,
          text: texts[currentIndex],
          ease: "power3.inOut",
          onComplete: () => {
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(changeText, 1000);
          },
        });
      }
    };

    changeText();
  }, []);

  const generateRandomLineStyles = () => {
    const randomTop = Math.random() * 100 + "%";
    const randomLeft = Math.random() * 70 + "%";
    const randomRotation = Math.random() * 190 + "deg";
    const randomLength = Math.random() * 70 + "px";
    const randomWidth = Math.random() * 1 + "px"; 
    return {
      top: randomTop,
      left: randomLeft,
      transform: `rotate(${randomRotation})`,
      width: randomLength,
      height: randomWidth,
    };
  };

  const lines = Array.from({ length: 15 }).map(() => generateRandomLineStyles());

  return (
    <div
      id="accueil"
      className="relative isolate w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-gray-800 opacity-30 sm:w-[72.1875rem]"
        />
      </div>

      {/* Decorative lines */}
      {lines.map((lineStyle, index) => (
        <div
          key={index}
          className="absolute bg-purple-500"
          style={lineStyle}
        />
      ))}

      <div className="flex flex-col items-center justify-center w-full max-w-3xl text-center">
        {/* Animated Text */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-poppins text-4xl md:text-5xl font-extrabold tracking-tight sm:text-6xl text-purple-500"
        >
          Je suis{" "}
          <span ref={changingTextRef}></span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 font-poppins text-lg sm:text-xl text-purple-300 leading-relaxed"
        >
          Étudiant en deuxième année de développement digital à CPF Hassania.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md font-poppins bg-purple-500 px-6 py-3 text-lg font-bold text-gray-800 shadow-lg hover:bg-purple-400 hover:shadow-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Explorez mon CV
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
