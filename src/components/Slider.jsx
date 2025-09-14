import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const SliderComponent = ({ title, skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  // Automatic slider rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
  }, [skills.length]);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(title);
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 50) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, title]);

  return (
    <motion.div
      id={title}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="relative w-full mb-20"
    >
      {/* Section Title */}
      <motion.h3
        className="text-2xl font-semibold text-center mb-6 font-poppins"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        {title}
      </motion.h3>

      {/* Slider Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-32 h-32 rounded-lg object-contain transition-transform duration-300"
            />
            <p className="mt-4 text-xl font-semibold text-center font-poppins">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-10 space-x-2">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </motion.div>
  );
};

const Slider = () => {
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
    { name: "Scrum", img: "https://seeklogo.com/images/S/scrum-logo-B057CBD9B8-seeklogo.com.png" },
    { name: "GitHub", img: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" },
    { name: "GitLab CI/CD", img: "https://seeklogo.com/images/G/gitlab-logo-FAA48EFD02-seeklogo.com.png" },
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

  return (
    <div className="relative isolate px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 min-h-screen flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 font-poppins"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Mes Compétences
      </motion.h2>

      {/* Hard Skills Slider */}
      <SliderComponent title="Mes Compétences Techniques" skills={hardSkills} />

      {/* DevOps Skills Slider */}
      <SliderComponent title="Outils et Méthodologies" skills={devopsSkills} />

      {/* Office Skills Slider */}
      <SliderComponent title="Mes Compétences Bureautiques"  skills={officeSkills} />
    </div>
  );
};

export default Slider;
