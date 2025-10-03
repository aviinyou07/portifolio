import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen, setNavOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const navRef = useRef();
  const [boxStyle, setBoxStyle] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const updateActiveBox = (target) => {
    if (!target) return;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target;

    // Update box state to trigger smooth transition
    setBoxStyle({ top: offsetTop, left: offsetLeft, width: offsetWidth, height: offsetHeight });
  };

  useEffect(() => {
    // Initialize box position
    updateActiveBox(lastActiveLink.current);

    const handleResize = () => updateActiveBox(lastActiveLink.current);
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setNavOpen(false);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setNavOpen]);

  const handleLinkClick = (e) => {
    lastActiveLink.current?.classList.remove('active');
    e.target.classList.add('active');
    lastActiveLink.current = e.target;

    updateActiveBox(e.target);
    setNavOpen(false);
  };

  const navItems = [
    { label: 'Home', link: '/', className: 'nav-link active' },
    { label: 'About', link: '#About', className: 'nav-link' },
    { label: 'Skills', link: '#Skills', className: 'nav-link' },
    { label: 'Work', link: '#Work', className: 'nav-link' },
    { label: 'Contact', link: '#Contact', className: 'nav-link md:hidden' },
  ];

  return (
    <nav ref={navRef} className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }, index) => (
        <a
          key={index}
          href={link}
          ref={index === 0 ? lastActiveLink : null}
          className={className}
          onClick={handleLinkClick}
        >
          {label}
        </a>
      ))}

      <div
        ref={activeBox}
        className="active-Box"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${boxStyle.width}px`,
          height: `${boxStyle.height}px`,
          transform: `translate(${boxStyle.left}px, ${boxStyle.top}px)`,
          transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease',
          pointerEvents: 'none', // ensures box doesn't block clicks
        }}
      />
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
};

export default Navbar;
