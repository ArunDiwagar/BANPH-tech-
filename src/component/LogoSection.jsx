import React from 'react';
import  logo1 from '../img/logo1.png'
import  logo2 from '../img/logo2.jpg'
import  logo3 from '../img/logo3.jpg'
import  logo4 from '../img/logo4.png'

const LogoSection = () => {
  return (
    <div className="logo">
      <img src={logo1} alt="Hitachi" />
      <img src={logo2} alt="Microsoft" />
      <img src={logo3} alt="VMware" />
      <img src={logo4} alt="Dell" />
    </div>
  );
}

export default LogoSection;
