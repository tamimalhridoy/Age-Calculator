import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mb-10 w-full text-center text-gray-600 dark:text-gray-300">
      {/* Horizontal line */}
      <hr className="border-gray-300 dark:border-gray-600 py-6 w-full" />

      {/* Copyright */}
      <p className="text-sm sm:text-base">
        © 2025 Age Calculator | Made with ❤️ by Tamim Al Hridoy
      </p>
      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-2">
        <a
          href="https://github.com/tamimalhridoy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition transform hover:scale-110"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/tamimalhridoy/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition transform hover:scale-110"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://x.com/tamimalhridoy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
