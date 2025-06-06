import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-20 px-5 mt-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-wide mb-4 text-white">Let's Connect</h1>
        <p className="text-lg text-gray-400 max-w-xl mb-8">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>

        {/* Social Icons */}
        <div className="flex space-x-8 mb-12">
          <a
            href="https://github.com/aviinyou07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/aviinyou07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:aviinyou07@gmail.com"
            className="hover:text-white transition duration-300"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left w-full max-w-4xl mb-16">
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#About" className="hover:text-white">About Me</a></li>
              <li><a href="#Work" className="hover:text-white">Projects</a></li>
              <li><a href="#Skills" className="hover:text-white">Skills</a></li>
              <li><a href="#Contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Tech Stack</h2>
            <ul className="text-gray-400 space-y-2">
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>MongoDB / Firebase</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <ul className="text-gray-400 space-y-2">
              <li>Email: aviinyou07@gmail.com</li>
              <li>Location: India</li>
              <li>Available for freelance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-gray-800 w-full pt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Techstacksmith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
