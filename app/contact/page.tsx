"use client";
import { NextPage } from "next";
import { useEffect } from "react";
import EmailForm from "@/components/email-form";
import AnimatedComment from "@/components/animated-comment";

const Contact: NextPage = () => {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <div id="page--contact">
      <h1 className="main-heading">
        contact(<span>me</span>)
      </h1>
      <AnimatedComment>
        {`// Send me and email & I'll respond soon!`}
      </AnimatedComment>
      <EmailForm />
    </div>
  );
};

export default Contact;
