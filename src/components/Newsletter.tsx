import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Newsletter.css';

const Newsletter: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const glassCardVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.01,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="newsletter-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Effects */}
      <div className="newsletter-background">
        <div className="background-overlay"></div>
        <div className="liquid-orbs">
          <div className="liquid-orb orb-1"></div>
          <div className="liquid-orb orb-2"></div>
          <div className="liquid-orb orb-3"></div>
        </div>
      </div>
      
      <div className="newsletter-content">
        {/* Back to Home */}
        <motion.div 
          className="back-to-home"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/" className="btn btn-secondary liquid-glass">
            ← Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header 
          className="newsletter-header liquid-glass"
          variants={itemVariants}
        >
          <div className="header-content">
            <span className="issue-label">Issue 1</span>
            <div className="logo">
              <span className="logo-text">expl<span className="ai-text">ai</span>ned</span>
            </div>
            <span className="date-label">Sept 2025</span>
          </div>
        </motion.header>

        {/* Welcome Letter */}
        <motion.section 
          className="welcome-section"
          variants={itemVariants}
        >
          <motion.div 
            className="section-card liquid-glass"
            variants={glassCardVariants}
            whileHover="hover"
          >
            <h2 className="section-title">A Message from the Team</h2>
            <div className="content-body">
              <p>Want to integrate AI into your work but don't have the time to dig through articles? Overwhelmed by the number of AI tools and unsure of where to start?</p>
              
              <p>We were too. Which is why we created expl<span className="ai-text">ai</span>ned, a design newsletter dedicated to exploring AI. Every other month, each issue will spotlight an AI tool and explain how teams are using it on their projects. Our goal is to help you up-skill and enhance your projects—one tool at a time. Today, we're spotlighting Cursor.</p>
              
              <p>Note: expl<span className="ai-text">ai</span>ned is not the authority on all things AI. We're here to gather resources to help you learn. We are not experts. We are <em>explainers</em>.</p>
              
              <p>Signed,<br />
              Nicole, Bhavana, Mickayla, & Mason</p>
              
              <div className="team-avatars">
                <motion.div 
                  className="avatar"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>
                <motion.div 
                  className="avatar"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>
                <motion.div 
                  className="avatar"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>
                <motion.div 
                  className="avatar"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Featured Tool Section */}
        <motion.section 
          className="featured-section"
          variants={itemVariants}
        >
          <motion.div 
            className="section-card featured-card liquid-glass"
            variants={glassCardVariants}
            whileHover="hover"
          >
            <div className="section-header">
              <h2 className="section-title">Cursor: expl<span className="ai-text">ai</span>ned</h2>
              <div className="badge liquid-glass">Featured Tool</div>
            </div>
            <div className="divider"></div>
            
            <motion.div 
              className="featured-image liquid-glass"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="cursor-logo-placeholder">
                <motion.div 
                  className="cursor-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  ⚡
                </motion.div>
                <span className="cursor-text">CURSOR</span>
              </div>
            </motion.div>
            
            <div className="content-body">
              <div className="content-block">
                <h3>What is it?</h3>
                <p>Cursor is like traditional coding, but you build with conversation. After all, why make a clickable prototype when you could build your designs in less time?</p>
              </div>
              
              <div className="content-block">
                <h3>Who is it for?</h3>
                <p>Cursor is for all disciplines, but it requires some background knowledge of design principles. It's great for lean teams or discovery engagements with quick deadlines.</p>
              </div>
              
              <div className="content-block">
                <h3>How does it work?</h3>
                <p>Set up can be a bit tricky, but Tharun has given us a handy <a href="https://willowtree.slack.com/archives/C02MTQDGN/p1744386872327919" className="inline-link">step-by-step guide in Slack</a>.</p>
                <p><strong>Note:</strong> You do <em>not</em> need Github to use Cursor. But if you're interested, check out this <a href="https://ben.balter.com/2023/03/02/github-for-non-technical-roles/" className="inline-link">GitHub for beginners article</a>.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Team Spotlights */}
        <motion.section 
          className="spotlights-section"
          variants={itemVariants}
        >
          <motion.div 
            className="section-card liquid-glass"
            variants={glassCardVariants}
            whileHover="hover"
          >
            <div className="section-header">
              <h2 className="section-title">Cursor on Our Projects</h2>
              <div className="badge liquid-glass">Team Spotlights</div>
            </div>
            <div className="divider"></div>
            
            {/* Featured Article */}
            <motion.div 
              className="spotlight-card featured-spotlight liquid-glass"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="spotlight-content">
                <h3>Building Responsible Chatbots</h3>
                <p>Mary Shea Watson shares how Cursor (and her daughter) helped build a responsible chatbot for Fortrea.</p>
                <motion.a 
                  href="#" 
                  className="btn btn-spotlight liquid-glass"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Article
                  <span className="external-icon">↗</span>
                </motion.a>
              </div>
              <div className="spotlight-image">
                <div className="image-placeholder liquid-glass"></div>
              </div>
            </motion.div>
            
            {/* Two Column Spotlights */}
            <div className="spotlight-grid">
              <motion.div 
                className="spotlight-card liquid-glass"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="spotlight-image">
                  <div className="image-placeholder liquid-glass"></div>
                </div>
                <div className="spotlight-content">
                  <h3>Kicking it A.L.T<br />with Zach Bruce</h3>
                  <p>We sat down with Zach as he recapped his last five weeks working on an AI-Lean-Team.</p>
                  <motion.a 
                    href="#" 
                    className="btn btn-spotlight liquid-glass"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Watch Interview
                    <span className="external-icon">↗</span>
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                className="spotlight-card liquid-glass"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="spotlight-image">
                  <div className="image-placeholder liquid-glass"></div>
                </div>
                <div className="spotlight-content">
                  <div className="author-info">
                    <motion.div 
                      className="author-avatar liquid-glass"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    ></motion.div>
                    <h3>Rapid Prototyping for Scooter's Coffee</h3>
                  </div>
                  <p>In this Q&A, Jamie Young shared how he used Cursor to build an interactive game for Scooter's.</p>
                  <motion.a 
                    href="#" 
                    className="btn btn-spotlight liquid-glass"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Article
                    <span className="external-icon">↗</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
            
            {/* Submission CTA */}
            <motion.div 
              className="submission-cta liquid-glass"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <h3>We want to hear how <em>you're</em> using AI tools!</h3>
              <p>Fill out the submission form to share your experience using AI or nominate a peer to be featured in the next issue of expl<span className="ai-text">ai</span>ned. Big or small, your stories help our teams level up.</p>
              <motion.a 
                href="#" 
                className="btn btn-spotlight liquid-glass"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submission Form
                <span className="external-icon">↗</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="newsletter-footer liquid-glass"
          variants={itemVariants}
        >
          <div className="footer-content">
            <span className="footer-text">See you in November!</span>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Newsletter;
