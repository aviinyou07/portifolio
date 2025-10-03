import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';
import { Code, Server, Database, Terminal, Monitor } from 'lucide-react';

// Custom GitHub icon as Lucide doesn't provide brand logos
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.25 3.438 9.69 8.205 11.29.6.111.82-.261.82-.577 0-.286-.01-1.043-.015-2.048-3.338.725-4.04-1.61-4.04-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.832 2.808 1.302 3.495.997.108-.776.418-1.302.761-1.599-2.665-.303-5.465-1.332-5.465-5.93 0-1.31.468-2.381 1.236-3.22-.124-.303-.536-.91.118-1.89 0 0 1.008-.323 3.3 1.23 1.04-.29 2.16-.433 3.27-.433 1.11 0 2.23.144 3.27.433 2.292-1.553 3.3-1.23 3.3-1.23.654.98.242 1.587.118 1.89.768.839 1.236 1.91 1.236 3.22 0 4.61-2.8 5.625-5.47 5.93.43.37.82 1.1.82 2.22 0 1.6-.015 2.88-.015 3.26 0 .318.22.692.83.577C20.563 21.69 24 17.25 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const skillItems = [
  { Icon: Code, label: 'React', desc: 'Frontend Framework' },
  { Icon: Code, label: 'Next.js', desc: 'SSR & Static Apps' },
  { Icon: Code, label: 'Angular', desc: 'Frontend Framework' },
  { Icon: Monitor, label: 'Tailwind CSS', desc: 'UI Framework' },
  { Icon: Monitor, label: 'Bootstrap', desc: 'UI Framework' },
  { Icon: Code, label: 'TypeScript', desc: 'Typed JavaScript' },
  { Icon: Server, label: 'Node.js', desc: 'Backend Runtime' },
  { Icon: Server, label: 'Express.js', desc: 'Node Framework' },
  { Icon: Database, label: 'MongoDB', desc: 'NoSQL Database' },
  { Icon: Database, label: 'PostgreSQL', desc: 'SQL Database' },
  { Icon: Database, label: 'Prisma', desc: 'ORM' },
  { Icon: GitHubIcon, label: 'GitHub', desc: 'Version Control' },
  { Icon: Terminal, label: 'CI/CD', desc: 'Automation Pipelines' },
  { Icon: Server, label: 'Bun', desc: 'JS Runtime & Package Manager' },
  { Icon: Code, label: 'Python', desc: 'Programming Language' },
  { Icon: Code, label: 'Java', desc: 'Programming Language' },
];

const Skills = () => {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.85;
      const cards = document.querySelectorAll('.skill-card');
      cards.forEach((card, idx) => {
        const top = card.getBoundingClientRect().top;
        if (top < triggerPoint && !visible.includes(idx)) {
          setVisible(prev => [...prev, idx]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  return (
    <section className="section" id="Skills">
      <div className="container">
        <h2 className="headline-2 mb-3">Top Skills & Tools</h2>
        <p className="text-zinc-400 mb-8 max-w-[60ch]">
          Modern technologies I rely on to craft scalable, maintainable, and high-performance web applications:
        </p>

        <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {skillItems.map(({ Icon, label, desc }, idx) => {
            const isVisible = visible.includes(idx);
            const animationStyle = {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${idx * 0.1}s, transform 0.6s ease ${idx * 0.1}s`
            };
            return (
              <div key={idx} style={animationStyle} className="skill-card">
                <SkillCard
                  Icon={Icon}
                  label={label}
                  desc={desc}
                  classes="hover:scale-[1.05] hover:shadow-xl transition-transform duration-300 ease-in-out"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
