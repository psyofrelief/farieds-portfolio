"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface MyContextType {
  showTechnologies: boolean[]; // State for managing technologies visibility
  toggleTechnologiesVisibility: (index: number) => void; // Function to toggle visibility of technologies
  toggleMenuVisibility: () => void; // Function to toggle menu visibility
  menuVisibility: boolean; // State for managing menu visibility
  activeTab: string; // State for managing active tab
  setActiveTab: (tab: string) => void; // Function to set active tab
}

const MyContext = createContext<MyContextType | undefined>(undefined);

// Custom hook to access MyContext
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

// Define MyProvider component to provide context value to children
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false);
  const [showTechnologies, setShowTechnologies] = useState<boolean[]>(
    Array(4).fill(false),
  );

  // Function to toggle visibility of technologies
  const toggleTechnologiesVisibility = (index: number) => {
    const newShowTechnologies = [...showTechnologies];
    newShowTechnologies[index] = !newShowTechnologies[index];
    setShowTechnologies(newShowTechnologies);
  };

  // Function to toggle menu visibility
  const toggleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility);
  };

  return (
    <MyContext.Provider
      value={{
        showTechnologies,
        toggleTechnologiesVisibility,
        toggleMenuVisibility,
        menuVisibility,
        activeTab,
        setActiveTab,
      }}
    >
      {children} {/* Render children wrapped with context */}
    </MyContext.Provider>
  );
};

export { MyContext };
