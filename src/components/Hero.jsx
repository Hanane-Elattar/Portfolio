import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="accueil"
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-10 md:px-16 lg:px-24"
    >
      {/* Décor de fond */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden blur-3xl"
      >
        <div
          className="absolute left-1/2 top-0 w-[40rem] h-[40rem] -translate-x-1/2 bg-gradient-to-tr from-purple-500 to-gray-800 opacity-30 rotate-[25deg]"
          style={{
            clipPath:
              "polygon(74% 44%, 100% 61%, 97% 27%, 85% 0%, 80% 2%, 72% 33%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 77%, 0% 65%, 17% 100%, 28% 77%, 76% 98%, 74% 44%)",
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-12">
        {/* Texte */}
        <div className="text-left space-y-6 w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-1xl lg:text-1xl font-bold text-purple-500 text-left"
          >
            Bonjour, je suis <span className="font-extrabold">HANANE EL ATTAR</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-purple-300 text-lg md:text-xl leading-relaxed tracking-wide"
          >
            Développeuse Full Stack avec une expertise en développement front-end et back-end, 
            intégration d’API et gestion de bases de données. 
            Passionnée par les technologies web modernes et l’optimisation
            des performances applicatives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-500 px-6 py-3 rounded-md font-semibold text-gray-900 hover:bg-purple-400 transition-all duration-200 shadow-lg hover:shadow-purple-800/40"
            >
              Explorez mon CV
            </a>
          </motion.div>

          {/* Liens sociaux */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap gap-5 pt-4 text-gray-300"
          >
            <a
              href="https://www.linkedin.com/in/hanane-el-attar-95b343304/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition text-sm hover:scale-105"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Hanane-Elattar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition text-sm hover:scale-105"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="space-y-3 pt-6 text-sm text-purple-300"
          >
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-500" />
              <a
                href="mailto:hananeelattar405@gmail.com"
                className="hover:underline hover:text-purple-400"
              >
                hananeelattar405@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-500" />
              <a
                href="tel:+212657035715"
                className="hover:underline hover:text-purple-400"
              >
                +212 6 57 03 57 15
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-500" />
              <p>Casablanca, Maroc</p>
            </div>
          </motion.div>
        </div>

        {/* Image décorative */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/web-development-168/512/Woman_Web_Developer2.png"
            alt="Illustration développeuse"
            className="w-80 md:w-96 rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
