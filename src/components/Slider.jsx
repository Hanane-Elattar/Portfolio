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

  // Generate random line styles
  const generateRandomLineStyles = () => {
    const randomTop = Math.random() * 100 + "%";
    const randomLeft = Math.random() * 70 + "%";
    const randomRotation = Math.random() * 190 + "deg";
    const randomLength = Math.random() * 70 + "px";
    const randomWidth = Math.random() * 1 + "px"; // Thin lines
    return {
      top: randomTop,
      left: randomLeft,
      transform: `rotate(${randomRotation})`,
      width: randomLength,
      height: randomWidth,
    };
  };

  const lines = Array.from({ length: 10 }).map(() => generateRandomLineStyles());

  return (
    <motion.div
      id={title}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="relative w-full mb-20"
    >
      {/* Decorative lines */}
      {lines.map((lineStyle, index) => (
        <div
          key={index}
          className="absolute bg-purple-500"
          style={lineStyle}
        />
      ))}

      {/* Section Title */}
      <motion.h3
        className="text-1xl font-semibold text-center mb-6 font-poppins"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        {title}
      </motion.h3>

      {/* Slider Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
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
    { name: "MySQL", img: "https://www.vhv.rs/dpng/f/543-5438423_mysql-png.png" },
    { name: "MongoDB", img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" },
    // { name: "Python", img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" },
  ];

  const devopsSkills = [
    { name: "Agile", img: "https://freepngdesign.com/content/uploads/images/p-1513-8-agile-software-logo-png-transparent-logo-115960932505.png" },
    { name: "Scrum", img: "https://seeklogo.com/images/S/scrum-logo-B057CBD9B8-seeklogo.com.png" },
    { name: "Git", img: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" },
    { name: "GitHub", img: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" },
    { name: "GitLab CI/CD", img: "https://seeklogo.com/images/G/gitlab-logo-FAA48EFD02-seeklogo.com.png" },
    // { name: "Docker", img: "https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/IaVNfLY.png" },
  ];

  const officeSkills = [
    { name: "Excel", img: "https://logodownload.org/wp-content/uploads/2020/04/excel-logo-0.png" },
    { name: "Word", img: "https://logodownload.org/wp-content/uploads/2018/10/word-logo-8.png" },
    { name: "Power Point", img: "https://download.logo.wine/logo/Microsoft_PowerPoint/Microsoft_PowerPoint-Logo.wine.png" },
    { name: "Power AMC", img: "https://pic.clubic.com/v1/images/1501549/raw" },
    { name: "Star UML", img: "https://images.sftcdn.net/images/t_app-icon-m/p/4248566e-9137-11e6-a16f-00163ed833e7/2238785144/staruml-icon.png" }

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
      <SliderComponent title="Mes Compétences Collaboratives" skills={devopsSkills} />

      {/* Office Skills Slider */}
      <SliderComponent title="Mes Compétences Bureautiques" skills={officeSkills} />
    </div>
  );
};

export default Slider;
