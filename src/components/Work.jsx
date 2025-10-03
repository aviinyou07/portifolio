import React from 'react';
import WorkCard from './WorkCard';

const works = [
 {
    imgSrc: '/asia.png',
    title: 'Asiauniverseofficial',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://asiauniverseofficial.com/',
  },
  {
    imgSrc: '/lectrahub.png',
    title: 'Lectrahub',
    tags: ['Nextjs', 'Expressjs', 'MongoDB'],
    projectLink: 'https://lectrahub.com/',
  },
  {
    imgSrc: '/geetcare.png',
    title: 'Geet Care',
    tags: ['Next.js', 'Tailwind CSS'],
    projectLink: 'https://geetcare.com/blogs',
  },
];

const Work = () => {
  return (
    <section className="section" id="Work">
      <div className="container">
        <h2 className="headline-2 mb-8">Work Highlights</h2>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <WorkCard
              key={key}
              imgSrc={imgSrc} // Fixed prop name
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
