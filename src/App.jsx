import React from 'react';
import Nav from './components/Nav.jsx';
import Slider from './components/Slider.jsx';
import Gallery from './components/Gallery.jsx';
import Coordinators from './components/Coordinators.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import Scoreboard from './components/Scoreboard.jsx';
import Teams from './components/Teams.jsx';

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <section id="slider">
          <Slider />
        </section>

        <section id="coordinators">
          <Coordinators />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <Teams />

       
        <section id="scoreboard">
          <Scoreboard />
        </section>
        
        <Footer />

        
      </div>
    </>
  );
}

export default App;


