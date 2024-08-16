import React from 'react'
import './App.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';

const App = () => {
  return (
    <div>
      <Header />
      <LandingSection />
      <ProjectsSection />
    </div>
  )
}

export default App
