"use client";
import Link from "next/link";
import { useEffect } from "react";
import SocialIcons from "@/components/social-icons";
import Logo from "@/components/logo";
import { useMyContext } from "@/context/index";

interface NavbarTabProps {
  href: string;
  label: string;
}

const Navbar = () => {
  const { toggleMenuVisibility, menuVisibility, activeTab, setActiveTab } =
    useMyContext();

  useEffect(() => {
    if (menuVisibility) {
      document.body.classList.add("menuopen");
    } else {
      document.body.classList.remove("menuopen");
    }
  }, [menuVisibility]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Set the initial active tab when the component mounts
    setActiveTab(window.location.pathname);
  }, [setActiveTab]);

  // Define navigation tabs
  const tabs: NavbarTabProps[] = [
    { href: "/about", label: ".about()" },
    { href: "/projects", label: ".projects()" },
    { href: "/contact", label: ".contact()" },
  ];

  // Function to handle toggling menu with Enter key
  const handleToggleMenu = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (e.key === "Enter") {
      toggleMenuVisibility();
    }
  };

  // Function to handle tab click
  const handleTabClick = (href: string) => {
    setActiveTab(href);
  };

  return (
    <nav id="navbar--component">
      {!menuVisibility && (
        <>
          <Logo />
          <div className="container--tabs">
            {tabs.map((tab, index) => (
              <Link
                className={`navbar-tab ${activeTab === tab.href ? "active" : ""}`}
                onClick={() => handleTabClick(tab.href)}
                href={tab.href}
                aria-label={`Navbar tab ${index}`}
                rel="noreferrer"
                key={index}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <SocialIcons />
          <p
            className="btn-menu"
            onClick={toggleMenuVisibility}
            tabIndex={0}
            onKeyDown={handleToggleMenu}
          >
            .find()
          </p>
        </>
      )}
    </nav>
  );
};

export default Navbar;
