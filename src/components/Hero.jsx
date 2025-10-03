import portrait from '../assets/portrait.png'
import pcover from '../assets/pcover.jpg'
import { ButtonOutline, ButtonPrimary } from './Button'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false)

  // Trigger animations on mount
  useEffect(() => {
    setFadeIn(true)
  }, [])

  // Only most impressive, high-impact skills for Hero
  const skills = [
    "React", "Next.js", "Angular", "TypeScript", "Node.js",
    "Tailwind CSS", "Prisma", "CI/CD"
  ]

  // Responsive headline style
  const headlineStyle = {
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? 'translateY(0)' : 'translateY(10px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    fontSize: window.innerWidth < 640 ? '1.25rem' : window.innerWidth < 768 ? '1.75rem' : '2rem',
    lineHeight: window.innerWidth < 640 ? '1.3' : '1.5',
    maxWidth: window.innerWidth < 640 ? '22ch' : window.innerWidth < 1024 ? '40ch' : '55ch',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    fontWeight: 600
  }

  // Skill badge animation
  const skillStyle = (index) => ({
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? 'translateY(0)' : 'translateY(6px)',
    transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`
  })

  return (
    <section id='home' className='pt-28 lg:pt-36'>
      <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>

        {/* Left Column */}
        <div>
          {/* Availability */}
          <div className='flex items-center gap-3 mb-3'>
            <figure className='img-box w-9 h-9 rounded-lg'>
              <img src={pcover} alt="cover" width={40} className='img-cover' />
            </figure>
            <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                <span className='absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping'></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Headline */}
          <h1 style={headlineStyle}>
            I build <span className="text-emerald-400">scalable, high-performance web apps</span> that drive growth, creativity, and impact.
          </h1>

          {/* Micro tagline */}
          <p className="text-zinc-400 text-sm sm:text-base mb-4">
            Transforming complex ideas into <span className="text-emerald-400 font-semibold">clean, responsive, and maintainable digital solutions</span>.
          </p>

          {/* Skills */}
          <div className='flex flex-wrap gap-2 mb-4'>
            {skills.map((skill, i) => (
              <span
                key={i}
                style={skillStyle(i)}
                className='px-3 py-1 bg-zinc-700/50 text-zinc-100 text-xs sm:text-sm rounded-full font-medium hover:bg-emerald-400 hover:text-zinc-900 transition-colors duration-300'
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className='flex flex-wrap items-center gap-3'>
            <ButtonPrimary
              label="View CV"
              icon="fa-download"
              href="https://drive.google.com/file/d/1Rv0tkZOEh53Lc5hH6bIbb7BB-ON_t60t/view?usp=drive_link"
            />
            <ButtonOutline
              label="Scroll Down"
              icon="fa-arrow-down"
              href="#About"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:block">
          <figure
            className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-sky-400/25 to-sky-400/10 rounded-[3.8rem] overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out'
            style={{
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s'
            }}
          >
            <img src={portrait} alt="portrait" className='w-full h-auto' />
          </figure>
        </div>

      </div>
    </section>
  )
}

export default Hero
