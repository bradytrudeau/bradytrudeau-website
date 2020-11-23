import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import AboutMobile from '../AboutMobile/AboutMobile';
import ProjectsMobile from '../ProjectsMobile/ProjectsMobile';
import ContactMobile from '../ContactMobile/ContactMobile';
import NavMobile from '../NavMobile/NavMobile';


class App extends Component {
  state = {
    isMobile: false
}

componentDidMount() {
  if (window.innerWidth < 1250 && this.state.isMobile === false) {
    this.setState({isMobile: true})
  }
    window.addEventListener('resize', () => {
        this.setState({
            isMobile: window.innerWidth < 1250
        });
    }, false);
}

  render() {
    return (
      <div>
        {this.state.isMobile ? 
          <div>
            <Hero/>
            <AboutMobile/>
            <ProjectsMobile/>
            <ContactMobile/>
            <Footer/>
          </div>
          :
          <div>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
          </div>
        }
      </div>
    );
  }
}

export default App;