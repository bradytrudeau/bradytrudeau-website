import React, { Component } from 'react';
import './Hero.css';
import linkedin from '../../Images/linkedin.png';
import github from '../../Images/github.png';
import Nav from '../Nav/Nav';
import NavMobile from '../NavMobile/NavMobile';



class Hero extends Component {

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
      <div id="hero">
        {this.state.isMobile ? <NavMobile/> : <Nav/>}
        <h1>BRADY TRUDEAU</h1>
        <h2 className="heroH2">Software Developer</h2>
        {/* <a href="https://github.com/bradytrudeau/" target="_blank">
          <img className="logos" src={github} width="75px"/>
        </a>
        <a href="https://www.linkedin.com/in/brady-trudeau-b3941b5b/" target="_blank">
          <img className="logos" src={linkedin} width="75px"/>
        </a> */}
      </div>
    );
  }
}

export default Hero;