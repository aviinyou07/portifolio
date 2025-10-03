import logo from '../assets/techstacksmith.png'
import { useEffect, useState } from 'react'

const aboutItems = [
  { label: 'Projects Completed', number: 12 },
  { label: 'Years of Experience', number: 2 }
];

const keywords = [
  "Full-Stack Web Developer & Freelancer",
  "React", "Next.js", "Angular", "TypeScript", "Node.js",
  "Express", "MongoDB", "PostgreSQL", "MySQL",
  "Tailwind CSS", "Bootstrap", "Prisma",
  "responsive, scalable, and maintainable web applications",
  "high-impact digital solutions"
]

const About = () => {
  const [counts, setCounts] = useState(aboutItems.map(() => 0))
  const [fadeIn, setFadeIn] = useState(false)
  const [visibleKeywords, setVisibleKeywords] = useState([])

  // Animate stats count-up
  useEffect(() => {
    setFadeIn(true)
    const intervals = aboutItems.map((item, idx) => {
      const increment = Math.ceil(item.number / 50) || 1
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev]
          if (newCounts[idx] < item.number) newCounts[idx] += increment
          if (newCounts[idx] > item.number) newCounts[idx] = item.number
          return newCounts
        })
      }, 30)
    })
    return () => intervals.forEach(clearInterval)
  }, [])

  // Animate keywords on scroll
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.8
      const aboutSection = document.getElementById('About')
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top
        if (top < triggerPoint) setVisibleKeywords(keywords)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // trigger on load
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInStyle = (delay = 0) => ({
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? 'translateY(0)' : 'translateY(10px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
  })

  const highlightStyle = (keyword) => visibleKeywords.includes(keyword) 
    ? 'text-emerald-500 font-semibold transition-colors'
    : 'text-zinc-300 font-normal transition-colors'

  return (
    <section className="section" id='About'>
      <div className="container">
        <div className="bg-zinc-800/50 p-6 md:p-12 rounded-2xl">

          {/* Intro Paragraph */}
          <p className="text-zinc-300 leading-relaxed md:leading-loose mb-6 md:text-lg text-sm">
            Hi! I&apos;m a <span className={highlightStyle("Full-Stack Web Developer & Freelancer")}>Full-Stack Web Developer & Freelancer</span>.  
            I specialize in <span className={highlightStyle("React")}>React</span>, <span className={highlightStyle("Next.js")}>Next.js</span>, <span className={highlightStyle("Angular")}>Angular</span>, <span className={highlightStyle("TypeScript")}>TypeScript</span>, <span className={highlightStyle("Node.js")}>Node.js</span>, <span className={highlightStyle("Express")}>Express</span>, <span className={highlightStyle("MongoDB")}>MongoDB</span>, <span className={highlightStyle("PostgreSQL")}>PostgreSQL</span>, <span className={highlightStyle("MySQL")}>MySQL</span>, <span className={highlightStyle("Tailwind CSS")}>Tailwind CSS</span>, <span className={highlightStyle("Bootstrap")}>Bootstrap</span>, and <span className={highlightStyle("Prisma")}>Prisma</span>.  
            I build <span className={highlightStyle("responsive, scalable, and maintainable web applications")}>responsive, scalable, and maintainable web applications</span> that combine creativity, performance, and strategy.  
            Passionate about continuous learning and delivering <span className={highlightStyle("high-impact digital solutions")}>high-impact digital solutions</span>.
          </p>

          {/* About Items */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {aboutItems.map(({ label }, idx) => (
              <div key={idx} style={fadeInStyle(idx * 0.2)}>
                <div className="flex items-center mb-2">
                  <span className="text-2xl md:text-4xl font-bold text-zinc-100">{counts[idx]}</span>
                  <span className="text-emerald-500 text-xl md:text-2xl font-bold">+</span>
                </div>
                <p className="text-zinc-400 text-sm md:text-base">{label}</p>
              </div>
            ))}

            {/* Logo */}
            <img 
              src={logo} 
              alt="logo" 
              className="ml-auto w-16 md:w-24"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
