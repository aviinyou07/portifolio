import React from 'react';
import PropTypes from 'prop-types';

const WorkCard = ({ imgSrc, title, tags, projectLink }) => {
  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto"
    >
      {/* Background Image */}
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 gap-2">
        <h3 className="text-lg sm:text-sm md:text-lg lg:text-xl font-semibold text-zinc-100">{title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs sm:text-[0.65rem] md:text-xs lg:text-sm">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-medium px-2 py-1 rounded-full bg-emerald-400/20 text-emerald-400 transition-transform duration-300 group-hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <span className="inline-block mt-2 text-sm sm:text-xs md:text-sm font-medium text-emerald-400 border border-emerald-400 rounded-full px-3 py-1 hover:bg-emerald-400 hover:text-zinc-900 hover:shadow-md hover:shadow-emerald-400/50 transition-all duration-300">
          View Project
        </span>
      </div>
    </a>
  );
};

WorkCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default WorkCard;
