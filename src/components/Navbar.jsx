import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecter le défilement et ajouter le flou
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`shadow-md p-3 sm:p-4 bg-transparent text-purple-500 fixed top-0 left-0 right-0 z-50 ${scrolled ? 'backdrop-blur-md bg-gray-900/30' : ''}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Image de profil à gauche */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            {/* <img
              src="/logo.png" // Assurez-vous que le fichier profile.png est bien dans le dossier public
              alt="Logo"
              className="w-30 h-10 rounded-full md:w-30 md:h-30 object-cover cursor-pointer "
            /> */}
          </motion.div>

          {/* Menu hamburger pour mobile */}
          <button
            className="md:hidden text-purple-500 focus:outline-none p-2 hover:bg-purple-500/10 rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>

          {/* Liens de navigation pour desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-10 font-poppins">
            {["Accueil", "Projets", "Contactez-moi"].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative block text-base lg:text-lg text-purple-400 transition group hover:text-purple-300"
              >
                {link}
                {/* Effet visuel du lien */}
                <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-gradient-to-r from-purple-500 to-purple-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Menu mobile */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className={`md:hidden fixed inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-black/80 backdrop-blur-lg flex justify-center items-center z-40 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-center text-purple-500 space-y-6">
            {["accueil", "projets", "contact"].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-xl sm:text-2xl font-bold transition-all duration-300 hover:text-purple-400 hover:scale-110 p-3 rounded-lg hover:bg-purple-500/10"
                onClick={() => setIsOpen(false)} // Ferme le menu lors du clic sur un lien
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
