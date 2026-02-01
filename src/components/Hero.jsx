import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="accueil"
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden"
    >
      {/* Decorative background blob – slightly smaller on mobile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden blur-3xl opacity-30"
      >
        <div
          className="absolute left-1/2 top-1/4 w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] md:w-[38rem] md:h-[38rem] -translate-x-1/2 bg-gradient-to-tr from-purple-500 to-gray-800 opacity-20 sm:opacity-25 md:opacity-35 rotate-[20deg] sm:rotate-[25deg]"
          style={{
            clipPath:
              "polygon(74% 44%, 100% 61%, 97% 27%, 85% 0%, 80% 2%, 72% 33%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 77%, 0% 65%, 17% 100%, 28% 77%, 76% 98%, 74% 44%)",
          }}
        />
      </div>

      {/* Main content – centered container with max-width */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 xl:gap-20">
        {/* Left – Text content (stacks first on mobile) */}
        <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6 sm:space-y-8">
          <motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-extrabold leading-tight tracking-tight text-purple-400"
>
  Bonjour, je suis{" "}
  <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent font-black">
    HANANE EL ATTAR
  </span>
  </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-purple-200/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 tracking-wide"
          >
            Développeuse Full Stack avec une expertise en développement front-end et back-end, 
            intégration d’API et gestion de bases de données. 
            Passionnée par les technologies web modernes et l’optimisation des performances applicatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-2"
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 px-7 py-3.5 sm:px-9 sm:py-4 rounded-xl font-semibold text-gray-900 hover:from-purple-400 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-purple-700/40 transform hover:scale-105 text-base sm:text-lg"
            >
              Explorez mon CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex justify-center lg:justify-start flex-wrap gap-5 sm:gap-7 pt-4 text-gray-300"
          >
            <a
              href="https://www.linkedin.com/in/hanane-el-attar-95b343304/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-purple-400 transition text-sm sm:text-base hover:scale-110 p-2.5 rounded-lg hover:bg-purple-500/10"
            >
              <FaLinkedin className="text-lg sm:text-xl" />
              <span className="hidden sm:inline font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Hanane-Elattar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-purple-400 transition text-sm sm:text-base hover:scale-110 p-2.5 rounded-lg hover:bg-purple-500/10"
            >
              <FaGithub className="text-lg sm:text-xl" />
              <span className="hidden sm:inline font-medium">GitHub</span>
            </a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="flex flex-col items-center lg:items-start gap-3 sm:gap-4 pt-5 text-sm sm:text-base text-purple-200/90"
          >
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400 text-lg flex-shrink-0" />
              <a
                href="mailto:hananeelattar405@gmail.com"
                className="hover:underline hover:text-purple-300 break-all sm:break-normal"
              >
                hananeelattar405@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400 text-lg flex-shrink-0" />
              <a href="tel:+212657035715" className="hover:underline hover:text-purple-300">
                +212 6 57 03 57 15
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-400 text-lg flex-shrink-0" />
              <p>Casablanca, Maroc</p>
            </div>
          </motion.div>
        </div>

        {/* Right – Code block card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          className="w-full max-w-md lg:max-w-lg xl:max-w-xl flex justify-center lg:justify-end"
        >
          <div className="w-full bg-black/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <pre className="p-5 sm:p-6 text-sm sm:text-base font-mono text-purple-200 leading-relaxed overflow-x-auto">
{`const profile = {
  role: "Développeuse Full Stack",
  stack: ["React", "Laravel", "MySQL"],
  passion: "Passionnée par le développement
            web et l’innovation digitale"
};`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;