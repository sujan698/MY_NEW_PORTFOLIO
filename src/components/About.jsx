import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "../styles/About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

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
  };

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>About Me</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-container">
              <img src="/hero.jpg" alt="Sujan Bhattarai" />
            </div>
          </motion.div>

          <motion.div className="about-text" variants={containerVariants}>
            <motion.h3 variants={itemVariants}>
              Full Stack Web Developer
            </motion.h3>
            <motion.p variants={itemVariants}>
              Hello! I'm Sujan Bhattarai, a passionate full stack web developer
              with expertise in building modern web applications. I enjoy
              creating elegant solutions to complex problems.
            </motion.p>
            <motion.p variants={itemVariants}>
              With a strong foundation in both frontend and backend
              technologies, I strive to create seamless user experiences while
              ensuring robust and scalable backend systems.
            </motion.p>
            <motion.p variants={itemVariants}>
              I'm constantly learning and exploring new technologies to stay at
              the forefront of web development. My goal is to build applications
              that are not only functional but also intuitive and enjoyable to
              use.
            </motion.p>

            <motion.div className="about-details" variants={containerVariants}>
              <motion.div className="detail-item" variants={itemVariants}>
                <span className="detail-label">Name:</span>
                <span className="detail-value">Sujan Bhattarai</span>
              </motion.div>
              <motion.div className="detail-item" variants={itemVariants}>
                <span className="detail-label">Email:</span>
                <span className="detail-value">
                  sujanbhattarai699@gmail.com
                </span>
              </motion.div>
              <motion.div className="detail-item" variants={itemVariants}>
                <span className="detail-label">Location:</span>
                <span className="detail-value">Nepal</span>
              </motion.div>
              <motion.div className="detail-item" variants={itemVariants}>
                <span className="detail-label">Availability:</span>
                <span className="detail-value">Full-time</span>
              </motion.div>
            </motion.div>

            <motion.div className="about-buttons" variants={itemVariants}>
              <motion.a
                href="#contact"
                className="btn primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              <motion.a
                href="/sujan_bhattarai_CV.pdf"
                className="btn secondary-btn"
                download="sujan_bhattarai_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
