import React from 'react';
import i1 from '../img/i1.png'
import { FaArrowRight } from "react-icons/fa";


const Header = () => {
  return (
    <section className="header">
      <h1>Empower Youth. <br /> Build Strength. <br /> Change life.</h1>
      <p>Empowering diverse youth for high-paying tech careers, fostering inclusion, and driving <br /> workforce diversity for an equitable future.</p>
      <div className="btn">
        <button>Success Starts Here</button>
        <div className="icon">
          <FaArrowRight />
        </div>
      </div>
      <br />
      <img src={i1} alt="students Img" />
    </section>
  );
}

export default Header;
