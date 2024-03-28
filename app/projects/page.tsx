"use client";
import { NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useMyContext } from "@/context/index";
import AnimatedComment from "@/components/animated-comment";
import DownArrow from "@/components/downarrow";
import UpArrow from "@/components/uparrow";

const Projects: NextPage = () => {
  const { showTechnologies, toggleTechnologiesVisibility } = useMyContext();

  // Define project data for each project
  const projectsData = [
    {
      title: "Typa",
      description: "Typing test website",
      image: "/images/typa-preview.png",
      technologies: ["NextJS", "TypeScript", "React", "SQL", "SCSS"],
      github: "https://github.com/psyofrelief/typa",
      liveLink: "https://typa.vercel.app/",
    },
    {
      title: "Shorty",
      description: "URL Shortening Service",
      image: "/images/shorty-preview.png",
      technologies: ["React", "TypeScript", "PHP", "SQL", "AWS"],
      github: "https://github.com/psyofrelief/shorty",
      liveLink: "http://shorty.bio/",
    },
    {
      title: "Portfolio",
      description: "This portfolio website",
      image: "/images/portfolio-preview.png",
      technologies: ["NextJS", "TypeScript", "React", "SCSS", "HTML"],
      github: "https://github.com/psyofrelief/farieds-portfolio",
      liveLink: "https://farieds-portfolio.vercel.app/",
    },
    {
      title: "Enkrypto",
      description: "Cryptocurrency Tracker",
      image: "/images/enkrypto-preview.png",
      technologies: ["React", "JavaScript", "SCSS", "HTML"],
      github: "https://github.com/psyofrelief/enkrypto",
      liveLink: "https://psyofrelief.github.io/enkrypto/",
    },
  ];

  // Handles project technologies visibility on Enter keypress
  const handleToggleTechnologies = (
    index: number,
    e: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (e.key === "Enter") {
      toggleTechnologiesVisibility(index);
    }
  };

  useEffect(() => {
    document.title = "Projects";
  });

  return (
    <div id="page--projects">
      <h1 className="main-heading">{`projects()`}</h1>
      <AnimatedComment>{`// My favourite projects`}</AnimatedComment>
      <motion.div
        className="container--projects"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {projectsData.map((project, index) => (
          <InView key={index}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                animate={
                  inView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -200 : 200 }
                }
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="project"
              >
                <div className="container--project-info">
                  {/* Project name */}
                  <h3 className="project-name">{project.title}</h3>
                  {/* Project description */}
                  <h4 className="project-description">{project.description}</h4>
                  <div
                    className="container--technologies"
                    onClick={() => toggleTechnologiesVisibility(index)}
                    onKeyDown={(e) => handleToggleTechnologies(index, e)}
                  >
                    {/* Toggle button for technologies */}
                    <div className="toggle-technologies" tabIndex={0}>
                      Technologies used{" "}
                      {showTechnologies[index] ? <UpArrow /> : <DownArrow />}
                    </div>
                    {/* List of technologies */}
                    <ul
                      className={`${showTechnologies[index] ? "technologies" : "hide"}`}
                    >
                      {project.technologies.map((technology, idx) => (
                        <li key={idx} className="technology-node">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="container--project-links">
                    <a
                      className="project-link"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Preview"
                    >
                      Live Preview
                    </a>
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Source Code"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                {/* Project image */}
                <Image
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                  height={1080}
                  width={1920}
                  loading="eager"
                />
              </motion.div>
            )}
          </InView>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
