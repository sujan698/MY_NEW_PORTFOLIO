

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "../styles/Skills.css"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "React.js", level: 60 },
    { name: "Next.js", level: 40 },
    { name: "Node.js", level: 50 },
    { name: "Express.js", level: 40 },
    { name: "NestJS", level: 75 },
    { name: "MongoDB", level: 50 },
    { name: "PostgreSQL", level: 80 },
    { name: "Prisma ORM", level: 75 },
    { name: "Drizzle ORM", level: 30 },
  ]

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "Drizzle ORM",
    "Git",
    "GitHub",
    "GitLab",
    "Next.js",
  ]

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>My Skills</h2>
          <div className="underline"></div>
        </motion.div>

        <motion.p className="section-intro" variants={itemVariants}>
          I've worked with a variety of technologies in the web development world. Here's an overview of my technical
          skills:
        </motion.p>

        <div className="skills-content">
          <motion.div className="skills-bars" variants={containerVariants}>
            <h3>Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <motion.div className="skill-item" key={index} variants={itemVariants}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="skills-cloud" variants={containerVariants}>
            <h3>Technologies & Tools</h3>
            <div className="cloud-container">
              {technologies.map((tech, index) => (
                <motion.div
                  className="tech-tag"
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

