import React, { useState, useEffect } from "react";

// Main App component
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Sync with system preference if available
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // --- Data from the user's resume ---
  const profile = {
    name: "Yashraj Mishra",
    github: "YashrajMishra98",
    linkedin: "https://www.linkedin.com/in/yashraj-mishra-62a353292/",
    email: "yashraj_ug_23@ece.nits.ac.in",
    mobile: "+91-9864092548",
    bio: "An aspiring Electronics and Communication Engineering student with a passion for robotics and full-stack development. Experienced in building responsive web applications and implementing autonomous systems.",
  };

  const education = [
    {
      institution: "National Institute of Technology, Silchar",
      degree: "B.Tech in Electronics and Communication Engineering",
      cgpa: "7.85/10",
      years: "2023 - Present",
      location: "Assam, India",
    },
    {
      institution: "Saraswati Vidya Mandir, Deoria",
      degree: "Higher Secondary (10+2)",
      percentage: "89.2%",
      years: "2022",
      location: "Uttar Pradesh, India",
    },
    {
      institution: "Saraswati Vidya Mandir, Deoria",
      degree: "High School",
      percentage: "88%",
      years: "2020",
      location: "Uttar Pradesh, India",
    },
  ];

  const experience = [
    {
      title: "Junior Member",
      company: "N.E.R.D.S",
      years: "Sept. 2024 - July 2025",
      location: "Remote",
      description:
        "Built a Line Follower Bot using Arduino UNO & IR sensors, achieving 95% line detection accuracy and reducing response time by 20%. Designed a Robotic Arm with Arduino & Servo Motors, improving object manipulation precision by 30%.",
    },
    {
      title: "Team Leader",
      company: "Team Hunter",
      years: "Nov. 2023",
      location: "Remote",
      description:
        "Led a 5-member team to design a Rat-in-Maze Bot with Arduino & ultrasonic sensors, securing 11th place among 30+ teams in Technosis 2023.",
    },
  ];

  const projects = [
    {
      title: "AI-Driven Roadway Classification for Vehicle Tracking",
      description:
        "A group project from September 2024. Achieved 85% classification accuracy in roadway detection using XGBoost and built an interactive Streamlit dashboard with real-time roadway classification and vehicle tracking.",
      techStack:
        "Python, scikit-learn, XGBoost, Pandas, NumPy, GeoPandas, OSMnx, PyProj, Kalman Filters, Streamlit, Matplotlib.",
      link: null,
      github: "https://github.com/YashrajMishra98/OSRM_Map_Matching_Model.git",
    },
    {
      title: "Birthday Project",
      description:
      "A fully responsive multi-page website with an interactive UI, including a gift box, memory gallery, matching game, and a media player.",
      techStack: "HTML, CSS, JavaScript",
      link: "https://web-dev-g-d-s-c.vercel.app/",
      github: "https://github.com/YashrajMishra98/Web-Dev-G.D.S.C.",
    },
    {
      title: "My-Portfolio",
      description:
        "A personal portfolio website built to showcase my projects, skills, and experience. This site is fully responsive and features a modern, clean design.",
      techStack: "React, Tailwind CSS",
      github: "https://github.com/YashrajMishra98/My-Portfolio.git",
    },
    {
      title: "Rat-In-Maze Bot",
      description:
        "An autonomous pathfinding robot designed with C++ and Arduino UNO. Implemented real-time sensor inputs for obstacle avoidance and navigation.",
      techStack: "C++, Arduino UNO, Ultrasonic Sensors",
      github: "https://github.com/YashrajMishra98/Rat-In-Maze-Project",
    },
  ];

  const skills = {
    languages: ["C", "C++", "Python", "JavaScript"],
    frameworks: ["React", "Node.js", "Express.js"],
    tools: ["VS Code", "Git", "GitHub", "Arduino IDE"],
    libraries: ["Tailwind CSS", "Bootstrap", "NumPy", "Matplotlib"],
    softSkills: [
      "Leadership",
      "Adaptability",
      "Team Work",
      "Communication",
      "Time Management",
    ],
  };

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Itsmeym/",
    },
    {
      name: "Geeks For Geeks",
      url: "https://www.geeksforgeeks.org/user/yashrajmi9mqh/",
    },
    {
      name: "Coding Ninja",
      url: "https://www.naukri.com/code360/profile/926ed682-blbd-4d45-bae3-7a895384e519",
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/yashrajmishra067",
    },
  ];

  // Reusable Section component with a stylish header
  const Section = ({ title, children }) => (
    <div className="mb-8 animate-fadeInUp">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 pb-1 inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-500 transition-colors duration-300 transform-gpu hover:scale-105">
        {title}
      </h2>
      {children}
    </div>
  );

  // Dynamic class names for dark mode toggle
  const toggleIconPath = darkMode ? (
    <path d="M12 2a1 1 0 011 1v1.996a1 1 0 01-2 0V3a1 1 0 011-1zm0 17.004a1 1 0 01-1-1v-2.001a1 1 0 012 0v2.001a1 1 0 01-1 1zm8-8a1 1 0 01-1 1h-1.998a1 1 0 010-2h2a1 1 0 011 1zM4 12a1 1 0 01-1 1H.998a1 1 0 010-2H3a1 1 0 011 1zm1.758-6.756a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l1.414-1.414zM16.828 16.828a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l1.414-1.414zM16.828 5.636a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 0l1.414 1.414zM5.636 16.828a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 0l1.414 1.414z" />
  ) : (
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
  );

  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-gray-200" : "bg-stone-50 text-gray-800"
      } min-h-screen font-sans p-4 sm:p-8 transition-colors duration-500`}
    >
      {/* Tailwind's JIT mode allows us to define keyframes and animations here. */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-delay-1 { animation-delay: 0.2s; }
        .animate-delay-2 { animation-delay: 0.4s; }
        .animate-delay-3 { animation-delay: 0.6s; }
      `}</style>

      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 shadow-md hover:scale-110 active:scale-95"
        aria-label="Toggle dark mode"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          {toggleIconPath}
        </svg>
      </button>

      <div
        className={`${
          darkMode ? "bg-slate-900" : "bg-white"
        } max-w-6xl mx-auto rounded-3xl shadow-2xl p-6 sm:p-10 transition-colors duration-500`}
      >
        {/* Header Section with animation */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-8 pb-4 border-b-2 border-teal-400 dark:border-amber-500 animate-fadeInUp">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-5xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-500 tracking-wider transition-colors duration-300">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 max-w-lg transition-colors duration-300">
              {profile.bio}
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end text-sm text-gray-500 dark:text-gray-400">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center space-x-2 hover:text-teal-400 dark:hover:text-amber-500 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 group-hover:animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.003 5.884L10 9.882l-8.005 3.992L2.003 5.884zM22 6c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6zM4 6h16l-8 5-8-5z"></path>
              </svg>
              <span>{profile.email}</span>
            </a>
            <span className="flex items-center space-x-2 mt-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.514 0 10-4.486 10-10S17.514 2 12 2zm3.235 15.362l-.768-1.55c-.214-.432-.638-.72-1.096-.72h-1.638c-.458 0-.882.288-1.096.72l-.768 1.55C7.962 17.584 7 19.38 7 21c0 .552.448 1 1 1h8c.552 0 1-.448 1-1 0-1.62-.962-3.416-2.765-4.638zM12 7c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
              </svg>
              <span>{profile.mobile}</span>
            </span>
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 mt-1 hover:text-teal-400 dark:hover:text-amber-500 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 group-hover:animate-bounce"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.305 3.493.998.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.802.576 4.765-1.589 8.196-6.086 8.196-11.385C24 5.373 18.627 0 12 0z"></path>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 mt-1 hover:text-teal-400 dark:hover:text-amber-500 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.769s.784-1.769 1.75-1.769 1.75.79 1.75 1.769-.783 1.769-1.75 1.769zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </header>

        {/* Main Content Area: Two-Column Layout for larger screens */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column (Sidebar) */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-8 animate-fadeInUp animate-delay-1">
            {/* Coding Profiles Section (moved to sidebar) */}
            <Section title="Coding Profiles">
              <div className="grid grid-cols-1 gap-4">
                {codingProfiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-teal-400 dark:text-amber-500 hover:text-teal-600 dark:hover:text-amber-300 transition-colors duration-300 bg-gray-100 dark:bg-gray-800 rounded-xl p-3 shadow-lg hover:shadow-2xl transform hover:scale-[1.05]"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-12v.998c0 1.103-.897 2-2 2H5.002c-1.103 0-2-.897-2-2v-1.002c0-1.103.897-2 2-2H8c1.103 0 2 .897 2 2zM19 12h-2.998c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2H19c1.103 0 2 .897 2 2v1c0 1.103-.897 2-2 2z"></path>
                    </svg>
                    <span className="text-base font-medium">
                      {profile.name}
                    </span>
                  </a>
                ))}
              </div>
            </Section>
          </div>

          {/* Right Column (Main Content) */}
          <div className="w-full lg:w-2/3 flex flex-col space-y-8 animate-fadeInUp animate-delay-2">
            {/* Education Section */}
            <Section title="Education">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.01]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.years}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {edu.location}
                  </p>
                  {edu.cgpa && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      CGPA: {edu.cgpa}
                    </p>
                  )}
                  {edu.percentage && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Percentage: {edu.percentage}
                    </p>
                  )}
                </div>
              ))}
            </Section>

            {/* Skills Section (now on the right side) */}
            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {Object.entries(skills).map(([category, items], index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl w-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.01]"
                  >
                    <h4 className="text-lg font-semibold capitalize mb-2 text-teal-400 dark:text-amber-500">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h4>
                    <ul className="list-none p-0 m-0">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2 transition-colors duration-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Experience Section */}
            <Section title="Experience">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.01]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {exp.title} at {exp.company}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.years}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </Section>

            {/* Projects Section */}
            <Section title="Projects">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.01]"
                >
                  <h3 className="text-xl font-semibold text-teal-400 dark:text-amber-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span className="font-bold">Tech Stack:</span>{" "}
                    {project.techStack}
                  </p>
                  <div className="mt-2 flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 dark:text-amber-500 hover:text-teal-600 dark:hover:text-amber-300 transition-colors duration-300 flex items-center space-x-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.305 3.493.998.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.802.576 4.765-1.589 8.196-6.086 8.196-11.385C24 5.373 18.627 0 12 0z"></path>
                      </svg>
                      <span>GitHub</span>
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-amber-500 hover:text-teal-600 dark:hover:text-amber-300 transition-colors duration-300 flex items-center space-x-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.096 17.58l-5.619-5.607 1.409-1.407 4.21 4.216 7.009-7.001 1.409 1.409-8.418 8.418z"></path>
                        </svg>
                        <span>Live Link</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
