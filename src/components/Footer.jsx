import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-20 px-5 mt-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">

        {/* Call to Action */}
        <h1 className="text-4xl font-bold tracking-wide mb-4 text-white">Let's Connect</h1>
        <p className="text-lg text-zinc-400 max-w-xl mb-8">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>

        {/* Social Icons */}
        <div className="flex space-x-8 mb-12">
          <a
            href="https://github.com/aviinyou07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/aviinyou07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:aviinyou07@gmail.com"
            className="hover:text-emerald-400 transition duration-300"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left w-full max-w-4xl mb-16">
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
            <ul className="text-zinc-400 space-y-2">
              <li><a href="#About" className="hover:text-emerald-400">About Me</a></li>
              <li><a href="#Work" className="hover:text-emerald-400">Projects</a></li>
              <li><a href="#Skills" className="hover:text-emerald-400">Skills</a></li>
              <li><a href="#Contact" className="hover:text-emerald-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Tech Stack</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>MongoDB / Prisma</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>Email: aviinyou07@gmail.com</li>
              <li>Location: India</li>
              <li>Available for freelance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-zinc-800 w-full pt-8">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Techstacksmith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
