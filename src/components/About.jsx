import logo from '../assets/techstacksmith.png'

const aboutItems = [
    {
      label: 'Project done',
      number: 12
    },
    {
      label: 'Years of experience',
      number: 2
    }
  ];



const About = () => {
  return (
    <section className="section" id='About'>
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                "Welcome! I&apos;m a passionate and driven web developer with a knack of Full Stack technologies. I love creating responsive, user-friendly websites and applications that provide a seamless experience. With a keen eye for detail and a commitment to continuous learning, I enjoy turning ideas into functional designs."
                    
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className='text-2xl font-bold md:text-4xl'>{number}</span>
                                        <span className="text-sky-400 font-bold md:text-3xl">+</span>
                                </div>
                                <p className='text-sm text-zinc-400'>{label}</p>
                            </div>
                        ))
                    }
                    <img src={logo} alt="logo" className="ml-auto md:w-[100px] " width={70} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About