import React from 'react'
import SkillCard from './SkillCard'

const skillItem = [
  {
    imgSrc: 'https://www.kindpng.com/picc/m/81-814934_figma-logo-png-transparent-png.png',
    label: 'Figma',
    desc: 'Design tool'
  },

   {
    imgSrc: 'https://seeklogo.com/images/C/css-logo-FD0B685547-seeklogo.com.png',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: 'https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: 'https://logodix.com/logo/1764972.png',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: 'https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: 'https://dbdb.io/media/logos/MongoDB_Logo_FullColor_RGB.png',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: 'https://th.bing.com/th/id/OIP.ShYBuJ8XSwnQ9GhVvjeFhwHaE8?rs=1&pid=ImgDetMain',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: 'https://th.bing.com/th/id/OIP.SeaVJSUCJE1GS3u3Gt3t4QHaEK?rs=1&pid=ImgDetMain',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc:'https://th.bing.com/th/id/R.adbac78231c9a2ff5c21aaa32dd4e1e4?rik=jWTUkOKwKIk7jg&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2017%2f05%2fphp_emblem.png&ehk=gbX0plW%2fbqAeSR4cWmkL44R%2bUWxCpG3CL%2b2V4KHQlpQ%3d&risl=&pid=ImgRaw&r=0',
    label: 'php',
    desc: 'Backend'
  },
   {
    imgSrc: 'https://th.bing.com/th/id/OIP.umXj7kc766dOPpjavaBmLQHaEo?rs=1&pid=ImgDetMain',
    label: 'Java',
    desc: 'Programming'
  },

]

const Skills = () => {
  return (
    <>
      <section className="section" id='Skills'>
        <div className="container">
          <h2 className='headline-2'>
            Tools I use
          </h2>
          <p className=' text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
            Here are some of the essential tools and technologies I rely on to bring ideas to life:
          </p>
          <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
            {
              skillItem.map(({ imgSrc,label,desc}, key) =>(
                <SkillCard
                key={key}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                />
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills