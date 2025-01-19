import React from 'react';
import Nav from './components/Nav.jsx';
import Slider from './components/Slider.jsx';
import Gallery from './components/Gallery.jsx';
import Coordinators from './components/Coordinators.jsx';
import Banner from './components/Banner.jsx'
import Events from './components/Events.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import Scoreboard from './components/Scoreboard.jsx';
import Teams from './components/Teams.jsx';


import './App.css';
function App() {
  return (
    <>
      <Banner />

      <Nav />

      <div className="content">
        <section id="slider">
          <Slider />
        </section>

        <section id="teams">
          <Teams />
        </section>

        

        

   


       

        <section id="events">
          <Events />
        </section>

        <section id="scoreboard">
          <Scoreboard />
        </section>

        <section id="gallery">
          <Gallery />
        </section>
       
        <section id="coordinators">
          <Coordinators />
        </section>
        
        <Footer />


        
      </div>
    </>
  );
}

export default App;


