import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    });

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // In a real application, you would send the form data to a server here
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Contact Me</h2>
          <div className="underline"></div>
        </motion.div>

        <motion.p className="section-intro" variants={itemVariants}>
          Have a question or want to work together? Feel free to reach out to me
          using the form below.
        </motion.p>

        <div className="contact-content">
          <motion.div className="contact-info" variants={containerVariants}>
            <motion.div className="contact-item" variants={itemVariants}>
              <div className="contact-icon">
                <div className="icon-circle">
                  <i className="location-icon"></i>
                </div>
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>Birtamod, Nepal</p>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={itemVariants}>
              <div className="contact-icon">
                <div className="icon-circle">
                  <i className="email-icon"></i>
                </div>
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>sujanbhattarai699@gmail.com</p>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={itemVariants}>
              <div className="contact-icon">
                <div className="icon-circle">
                  <i className="phone-icon"></i>
                </div>
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+977 9824018739</p>
              </div>
            </motion.div>

            <motion.div className="social-links" variants={itemVariants}>
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a
                  href="https://github.com/sujan698"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon github-icon"></div>
                </a>
                <a
                  href="https://www.linkedin.com/in/sujan-bhattarai-959649229/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon linkedin-icon"></div>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon twitter-icon"></div>
                </a>
                <a
                  href="https://www.instagram.com/sujan_642/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon instagram-icon"></div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            variants={containerVariants}
          >
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>

              {formStatus.submitted && (
                <motion.div
                  className={`form-message ${
                    formStatus.success ? "success" : "error"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
