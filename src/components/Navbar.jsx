import React from 'react';
import{ useDarkMode } from '../hook/useDarkMode'

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode(false);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
