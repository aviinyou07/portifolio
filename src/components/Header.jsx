import { useRef, useState } from 'react'
import logo from '../assets/techstacksmith.png'
import Navbar from './Navbar'

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const activeBox = useRef();
    
  return (
    <>
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
    <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
        <h1>
            <a href="/" className='logo'>
                <img src={logo} alt="Tech'StackSmith" width={150} />
            </a>
        </h1>

        <div className='relative md:justify-self-center'>
            <button className='menu-btn md:hidden' 
            onClick={() => setNavOpen((prev)=> !prev)}>
                <span className='text-xs'>
                <i className={`fa-solid ${navOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </span>
               
            </button>
            <Navbar navOpen={navOpen} />
        </div>
        <a href="#Contact" className='btn btn-secondary max-md:hidden md:justify-self-end'>Contact Me</a>

    </div>

    </header>
    </>
  )
}

export default Header