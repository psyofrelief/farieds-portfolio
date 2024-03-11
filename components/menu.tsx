import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useMyContext } from "@/context/index";
import SocialIcons from "./social-icons";

interface MenuTabProps {
  href: string;
  label: string;
}

const Menu = () => {
  const { toggleMenuVisibility, menuVisibility, activeTab, setActiveTab } =
    useMyContext();

  // Initialize reference to menu div
  const menuRef = useRef<HTMLDivElement>(null);

  // Define menu items
  const tabs: MenuTabProps[] = [
    { href: "/about", label: ".about()" },
    { href: "/projects", label: ".projects()" },
    { href: "/contact", label: ".contact()" },
  ];

  // Effect to focus on menu when it's opened
  useEffect(() => {
    if (menuVisibility && menuRef.current) {
      menuRef.current.focus();
    }
  }, [menuVisibility]);

  useEffect(() => {
    // Set the initial active tab when the component mounts
    setActiveTab(window.location.pathname);
  }, [setActiveTab]);

  // Function to handle keydown events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      toggleMenuVisibility();
    }
  };

  const handleTabClick = (href: string) => {
    setActiveTab(href);
  };

  // Render menu component only when menuVisibility is true
  return menuVisibility ? (
    <div
      id="menu-container"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={menuRef}
    >
      {/* Menu header */}
      <div className="menu-header">
        {/* Logo */}
        <Link
          aria-label="Home page"
          rel="noreferrer"
          href="/"
          className="header-logo"
          onClick={toggleMenuVisibility}
        >
          Faried.Idris
        </Link>

        {/* Close button */}
        <motion.button
          className="btn-close"
          onClick={toggleMenuVisibility}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          aria-label="Close menu"
        >
          .close()
        </motion.button>
      </div>
      {/* Menu component */}
      <motion.div
        id="menu--component"
        initial={{ x: 300, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 },
        }}
      >
        {/* Menu tabs */}
        <div className="container--menu-tabs">
          {tabs.map((tab, index) => (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="container--menu-tab-link"
              key={index}
            >
              <Link
                className={`menu-tab-link ${activeTab === tab.href ? "active" : ""}`}
                onClick={() => {
                  handleTabClick(tab.href);
                  toggleMenuVisibility();
                }}
                href={tab.href}
                aria-label={`Menu tab ${index}`}
                rel="noreferrer"
                passHref
              >
                {tab.label}
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Social icons */}
        <SocialIcons />
      </motion.div>
    </div>
  ) : null;
};

export default Menu;
