import React from 'react';
import Nav from './components/Nav.jsx';
import Slider from './components/Slider.jsx';
import Gallery from './components/Gallery.jsx';
import Coordinators from './components/Coordinators.jsx';
import './App.css';
import Scoreboard from './components/Scoreboard.jsx';

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

       
        <section id="scoreboard">
          <Scoreboard />
        </section>
        

        
      </div>
    </>
  );
}

export default App;


