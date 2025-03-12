

import { motion } from "framer-motion"
import "../styles/Loader.css"

const Loader = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 0.8,
      },
    },
  }

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  }

  return (
    <div className="loader">
      <motion.div className="loader-container" variants={containerVariants} initial="initial" animate="animate">
        <div className="loader-content">
          <motion.div className="loader-dots">
            <motion.div className="dot" variants={dotVariants}></motion.div>
            <motion.div className="dot" variants={dotVariants}></motion.div>
            <motion.div className="dot" variants={dotVariants}></motion.div>
            <motion.div className="dot" variants={dotVariants}></motion.div>
            <motion.div className="dot" variants={dotVariants}></motion.div>
          </motion.div>

          <motion.h2 className="loader-text" variants={textVariants}>
            Welcome to my portfolio
          </motion.h2>
        </div>
      </motion.div>
    </div>
  )
}

export default Loader

