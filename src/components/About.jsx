import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const timeline = [
  {
    year: "Septembre - Janvier 2025",
    title: "Université Internationale Averroès",
    description: "Formation JobinTech en Développement Full Stack (React, Java & Spring Boot)",
    icon: <FaLaptopCode className="text-purple-500 text-3xl"/>,
    highlight: true,
  },
  {
    year: "2023-2025",
    title: "Centre de Formation Professionnelle Hassania, Casablanca",
    description: "Diplôme en Développement Digital Fullstack",
    icon: <FaGraduationCap className="text-purple-500 text-3xl" />,
  },
  {
    year: "2021-2022",
    title: "Lycée Fatima El Fihria, Casablanca",
    description: "Baccalauréat Sciences Physique-Chimie, Mention A.Bien",
    icon: <FaSchool className="text-purple-500 text-3xl" />,
  },
];

function About() {
  return (
    <section className="font-poppins relative isolate px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 min-h-screen flex flex-col items-center overflow-x-hidden">
      
      

      <motion.h2
        className="text-3xl font-bold text-center mb-12 mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Parcours Académique
      </motion.h2>

      {/* Timeline Section */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Barre verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-purple-500 h-full hidden md:block"></div>

        {/* Éléments de la timeline */}
        <div className="space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative flex items-center ${
                index % 2 === 0
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse"
              }`}
            >
              {/* Icône */}
              <div className="bg-gray-900 p-3 rounded-full border-4 border-purple-500 z-10">
                {item.icon}
              </div>

              {/* Contenu */}
              <div
                className={`bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg max-w-[90%] md:max-w-sm ${
                  index % 2 === 0
                    ? "md:ml-8 text-center md:text-left"
                    : "md:mr-8 text-center md:text-right"
                }`}
              >
                <h3 className="text-lg md:text-m font-semibold">{item.year}</h3>
                <h4 className="text-md md:text-m mt-2">{item.title}</h4>
                <p className="text-sm mt-1 text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
