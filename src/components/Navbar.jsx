

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "../styles/Navbar.css"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="navbar-container">
        <motion.div className="logo" variants={itemVariants}>
          <a href="#home">
            Sujan<span>Bhattarai</span>
          </a>
        </motion.div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <motion.ul variants={navVariants}>
            <motion.li variants={itemVariants}>
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                Skills
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar

