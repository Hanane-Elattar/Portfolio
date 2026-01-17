import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import js from "../assets/js.png"; 
import business from "../assets/business.png";
import scrum from "../assets/scrum.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import git from "../assets/git.png";


const ProjectCard = ({ title, description, image, liveLink }) => {
  const isLiveLinkAvailable = Boolean(liveLink);

  return (
    <motion.div
      className={`rounded-lg shadow-xl overflow-hidden transition-transform transform ${
        isLiveLinkAvailable ? "hover:scale-105" : "opacity-70"
      }`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <a
        href={isLiveLinkAvailable ? liveLink : "#"}
        target={isLiveLinkAvailable ? "_blank" : ""}
        rel={isLiveLinkAvailable ? "noopener noreferrer" : ""}
        className={`block ${isLiveLinkAvailable ? "cursor-pointer" : "cursor-not-allowed"}`}
      >
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img src={image} alt={title} className="w-full h-52 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">
              {isLiveLinkAvailable ? "Voir la certification" : "Lien indisponible"}
            </p>
          </div>
        </motion.div>
      </a>

      <div className="p-4 flex flex-col justify-between bg-gray-800 relative">
        <h3 className="text-xl font-bold text-purple-500 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
      </div>
    </motion.div>
  );
};

const ProjetSection = () => {
  const projects = [
    {
      title: "JavaScript Essentials 1 – Cisco Networking Academy ",
      description: "Bases du développement JavaScript pour la création d'applications web interactives.",
      image: js,
      liveLink: "/js.pdf",
    },
    {
      title: "Business Intelligence Professional Certification – Certiprof",
      description: "Compétences en analyse de données et prise de décision stratégique.",
      image: business,
      liveLink: "/bi.pdf",
    },
    {
      title: "Scrum Foundation Professional Certification – Certiprof",
      description: "Maîtrise des principes et méthodologies agiles Scrum pour la gestion de projets.",
      image: scrum,
      liveLink: "/scrum.pdf",
    },
    {
      title: "React Front End Developer – HackerRank",
      description: "Initiation au développement React pour concevoir des interfaces web dynamiques et modernes.",
      image: react, 
      liveLink: "/react.pdf", 
    },
    {
      title: "Certificate of Achievement in SQL – 365 Data Science",
      description: "Certification obtenue pour la maîtrise des bases de données SQL et la gestion des requêtes complexes.",
      image: sql, 
      liveLink: "/sql.pdf", 
    },
    {
      title: "Certificate of Achievement in Git and GitHub – 365 Data Science",
      description: "Validation des compétences en gestion de versions et collaboration sur des projets à l’aide de Git et GitHub.",
      image: git, 
      liveLink: "/git.pdf", 
    },


    
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          liveLink={project.liveLink}
        />
      ))}
    </motion.div>
  );
};

function Certif() {
  return (
    <section
      id="projets"
      className="font-poppins px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 min-h-screen flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-12 mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Certification
      </motion.h2>

      <ProjetSection />
    </section>
  );
}

export default Certif;
