import { useState, useEffect } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      // no stored preference -> default to dark
      return true;
    } catch (e) {
      return true;
    }
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Listen for system theme changes only when user hasn't chosen a theme.
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const mediaQueryListener = (e) => {
      if (!localStorage.getItem("theme")) setIsDark(e.matches);
    };
    userPrefersDark.addEventListener("change", mediaQueryListener);
    return () =>
      userPrefersDark.removeEventListener("change", mediaQueryListener);
  }, []);

  useEffect(() => {
    // Sync React state with localStorage and the document element class
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Note: Direct manipulation of meta tags is not standard in React.
    // The previous code attempting to set the 'theme-color' attribute has been removed.
    // The visual theme change is handled by the 'dark' class on the document element.
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function for smooth scrolling
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu on click
  };

  const experienceData = [
    {
      title: "Junior Robotics Developer",
      company: "N.E.R.D.S",
      details: "NIT Silchar Robotics Club | Sept. 2024 - July 2025",
      bullets: [
        "Built a Line Follower Bot using Arduino UNO & IR sensors, achieving 95% line detection accuracy.",
        "Designed a Robotic Arm with Arduino & Servo Motors, improving object manipulation precision by 30%.",
      ],
    },
    {
      title: "Team Leader",
      company: "Team Hunter",
      details: "Technosis 2023 Competition | Nov. 2023",
      bullets: [
        "Led a 5-member team to design a Rat-in-Maze Bot with Arduino & ultrasonic sensors.",
        "Secured 11th place among 30+ teams in the competition.",
      ],
    },
  ];

  const projectsData = [
    {
<<<<<<< HEAD
=======
      title: "Rainfall Predictor Project",
      tech: "Full-Stack Development + Machine Learning | React, Tailwind CSS, Flask, Python, scikit-learn",
      description:
        "A machine learning project that predicts rainfall using historical weather data, featuring a user-friendly web interface built with React and Tailwind CSS.",
      viewLink: "https://rainfall-predictor-c2m6.onrender.com/",
      githubLink: "https://github.com/YashrajMishra98/Rainfall_Predictor.git",
    },
    {
      title: "Real-Time Bus Tracker",
      tech: "Full-Stack Development | React, Firebase Studio, OpenStreetMap API, Tailwind CSS",
      description:
        "A real-time bus tracking application that provides users with live location updates and estimated arrival times.",
      viewLink: "https://bus-tracking-system-final.vercel.app/",
      githubLink:
        "https://github.com/YashrajMishra98/Bus-Tracking-System-Final-.git",
    },
    {
      title: "AI-Powered GPS Map-Matching & Road Classification System",
      tech: "Machine Learning | Streamlit, GeoPandas, scikit-learn, Python, geospatial ML pipeline with OSMnx",
      description:
        "An AI-powered system for GPS map-matching and road classification, utilizing advanced machine learning techniques and geospatial data processing.",
      githubLink:
        "https://github.com/YashrajMishra98/OSRM_Map_Matching_Model.git",
    },
    {
>>>>>>> master
      title: "Portfolio Project",
      tech: "Full-Stack Development | React, Tailwind CSS",
      description:
        "A fully responsive personal portfolio website with a modern and clean design, showcasing a collection of my projects and skills.",
      viewLink: "https://my-portfolio-eight-khaki-76.vercel.app/",
      githubLink: "https://github.com/YashrajMishra98/My-Portfolio",
    },
    {
      title: "Birthday Project",
      tech: "Web Development | HTML, CSS, JavaScript",
      description:
        "A multi-page, responsive website with interactive UI and dynamic modules like a gift box, memory gallery, and a matching game.",
      viewLink: "https://web-dev-g-d-s-c.vercel.app/",
      githubLink: "https://github.com/YashrajMishra98/Web-Dev-G.D.S.C.",
    },
    {
      title: "Rat-In-Maze Bot",
      tech: "Robotics Project | C++, Arduino UNO",
      description:
        "An autonomous pathfinding bot using an algorithm implemented in C++ and real-time sensor inputs for obstacle avoidance.",
      githubLink: "https://github.com/YashrajMishra98/Rat-In-Maze-Project",
    },
    {
      title: "Password Generator",
      tech: "Web Development | React, Tailwind CSS",
      description:
        "A secure and customizable password generator web application built with React, allowing users to create strong passwords with various options.",
      viewLink: "https://password-generator-alpha-bay.vercel.app/",
      githubLink: "https://github.com/YashrajMishra98/Password-Generator",
    },
    {
      title: "Line Follower Bot",
      tech: "Robotics Project | Arduino UNO, C++",
      description:
        "An autonomous bot built to follow a black line on a white surface with high accuracy, using an Arduino and IR sensors for navigation and path detection.",
      githubLink: "https://github.com/YashrajMishra98/Line-Follower-Bot.git",
    },
    {
      title: "Currency Converter",
      tech: "Web Development | React, API",
      description:
        "A real-time currency conversion tool that fetches the latest exchange rates from an API to provide accurate conversions between different currencies.",
      viewLink: "https://currency-converter-nine-blond.vercel.app/",
      githubLink: "https://github.com/YashrajMishra98/Currency-Converter",
    },
    {
      title: "Todo List",
      tech: "Web Development | React, Tailwind CSS",
      description:
        "A classic and user-friendly todo list application with features to add, remove, and mark tasks as complete, built for a clean user experience.",
      viewLink: "https://todo-list-nine-xi-57.vercel.app/",
      githubLink: "https://github.com/YashrajMishra98/Todo-List",
    },
    {
      title: "Weather App",
      tech: "Web Development | JavaScript, API",
      description:
        "A dynamic weather application that fetches and displays real-time weather data for any city in the world using a third-party API.",
      viewLink: "https://projects-javascript-seven.vercel.app/",
      githubLink:
        "https://github.com/YashrajMishra98/Projects-Javascript/tree/main/Weather%20App",
    },
    {
      title: "E-commerce Cart Page",
      tech: "Web Development | JavaScript, DOM",
      description:
        "A feature-rich e-commerce cart page that allows users to add, remove, and update quantities of products, with real-time total price calculation.",
      viewLink: "https://projects-javascript-c6gn.vercel.app/",
      githubLink:
        "https://github.com/YashrajMishra98/Projects-Javascript/tree/main/E-Commerce%20Cart%20Page",
    },
  ];

  const skillsData = [
    {
      category: "Languages",
      skills: ["C", "C++", "Python", "JavaScript"],
    },
    {
      category: "Frameworks",
      skills: [
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Bootstrap",
        "React",
        "NumPy",
        "Matplotlib",
      ],
    },
    {
      category: "Domains",
      skills: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Web Development",
        "Robotics",
      ],
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "VS Code", "Git", "GitHub", "Arduino IDE"],
    },
  ];

  const profileData = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Itsmeym/",
      svg: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>LeetCode icon</title>
          <path d="M12.001 0a12 12 0 100 24 12 12 0 000-24zm0 2.222a9.778 9.778 0 110 19.556 9.778 9.778 0 010-19.556zM13.298 6.643v1.543l-3.376 3.013-1.071-.912v1.517l2.846 2.55-2.73 2.656h-1.358v1.31h1.358c.287 0 .546-.115.74-.326l2.365-2.268 2.115 1.956v2.668h1.288v-2.668l-2.115-1.956 3.12-2.784v-1.39l-3.12 2.784v-2.744h-1.288z" />
        </svg>
      ),
    },
    {
      name: "GeeksForGeeks",
      url: "https://geeksforgeeks.org/user/yashrajmi9mqh/",
      svg: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GeeksForGeeks icon</title>
          <path d="M11.96 0c.712.006 1.424.015 2.133.023l.115.006.115.01v4.733c-.152.006-.3.013-.456.02-1.233.056-2.467.126-3.7.19a4.838 4.838 0 01-3.606-.99c-.773-.666-1.127-1.464-.81-2.072.196-.38.56-.632.96-.826l.192-.093c.31-.15.656-.226.966-.312l.147-.04.14-.02h.163zm7.04.124v4.526h-3.414V.124h3.414zm-4.72 1.43v2.793h-2.19v-2.792h2.19zM19.148 6.516v17.48H4.852V6.516h14.296zM15.4 8.76v2.185h-6.8V8.76h6.8zm-6.8 3.525v2.222h6.8v-2.222h-6.8zm6.8 3.497v2.257h-6.8v-2.257h6.8z" />
        </svg>
      ),
    },
    {
      name: "Coding Ninjas",
      url: "https://www.codingninjas.com/studio/profile/926ed682-blbd-4d45-bae3-7a895384e519",
      svg: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Coding Ninjas icon</title>
          <path d="M10.975 14.133c.314.307.822.307 1.136 0l2.352-2.307c.314-.307.314-.805 0-1.112l-1.936-1.897c-.314-.307-.822-.307-1.136 0l-.36.353c-.314.308-.314.806 0 1.113L10.366 11.66l-1.144 1.12c-.314.307-.314.805 0 1.112l.36.353zM12 0c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12-6.627 0-12-5.373-12-12 0-6.627 5.373-12 12-12zm-3.355 17.587c.361.353.945.353 1.306 0l4.084-3.999c.361-.353.361-.926 0-1.28L12 10.457l-.025-.024-2.67-2.612c-.361-.354-.945-.354-1.306 0l-.36.353c-.36.354-.36.927 0 1.28L9.58 11.66l-1.996 1.95c-.36.354-.36.927 0 1.28l.36.353z" />
        </svg>
      ),
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/yashrajmishra067",
      svg: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Codeforces icon</title>
          <path d="M11.96 0c.712.006 1.424.015 2.133.023l.115.006.115.01v4.733c-.152.006-.3.013-.456.02-1.233.056-2.467.126-3.7.19a4.838 4.838 0 01-3.606-.99c-.773-.666-1.127-1.464-.81-2.072.196-.38.56-.632.96-.826l.192-.093c.31-.15.656-.226.966-.312l.147-.04.14-.02h.163zm7.04.124v4.526h-3.414V.124h3.414zm-4.72 1.43v2.793h-2.19v-2.792h2.19zM19.148 6.516v17.48H4.852V6.516h14.296zM15.4 8.76v2.185h-6.8V8.76h6.8zm-6.8 3.525v2.222h6.8v-2.222h-6.8zm6.8 3.497v2.257h-6.8v-2.257h6.8z" />
        </svg>
      ),
    },
  ];

  const certificationsData = [
    {
      title: "Generative AI Course",
      issuer: "Google (GDSC)",
      link: "https://drive.google.com/file/d/18y94wnJhkHopuvGoPchwXUwbc1amS6ue/view?usp=sharing",
    },
    {
      title: "Supervised Machine Learning",
      issuer: "Stanford University (Coursera)",
      link: "https://drive.google.com/file/d/1Qu60kC4XYfm19T1-O0cuW9Ig0BDctnOj/view?usp=sharing",
    },
    {
      title: "Dynamic Programming (DP) Camp",
      issuer: "Algo University",
      link: null,
    },
    {
      title: "Graph Camp",
      issuer: "Algo University",
      link: null,
    },
  ];

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 scroll-smooth">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md py-4 transition-colors">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="text-xl font-bold text-gray-800 dark:text-gray-200"
          >
            Yashraj Mishra
          </a>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "#about")}
                className="hover:text-green-500 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, "#experience")}
                className="hover:text-green-500 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="hover:text-green-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, "#skills")}
                className="hover:text-green-500 transition-colors"
              >
                Skills
              </a>
              <a
                href="#profiles"
                onClick={(e) => scrollToSection(e, "#profiles")}
                className="hover:text-green-500 transition-colors"
              >
                Profiles
              </a>
              <a
                href="#certifications"
                onClick={(e) => scrollToSection(e, "#certifications")}
                className="hover:text-green-500 transition-colors"
              >
                Certifications
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="hover:text-green-500 transition-colors"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1Ym57iGFOF0Ad0OmHDl2kvXQDppqZcbqL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                Resume
              </a>
            </div>
            <button
              id="theme-switcher"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            >
              <svg
                id="moon-icon"
                className={`w-6 h-6 text-gray-600 dark:text-gray-400 ${
                  isDark ? "hidden" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="sun-icon"
                className={`w-6 h-6 text-yellow-500 dark:text-yellow-400 ${
                  isDark ? "" : "hidden"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 7a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-8 2a1 1 0 100-2H6a1 1 0 100 2H5zm12 2a1 1 0 10-2 0v1a1 1 0 102 0v-1zm-4-4a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zm-3 7a1 1 0 01-1 1H7a1 1 0 110-2h1a1 1 0 011 1zm-4-4a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm12-4a1 1 0 100-2h-1a1 1 0 100 2h1zM5.333 3.333a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM16.667 16.667a1 1 0 01-1.414 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414zM18 10a8 8 0 11-16 0 8 8 0 0116 0zM4.667 16.667a1 1 0 101.414 1.414l.707-.707a1 1 0 10-1.414-1.414l-.707.707zM16.667 4.667a1 1 0 10-1.414-1.414l-.707.707a1 1 0 101.414 1.414l.707-.707z" />
              </svg>
            </button>
            <button
              id="menu-button"
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div
          id="mobile-menu"
          className={`${
            isMenuOpen ? "" : "hidden"
          } md:hidden bg-white/90 dark:bg-gray-900/90 py-2 transition-colors`}
        >
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "#about")}
            className="block py-2 px-6 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, "#experience")}
            className="block py-2 px-6 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            className="block py-2 px-6 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "#skills")}
            className="block py-2 px-6 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Skills
          </a>
          <a
            href="#profiles"
            onClick={(e) => scrollToSection(e, "#profiles")}
            className="block py-2 px-6 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Profiles
          </a>
          <a
            href="#certifications"
            onClick={(e) => scrollToSection(e, "#certifications")}
            className="block py-2 px-6 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Certifications
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="block py-2 px-6 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1Ym57iGFOF0Ad0OmHDl2kvXQDppqZcbqL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-6 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Resume
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center p-6 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-12">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-green-500 flex-shrink-0">
            <img
              src="/My-Photo.jpeg"
              alt="Yashraj Mishra"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-200">
              Hi, I'm <span className="text-gradient">Yashraj Mishra</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Electronics and Communication Engineering Student
            </p>
            <p className="mt-2 text-md md:text-lg text-gray-500 dark:text-gray-500">
              B.Tech in ECE at National Institute of Technology, Silchar
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1Ym57iGFOF0Ad0OmHDl2kvXQDppqZcbqL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gradient mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            I am a passionate and results-driven Electronics and Communication
            Engineering student at NIT Silchar, with a strong foundation in
            robotics and web development. My hands-on experience includes
            building autonomous bots and dynamic web applications. I am
            proficient in C++, JavaScript, and Python, with a beginner's grasp
            of Machine Learning and full-stack frameworks. I am a team leader
            and problem solver, with a proven ability to deliver innovative
            solutions.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {experienceData.map((job, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {job.title} |{" "}
                  <span className="text-green-500">{job.company}</span>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {job.details}
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {project.tech}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  {project.description}
                </p>
                <div className="flex space-x-4 mt-4">
                  {project.viewLink && (
                    <a
                      href={project.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                    >
                      View Project
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section
        id="profiles"
        className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">
            Coding Profiles
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {profileData.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-500 hover:text-green-600 transition-colors"
              >
                {profile.svg}
                <span>{profile.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certificationsData.map((cert, index) => (
              <a
                key={index}
                href={cert.link || "#"}
                target={cert.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 block ${
                  !cert.link ? "cursor-default" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {cert.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {cert.issuer}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors"
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gradient mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Feel free to connect with me to discuss new opportunities or just to
            say hi!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="mailto:yashraj_ug_23@ece.nits.ac.in"
              className="flex items-center space-x-2 text-green-500 hover:text-green-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9"
                ></path>
              </svg>
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/yashraj-mishra-62a353292"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-500 hover:text-green-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/YashrajMishra98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-500 hover:text-green-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.257.82-.578 0-.284-.01-1.037-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.068 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.777.42-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.465-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.536 11.536 0 016.002 0c2.293-1.552 3.301-1.23 3.301-1.23.653 1.652.24 2.871.117 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.42.36.812 1.12.812 2.247 0 1.604-.015 2.895-.015 3.283 0 .322.218.694.825.578C20.565 21.79 24 17.29 24 12 24 5.373 18.627 0 12 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-6 text-center text-gray-500 dark:text-gray-500 text-sm transition-colors">
        <p>
          Designed and built with <span className="text-red-500">&hearts;</span>{" "}
          by Yashraj Mishra
        </p>
      </footer>
    </div>
  );
};

export default App;
