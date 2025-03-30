import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import "../Contact.css";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("your.email@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="home-container">
      <div className="glass-card">
        <h1>Contact Me</h1>
        <p>Feel free to reach out through any of the following:</p>

        <div className="contact-methods">
          <div className="contact-item" onClick={handleCopy}>
            <FaEnvelope className="icon" />
            amaengo@protonmail.com
            <FaCopy className="copy-icon" />
            {copied && <span className="copied-msg">Copied!</span>}
          </div>

          <a
            href="https://www.linkedin.com/in/alyssa-ngo-525b89275"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin className="icon" />
            LinkedIn
          </a>

          <a
            href="https://github.com/thedevarchive"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub className="icon" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}