"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import SocialIcons from "@/components/social-icons";
import AnimatedComment from "@/components/animated-comment";
import LaunchIcon from "@/components/launchicon";
import { useMyContext } from "@/context/index";

// Define the About component
const About = () => {
  const { setActiveTab } = useMyContext();
  useEffect(() => {
    document.title = "About";
  });

  useEffect(() => {
    // Set the initial active tab when the component mounts
    setActiveTab(window.location.pathname);
  }, []);
  return (
    <div id="page--about">
      <h1 className="main-heading">
        about(<span>me</span>)
      </h1>
      {/* Animated container for social icons and CV download link */}
      <motion.div
        className="container--links"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <SocialIcons />
        {/* CV download link */}
        <p className="container--download-cv">
          Download my
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            href="/resume.pdf"
            className="download-cv-link"
          >
            CV{" "}
            <span aria-hidden="true">
              <LaunchIcon />
            </span>
          </a>
        </p>
      </motion.div>
      <motion.p
        className="about-intro"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Full-stack developer with a passion for crafting immersive user
        experiences, driven by a love for visual arts, fashion and technology.
      </motion.p>
      <AnimatedComment>{`// Australia`}</AnimatedComment>
      {/* Grid container for skills and languages */}
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 900 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Heading for skills */}
        <h3 className="about-grid-heading">Main skills</h3>
        {/* List of skills */}
        <ul className="columns skills">
          <li>Web app architecture, Strategic thinking</li>
          <li>TypeScript, JavaScript, React, NextJS, Node, PHP</li>
          <li>Emacs, VSCode, Vim, Linux, Git </li>
          <li>AWS, Firebase, SQL, CI/CD</li>
        </ul>
        {/* Heading for languages */}
        <h3 className="about-grid-heading">Languages</h3>
        {/* List of languages */}
        <ul className="columns languages">
          <li>
            <span className="comment">{`// fluent`}</span>
            <br />
            <span className="language">
              <em className="tag">en-AU</em> English
              <br />
            </span>
            <span className="language">
              <em className="tag">ar-SD</em> Arabic
              <br />
            </span>
          </li>
          <li>
            <span className="comment">{`// basic`} </span>
            <br />
            <span className="language">
              <em className="tag">es-ES</em> Spanish
              <br />
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};
export default About;
