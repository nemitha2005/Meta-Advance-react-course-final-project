import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import { AlertProvider } from "./components/context/alertContext";

const App = () => {
  return (
    <div>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <AlertProvider>
        <ContactMeSection />
      </AlertProvider>
    </div>
  );
};

export default App;
