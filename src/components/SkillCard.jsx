import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({ Icon, label, desc, classes }) => {
  return (
    <div
      className={
        'flex items-center gap-3 rounded-2xl p-4 bg-zinc-800/40 backdrop-blur-md ring-2 ring-inset ring-zinc-50/10 shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl ' +
        classes
      }
    >
      <div className="bg-zinc-700/50 rounded-lg w-14 h-14 p-3 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
        <Icon className="w-7 h-7 text-emerald-400 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="text-white font-semibold">{label}</h3>
        <p className="text-zinc-300 text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
