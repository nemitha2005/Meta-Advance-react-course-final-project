import React from 'react'
import './App.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';

const App = () => {
  return (
    <div>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
    </div>
  )
}

export default App
