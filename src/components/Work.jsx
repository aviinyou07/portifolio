import React from 'react'
import WorkCard from './WorkCard'

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/'
  },]

const Work = () => {
  return (
   <>
    <section className="section" id='Work'>
        <div className="container">
            <h2 className="headline-2 mb-8">
                Work Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({imgSrc, title, tags, projectLink}, key)=>
            (<WorkCard 
                key={key}
                imgScr={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
            />)
            )}
        </div>
        </div>
        
    </section>
   </>
  )
}

export default Work