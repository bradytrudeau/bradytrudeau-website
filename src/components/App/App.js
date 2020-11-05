import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';



class App extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;