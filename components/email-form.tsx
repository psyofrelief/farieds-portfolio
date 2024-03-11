"use client";
import { useRef, useState, ChangeEvent, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // States to track email sending status and loading state
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // State to track if email is copied to clipboard
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Handle form input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Ref for accessing the form element
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); 

    if (form.current) {
      try {
        // Send email using emailjs service
        await emailjs.sendForm(
          "service_l33qmtb",
          "template_jqkk17m",
          form.current,
          {
            publicKey: "CUhHfq13qImfTKJSN",
          }
        );
        setIsSent(true); // Set isSent state to true when email is sent successfully
        setTimeout(() => {
          setIsSent(false); // Remove the "success" class after 1.5 seconds
          setFormData({
            // Reset form data after success
            name: "",
            email: "",
            message: "",
          });
        }, 1500);
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setIsLoading(false); // Set loading state to false after email is sent or failed
      }
    }
  };

  // Copy email to clipboard function
  const copyEmail = () => {
    navigator.clipboard.writeText("6faried@gmail.com");
    setIsCopied(true); // 
  };

  // Effect to remove "Copied!" message after 1.5 seconds
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);

  return (
    <motion.form
      id="email-form"
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {/* Input field for name */}
      <div className="container--input">
        <label htmlFor="name">Name*</label>
        <input
          className="inp-name"
          name="name"
          type="text"
          value={formData.name}
          placeholder="John Appleseed"
          onChange={handleChange}
          required
        />
      </div>
      {/* Input field for email */}
      <div className="container--input">
        <label htmlFor="email">Email*</label>
        <input
          className="inp-email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="example@email.com"
          onChange={handleChange}
          required
        />
      </div>
      {/* Textarea for message */}
      <div className="container--textarea">
        <label htmlFor="message">
          Message* <span>(1000 CHARACTERS)</span>
        </label>
        <textarea
          id="inp-message"
          name="message"
          rows={20}
          maxLength={1000}
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {/* Alert for required fields */}
      <p className="alert">* DENOTES A REQUIRED FIELD</p>
      {/* Button to send email */}
      <button
        className={`btn-send-email ${isSent ? "success" : ""}`}
        type="submit"
      >
        {isLoading ? <span className="blob"></span> : isSent ? "Done" : "Send"}
      </button>
      {/* Button to copy email */}
      <button type="button" className="btn-copy-email" onClick={copyEmail}>
        {isCopied ? "Copied!" : "Copy email"}
      </button>
    </motion.form>
  );
};

export default EmailForm;
