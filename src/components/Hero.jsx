

import { motion } from "framer-motion"
import "../styles/Hero.css"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="animated-bg"></div>
      </div>
      <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 variants={itemVariants}>
          <motion.span className="greeting" variants={itemVariants}>
            Hello, I'm
          </motion.span>
          <motion.span className="name" variants={itemVariants}>
            Sujan Bhattarai
          </motion.span>
        </motion.h1>
        <motion.h2 variants={itemVariants}>Full Stack Web Developer</motion.h2>
        <motion.p variants={itemVariants}>
          I build modern, responsive web applications with cutting-edge technologies.
        </motion.p>
        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a href="#projects" className="btn primary-btn" variants={buttonVariants} whileHover="hover">
            View My Work
          </motion.a>
          <motion.a href="#contact" className="btn secondary-btn" variants={buttonVariants} whileHover="hover">
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="scroll-indicator">
        <motion.div
          className="mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <div className="wheel"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

