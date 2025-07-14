import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "../styles/Projects.css";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Matrimonial Web Application",
      description:
        "A full stack matrimonial web application with user profiles, search functionality, and messaging.",
      image: "/placeholder.svg?height=300&width=500",
      category: "fullstack",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Nest.js",
        "PostgreSQL",
        "Prisma",
      ],
      link: "#",
      github: "https://github.com/sujan698/Matrimonial-Web-App",
    },
    {
      id: 2,
      title: "Real Estate Management App",
      description:
        "A real estate management application for listing properties, searching.",
      image: "/placeholder.svg?height=300&width=500",
      category: "frontend",
      technologies: ["React", "CSS", "Firebase"],
      link: "",
      github: "https://github.com/sujan698/real-estate-app",
    },
    {
      id: 3,
      title: "Resturant Management System",
      description:
        "A restaurant management system for managing orders, menus, and customer interactions.",
      image: "/placeholder.svg?height=300&width=500",
      category: "frontend",
      technologies: ["React", "CSS"],
      link: "https://foodie-front-theta.vercel.app/",
      github: "https://github.com/sujan698/REAL-ESTATE-HUB",
    },
    {
      id: 4,
      title: "Inventory Management API",
      description:
        "A RESTful API for inventory with authentication, item management, and vendor/customer tracking.",
      image: "/placeholder.svg?height=300&width=500",
      category: "backend",
      technologies: ["Node.js", "Nest.js", "PostgreSQL", "Prisma"],
      link: "#",
      github: "https://github.com/sujan698/Inventry-Management-System",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills (this website).",
      image: "/placeholder.svg?height=300&width=500",
      category: "frontend",
      technologies: ["React", "CSS", "Framer Motion"],
      link: "https://sujan2.com.np",
      github: "https://github.com/sujan698/MY_NEW_PORTFOLIO",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>My Projects</h2>
          <div className="underline"></div>
        </motion.div>

        <motion.p className="section-intro" variants={itemVariants}>
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </motion.p>

        <motion.div className="project-filters" variants={itemVariants}>
          {["all", "frontend", "backend", "fullstack"].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                className="project-card"
                key={project.id}
                variants={projectVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-links">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
