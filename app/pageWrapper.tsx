"use client";
import { ReactNode, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import { useMyContext } from "@/context/index";

type pageWrapperProps = {
  children: ReactNode;
};
export default function PageWrapper({ children }: pageWrapperProps) {
  const { menuVisibility, setActiveTab } = useMyContext();

  useEffect(() => {
    // Set the initial active tab when the component mounts
    setActiveTab(window.location.pathname);
  }, []);

  return (
    <div className="page-wrapper">
      {menuVisibility && <Menu />}
      <Navbar />
      <div className="background-svg"></div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
