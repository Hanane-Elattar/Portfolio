import React from "react";
import { motion } from "framer-motion";
import js from "../assets/js.png"; 
import business from "../assets/business.png";
import scrum from "../assets/scrum.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import git from "../assets/git.png";

const CertifCard = ({ title, description, image, liveLink }) => {
  const hasLink = Boolean(liveLink);

  return (
    <motion.div
      className={`
        group relative rounded-2xl overflow-hidden
        bg-gray-800/40 backdrop-blur-sm border border-purple-800/30
        shadow-lg shadow-black/30
        transition-all duration-500 ease-out
        ${hasLink 
          ? "hover:shadow-purple-900/50 hover:border-purple-600/40 hover:-translate-y-2 cursor-pointer" 
          : "opacity-70 cursor-not-allowed"}
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
    >
      <a
        href={hasLink ? liveLink : "#"}
        target={hasLink ? "_blank" : ""}
        rel={hasLink ? "noopener noreferrer" : ""}
        className="block h-full"
      >
        {/* Image zone */}
        <div className="relative h-60 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          {/* Overlay gradient sombre + purple accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
          
          {/* Hover reveal */}
          <div className="absolute inset-0 bg-purple-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <p className="text-white text-base sm:text-lg font-medium px-6 text-center tracking-wide drop-shadow-lg">
              {hasLink ? "Voir la certification" : "Lien indisponible"}
            </p>
          </div>

          {/* Badge discret */}
          {hasLink && (
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-purple-700/70 text-white text-xs font-medium rounded-full border border-purple-500/20 shadow-sm">
              Certifié
            </div>
          )}
        </div>

        {/* Texte */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors mb-3 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

const CertificationsGrid = () => {
  const certs = [
    { title: "JavaScript Essentials 1 – Cisco Networking Academy", description: "Bases du développement JavaScript pour la création d'applications web interactives.", image: js, liveLink: "/js.pdf" },
    { title: "Business Intelligence Professional Certification – Certiprof", description: "Compétences en analyse de données et prise de décision stratégique.", image: business, liveLink: "/bi.pdf" },
    { title: "Scrum Foundation Professional Certification – Certiprof", description: "Maîtrise des principes et méthodologies agiles Scrum pour la gestion de projets.", image: scrum, liveLink: "/scrum.pdf" },
    { title: "React Front End Developer – HackerRank", description: "Initiation au développement React pour concevoir des interfaces web dynamiques et modernes.", image: react, liveLink: "/react.pdf" },
    { title: "Certificate of Achievement in SQL – 365 Data Science", description: "Certification obtenue pour la maîtrise des bases de données SQL et la gestion des requêtes complexes.", image: sql, liveLink: "/sql.pdf" },
    { title: "Certificate of Achievement in Git and GitHub – 365 Data Science", description: "Validation des compétences en gestion de versions et collaboration sur des projets à l’aide de Git et GitHub.", image: git, liveLink: "/git.pdf" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {certs.map((cert, i) => (
        <CertifCard key={i} {...cert} />
      ))}
    </div>
  );
};

function Certif() {
  return (
    <section
      id="certifications"
      className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-purple-400 px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Très léger décor de fond (optionnel – reste dans la palette) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-purple-800/5" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-poppins font-extrabold text-center mb-14 sm:mb-16 md:mb-20 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Mes Certifications
        </motion.h2>

        <CertificationsGrid />
      </div>
    </section>
  );
}

export default Certif;