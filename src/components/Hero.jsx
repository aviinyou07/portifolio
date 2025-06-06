import portrait from '../assets/portrait.png'
import pcover from '../assets/pcover.jpg'
import { ButtonOutline, ButtonPrimary } from './Button'


const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
        <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>
            <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg '>
                        <img src={pcover} alt="cover"
                        width={40}
                        className='img-cover'
                         />
                    </figure>
                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping'></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className='headline-1 w-full sm:max-w-[25ch] lg:max-w-[60ch] mt-5 mb-8 lg:mb-10 '>"Focused on growth & collaboration, thrive in dynamic environments where creativity meets the strategy."</h2>
                <div className=' flex items-center gap-3'>
                    <ButtonPrimary label="View CV "
                    icon="fa-download"
                    href="https://drive.google.com/file/d/1Rv0tkZOEh53Lc5hH6bIbb7BB-ON_t60t/view?usp=drive_link"
                    />
                    <ButtonOutline 
                    label='Scroll Down'
                    icon="fa-arrow-down"
                    href="#About"/>
                </div>
            </div>
            <div className="hidden lg:block">
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[3.8rem] overflow-hidden'>
                    <img src={portrait} alt="portrait" height={800} width={656} className='w-full' />
                </figure>
            </div>

        </div>

    </section>
  )
}

export default Hero