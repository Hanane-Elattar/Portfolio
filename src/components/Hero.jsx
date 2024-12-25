import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const changingTextRef = useRef(null);

  useEffect(() => {
    const texts = ["Hanane El attar", "Développeuse full stack"];
    let currentIndex = 0;

    const changeText = () => {
      if (changingTextRef.current) {
        gsap.to(changingTextRef.current, {
          duration: 2,
          text: texts[currentIndex],
          ease: "power3.inOut",
          onComplete: () => {
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(changeText, 3000);
          },
        });
      }
    };

    changeText();
  }, []);

  return (
    <div
      id="accueil"
      className="relative isolate w-full min-h-screen flex flex-col items-left justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 px-6 lg:px-8"
    >
      {/* Background Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-10"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-gray-800 opacity-30 sm:w-[72.1875rem]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-left justify-center w-full max-w-3xl text-left">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-poppins text-4xl md:text-5xl font-extrabold tracking-tight sm:text-6xl text-purple-500"
        >
          <span ref={changingTextRef}></span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 font-poppins text-lg sm:text-xl text-purple-300 leading-relaxed"
        >
          {/* Étudiant en deuxième année de développement digital à CPF Hassania. */}
        </motion.p>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 font-poppins text-purple-300"
        >
          <p className="mt-2">
            Étudiant en 2ᵉ année de développement Digital Full Stack,
            passionné par la création d’applications web innovantes. Compétences
            solides en développement frontend et backend, gestion de bases de
            données, et utilisation des outils modernes de collaboration.
            Motivé pour apprendre de nouvelles technologies et contribuer à des
            projets collaboratifs.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/hanane-el-attar-95b343304/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition text-sm"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Hanane-Elattar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition text-sm"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
          </div>

          {/* Contact Details */}
          <div className="mt-6 flex flex-col space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-500 text-lg" />
              <p>
                <a
                  href="mailto:hananeelattar405@gmail.com"
                  className="hover:underline hover:text-purple-400 transition"
                >
                  hananeelattar405@gmail.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-purple-500 text-lg" />
              <p>
                <a
                  href="tel:+212657035715"
                  className="hover:underline hover:text-purple-400 transition"
                >
                  +212 6 57 03 57 15
                </a>
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-500 text-lg" />
              <p>Casablanca, Maroc</p>
            </div>
          </div>
        </motion.div>

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
            className="rounded-md font-poppins bg-purple-500 px-6 py-3 text-lg font-bold text-gray-800 shadow-lg hover:bg-purple-400 hover:shadow-purple-900 transition-all duration-100 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Explorez mon CV
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
