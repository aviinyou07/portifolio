import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const socials = [
  { Icon: Github, alt: 'GitHub', href: 'https://github.com/aviinyou07' },
  { Icon: Linkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/aviinyou07' },
  { Icon: Instagram, alt: 'Instagram', href: 'https://www.instagram.com/a_anomalous/' },
];

const Contact = () => {
  return (
    <section className="section" id="Contact">
      <div className="container lg:flex lg:gap-12 lg:items-start">
        {/* Info & Socials */}
        <div className="mb-12 lg:mb-0 lg:flex-1 flex flex-col">
          <h2 className="headline-2 mb-4 lg:max-w-[14ch]">Contact Me</h2>
          <p className="text-zinc-400 mb-8 lg:max-w-[50ch] leading-relaxed">
            Whether you have a question, a project idea, or just want to connect — feel free to reach out.
            I'm always open to discussing new opportunities, collaborations, or simply talking tech.
            You can contact me via email or connect through any of my social profiles below.
          </p>
          <div className="flex gap-3 mt-auto">
            {socials.map(({ Icon, href, alt }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="w-12 h-12 grid place-items-center ring-2 ring-inset ring-zinc-50/10 rounded-lg transition-all hover:bg-emerald-500 hover:text-white shadow-md hover:shadow-lg"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          action="https://getform.io/f/awnwywjb"
          method="POST"
          className="flex-1 bg-zinc-800/50 p-8 rounded-2xl shadow-lg backdrop-blur-md"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="label mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="Techsmith"
                className="text-field bg-zinc-700/30 placeholder-zinc-400 text-zinc-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 transition"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="label mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Techsmith@email.com"
                className="text-field bg-zinc-700/30 placeholder-zinc-400 text-zinc-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 transition"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="label mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Hi! I'm interested in working together..."
              className="text-field bg-zinc-700/30 placeholder-zinc-400 text-zinc-100 rounded-lg px-4 py-3 resize-y min-h-[120px] max-h-[300px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 transition"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full py-3 rounded-xl text-white font-semibold bg-emerald-500 hover:bg-emerald-600 shadow-lg transition-all active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
