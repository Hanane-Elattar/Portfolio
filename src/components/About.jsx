import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaLaptopCode } from "react-icons/fa";

const timeline = [
  {
    year: "2023-Présent",
    title: "CPF Hassania Casablanca",
    description: "Développement Digital (Fullstack)",
    icon: <FaLaptopCode className="text-purple-500 text-3xl" />,
  },
  {
    year: "2022-2023",
    title: "Faculté Des Science Ben M'sik",
    description: "Département Physique",
    icon: <FaUniversity className="text-purple-500 text-3xl" />,
  },
  {
    year: "2021-2022",
    title: "Baccalauréat Physique-Chimie",
    description: "Mention A.Bien",
    icon: <FaSchool className="text-purple-500 text-3xl" />,
  },
];

function About() {
  return (
    <section className="font-poppins relative isolate px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 min-h-screen flex flex-col items-center overflow-x-hidden">
      
      

      <motion.h2
        className="text-4xl font-bold text-center mb-12 mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Parcours académique
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
                <h3 className="text-lg md:text-xl font-semibold">{item.year}</h3>
                <h4 className="text-md md:text-lg mt-2">{item.title}</h4>
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
