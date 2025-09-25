import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

const Homepage: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const glassVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="homepage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div className="logo-container" variants={itemVariants}>
            <h1 className="logo">
              expl<span className="ai-text">ai</span>ned
            </h1>
          </motion.div>

          <motion.div className="hero-content" variants={itemVariants}>
            <h2 className="hero-title">AI Design Newsletter</h2>
            <p className="hero-description">
              Exploring AI tools for design teams. Every other month, we spotlight an AI tool 
              and explain how teams are using it on their projects.
            </p>
            
            <div className="cta-buttons">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/newsletter" className="btn btn-primary liquid-glass">
                  View Latest Issue
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#about" className="btn btn-secondary liquid-glass">
                  Learn More
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="about-section"
        variants={itemVariants}
      >
        <div className="container">
          <h2>About Explained</h2>
          <div className="about-grid">
            <motion.div 
              className="about-card liquid-glass"
              variants={glassVariants}
              whileHover="hover"
            >
              <h3>Our Mission</h3>
              <p>We help design teams integrate AI into their workflow by showcasing practical tools and real-world applications.</p>
            </motion.div>
            
            <motion.div 
              className="about-card liquid-glass"
              variants={glassVariants}
              whileHover="hover"
            >
              <h3>What We Cover</h3>
              <p>Each issue features an AI tool spotlight, team case studies, and curated resources to help you level up.</p>
            </motion.div>
            
            <motion.div 
              className="about-card liquid-glass"
              variants={glassVariants}
              whileHover="hover"
            >
              <h3>Who We Are</h3>
              <p>We're not AI experts—we're explainers. We gather resources and share stories to help teams learn together.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Issues Section */}
      <motion.section 
        className="issues-section"
        variants={itemVariants}
      >
        <div className="container">
          <h2>Latest Issues</h2>
          <div className="issues-grid">
            <motion.div 
              className="issue-card liquid-glass"
              variants={glassVariants}
              whileHover="hover"
            >
              <div className="issue-header">
                <span className="issue-number">Issue 1</span>
                <span className="issue-date">Sept 2025</span>
              </div>
              <h3>Cursor: Explained</h3>
              <p>Discover how Cursor is revolutionizing the way design teams build and prototype with AI-powered coding.</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/newsletter" className="btn btn-outline liquid-glass">
                  Read Issue
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="issue-card coming-soon liquid-glass"
              variants={glassVariants}
              whileHover="hover"
            >
              <div className="issue-header">
                <span className="issue-number">Issue 2</span>
                <span className="issue-date">Nov 2025</span>
              </div>
              <h3>Coming Soon</h3>
              <p>Stay tuned for our next issue featuring another exciting AI tool for design teams.</p>
              <div className="btn btn-disabled">Coming Soon</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <motion.div 
            className="footer-content liquid-glass"
            variants={glassVariants}
            whileHover="hover"
          >
            <p>&copy; 2025 Explained Newsletter. Built with React and liquid glass effects.</p>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Homepage;
