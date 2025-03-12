

import { motion } from "framer-motion"
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>
              Sujan<span>Bhattarai</span>
            </h3>
            <p>Full Stack Web Developer</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="https://github.com/sujan698">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sujan-bhattarai-959649229/">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sujan_642/">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sujan Bhattarai. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

