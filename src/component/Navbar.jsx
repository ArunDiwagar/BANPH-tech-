import React from 'react';
import menu from '../img/menu.png' 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>BANPH Tech Academy</h2>
      <button>
        <img src={menu} alt="Menu" />
      </button>
    </nav>
  );
}

export default Navbar;
