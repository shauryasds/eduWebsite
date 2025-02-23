import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import WelcomeSection from './components/WelcomeSection';
import FeaturesGrid from './components/FeaturesGrid';
import ProgramGlimpses from './components/ProgramGlimpses';
import ClassSelection from './components/ClassSelection';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';
import Poster from './components/Poster';

function App() {
  return (
    
    <div className="min-h-screen bg-white">
      
      <Navbar />
      <Banner />
      <Benefits />
      <Poster />
      <WelcomeSection/>
      <FeaturesGrid/>
      <ProgramGlimpses/>
      <ClassSelection/>
      <DemoForm/>
      <Footer/>
    </div>
  );
}

export default App;