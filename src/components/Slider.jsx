import { useState } from "react";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 4;

const PaginatedSkills = ({ title, skills }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);

  const currentSkills = skills.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full mb-32"
    >
      <h3 className="text-3xl font-bold text-center mb-12 font-poppins bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h3>

      {/* Grille compétences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {currentSkills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -12, rotate: 3 }}
            className="group relative bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Effet brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <img
              src={skill.img}
              alt={skill.name}
              className="relative z-10 w-28 h-28 object-contain mx-auto mb-4 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <p className="relative z-10 text-lg font-semibold text-center text-white tracking-wide">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Pagination ultra moderne : seulement flèches + barre de progression */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center mt-16 space-y-6">
          {/* Barre de progression fine */}
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${(currentPage / totalPages) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Flèches élégantes */}
          <div className="flex items-center gap-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`group p-4 rounded-full transition-all duration-400 ${
                currentPage === 1
                  ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                  : "bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-110 shadow-2xl"
              }`}
              aria-label="Précédent"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicateur discret page actuelle */}
            <span className="text-gray-400 text-sm font-medium tracking-wider">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`group p-4 rounded-full transition-all duration-400 ${
                currentPage === totalPages
                  ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                  : "bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-110 shadow-2xl"
              }`}
              aria-label="Suivant"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const FullSkills = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full mb-32"
    >
      {/* Titre avec gradient moderne */}
      <h3 className="text-3xl font-bold text-center mb-12 font-poppins bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h3>

      {/* Grille complète – même style que les cartes paginées */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -12, rotate: 3 }}
            className="group relative bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default"
          >
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <img
              src={skill.img}
              alt={skill.name}
              className="relative z-10 w-28 h-28 object-contain mx-auto mb-4 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <p className="relative z-10 text-lg font-semibold text-center text-white tracking-wide">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// ──────────────────────────────
// COMPOSANT PRINCIPAL (c’est ici que tu mets tes données)
// ──────────────────────────────
const Slider = () => {
  // ─────────────── TES DONNÉES ICI ───────────────
  const hardSkills = [
    { name: "HTML5", img: "https://clipground.com/images/html5-logo-2.png" },
    { name: "CSS3", img: "https://umerahmad9126.github.io/static/media/css.e31e30fbd381c3f058df.png" },
    { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", img: "https://logodix.com/logo/1764875.png" },
    { name: "Tailwind CSS", img: "https://iconape.com/wp-content/files/an/351546/png/tailwind-css-logo.png" },
    { name: "PHP", img: "https://pngimg.com/uploads/php/php_PNG35.png" },
    { name: "Laravel", img: "https://logospng.org/download/laravel/logo-laravel-icon-1024.png" },
    { name: "MySQL", img: "https://pngimg.com/uploads/mysql/mysql_PNG22.png" },
    { name: "Bootstrap", img: "https://img.icons8.com/?size=100&id=84710&format=png&color=000000" },
    { name: "MongoDB", img: "https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png" },
    { name: "Python", img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" },
    { name: "Docker", img: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_docker-256.png" },
    { name: "Express.js", img: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000" },
    { name: "Redux", img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" },
    { name: "Vite", img: "https://img.icons8.com/?size=100&id=YO3YqSaTOu5K&format=png&color=000000" },
  ];

  const devopsSkills = [
    { name: "Agile", img: "https://freepngdesign.com/content/uploads/images/p-1513-8-agile-software-logo-png-transparent-logo-115960932505.png" },
    { name: "Scrum", img: "https://images.seeklogo.com/logo-png/42/2/scrum-logo-png_seeklogo-428358.png" },
    { name: "GitHub", img: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" },
    { name: "GitLab", img: "https://images.seeklogo.com/logo-png/27/2/gitlab-logo-png_seeklogo-273186.png" },
    { name: "Jira", img: "https://images.seeklogo.com/logo-png/37/2/jira-logo-png_seeklogo-373036.png?v=1957300245846281720" },
    { name: "Figma", img: "https://images.seeklogo.com/logo-png/33/2/figma-logo-png_seeklogo-332042.png?v=1957363170977474520" },
    { name: "Docker Compose", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
    { name: "Postman", img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png" },
  ];

  const officeSkills = [
    { name: "Excel", img: "https://images.seeklogo.com/logo-png/37/2/microsoft-excel-logo-png_seeklogo-370278.png?v=1957363170977474520" },
    { name: "Word", img: "https://images.seeklogo.com/logo-png/37/2/microsoft-word-logo-png_seeklogo-370283.png?v=1957363170977474520" },
    { name: "Power Point", img: "https://img.icons8.com/?size=100&id=G4cbAayb1pvw&format=png&color=000000" },
    { name: "Microsoft Project", img: "https://www.cotec.de/media/88/0a/bf/1697185180/37c863f294a54d9c28c39aefedfda73c.JPG" },
  ];
  // ─────────────────────────────────────────────

  return (
    <div className="relative isolate px-6 lg:px-10 bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 mt-5"
      >
        Mes Compétences
      </motion.h2>

      <PaginatedSkills title="Compétences Techniques" skills={hardSkills} />
      <PaginatedSkills title="Outils et Méthodologies" skills={devopsSkills} />
      <FullSkills title="Compétences Bureautiques" skills={officeSkills} />
    </div>
  );
};

export default Slider;