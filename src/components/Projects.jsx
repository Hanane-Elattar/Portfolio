import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import portfolio from '../assets/image.png';
import store from '../assets/store.png';
import tasks from '../assets/tasks.png';

const ProjectCard = ({ title, description, image, liveLink, githubLink }) => {
  const isLiveLinkAvailable = Boolean(liveLink);

  return (
    <motion.div
      className={`rounded-lg shadow-xl overflow-hidden transition-transform transform ${isLiveLinkAvailable ? "hover:scale-105" : "opacity-70"}`}
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
        {/* Image Section */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p className="text-white text-lg font-semibold">{isLiveLinkAvailable ? "Consultez le projet" : "Lien indisponible"}</p>
          </div>
        </motion.div>
      </a>

      {/* Description Section */}
      <div className="p-4 flex flex-col justify-between bg-gray-800">
        <h3 className="text-xl font-bold text-purple-500 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        {/* GitHub Button */}
        <div className="flex justify-center">
          <a
            href={githubLink || "#"}
            target={githubLink ? "_blank" : ""}
            rel={githubLink ? "noopener noreferrer" : ""}
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              githubLink
                ? "bg-purple-500 text-white hover:bg-purple-400 hover:scale-105"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FaGithub className="text-lg" />
            {githubLink
              ? "Explorez le code source sur GitHub"
              : "Lien GitHub indisponible"}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjetSection = () => {
  const projects = [
    {
      title: "Portfolio Moderne",
      description: "Un portfolio en ligne présentant mes projets, compétences et réalisations, offrant un aperçu complet de mon expertise et de ma passion pour le développement web.",
      image: portfolio,
      liveLink: window.location.href,
      githubLink: "https://github.com/Hanane-Elattar/Portfolio",
    },
    {
      title: "E-Store",
      description: "Une plateforme e-commerce dédiée à la vente de parfums, offrant une large sélection de fragrances pour hommes et femmes, avec une expérience d'achat simple et rapide.",
      image: store,
      liveLink: "https://ecommerce-projet-nu.vercel.app/",
      githubLink: "https://github.com/Hanane-Elattar/Ecommerce-projet",
    },
    {
      title: "Task-Management",
      description: "Une plateforme de gestion des tâches conçue pour organiser, suivre et prioriser efficacement les projets, permettant une collaboration fluide et un suivi en temps réel des progrès.",
      image: tasks,
      liveLink: "https://task-management-taupe-delta.vercel.app/",
      githubLink: "https://github.com/Hanane-Elattar/Task-Management",
    }
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
          githubLink={project.githubLink}
        />
      ))}
    </motion.div>
  );
};

function Projects() {
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
        Projets réalisés
      </motion.h2>

      <ProjetSection />
    </section>
  );
}

export default Projects;
