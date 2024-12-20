import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import LogoSection from './component/LogoSection';
import VisionMissionSection from './component/VissionMission';
import './index.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LogoSection />
      <VisionMissionSection />
    </div>
  );
}

export default App;
