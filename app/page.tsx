"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  // State to store ASCII content
  const [asciiContent, setAsciiContent] = useState("");

  // Effect to hide navbar and footer on component mount
  useEffect(() => {
    const navbar = document.querySelector("#navbar--component");
    navbar?.classList.add("hide");

    const footer = document.querySelector("#footer--component");
    footer?.classList.add("hide");

    // Cleanup function to show navbar and footer on unmount
    return () => {
      navbar?.classList.remove("hide");
      footer?.classList.remove("hide");
    };
  }, []);

  useEffect(() => {
    const background = document.querySelector(".background-svg");
    background?.classList.add("hide");
    return () => {
      background?.classList.remove("hide");
    };
  }, []);

  // Effect to fetch ASCII content on component mount
  useEffect(() => {
    const fetchAsciiContent = async () => {
      try {
        const response = await fetch("/images/ascii.html");
        const htmlContent = await response.text();
        setAsciiContent(htmlContent);
      } catch (error) {
        console.error("Error fetching ASCII content:", error);
      }
    };

    fetchAsciiContent();
  }, []);

  useEffect(() => {
    document.title = "Faried Idris";
  });

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Render ASCII content if available */}
      <div
        className="ascii"
        dangerouslySetInnerHTML={{ __html: asciiContent }}
      />
      {/* Render additional content if ASCII content is available */}
      {asciiContent && (
        <>
          <div className="glitch-wrapper">
            <div className="glitch" data-glitch="FARIED IDRIS">
              FARIED
              <br />
              IDRIS
            </div>
          </div>
          <motion.p
            className="home-subheading"
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            Creative Full Stack Developer
          </motion.p>
          <Link tabIndex={0} className="find-out-more" href="/about">
            Find Out More
          </Link>
        </>
      )}
    </motion.div>
  );
};

export default Home;
