import React, { useEffect } from 'react';
import './Styles/App.css';
import Header from './components/Header.js';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import About from './components/About';
import ReactGA from 'react-ga'

const TRACKING_ID = "UA-238865861-1"
ReactGA.initialize(TRACKING_ID)



function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })
  return (
    <div className="App">
      <div id='top'></div>
      <Header />
      <Landing />
      <Projects />
      <Skills />
      <About />
      <ContactMe />
    </div>
  );
}

export default App;
