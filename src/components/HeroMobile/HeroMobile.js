import React, { Component } from 'react';
import './HeroMobile.css';
import NavMobile from '../NavMobile/NavMobile';



class HeroMobile extends Component {

  render() {
    return (
      <div id="heroMobile">
        <NavMobile/>
        <h1 className="h1Mobile">BRADY TRUDEAU</h1>
        <h2 className="heroH2Mobile">Software Developer</h2>
      </div>
    );
  }
}

export default HeroMobile;