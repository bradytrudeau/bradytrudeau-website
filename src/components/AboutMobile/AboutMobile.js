import React, { Component } from 'react';
import './AboutMobile.css';
import family from '../../Images/2.png';
import linkedin from '../../Images/linkedin.png';
import github from '../../Images/github.png';
import fb from '../../Images/fb.png';
import ig from '../../Images/ig.png';

class AboutMobile extends Component {
  render() {
    return (
          <div id="about" className="aboutMobile">
              <div class="aboutCardsMobile">
                  <div className="aboutMobile">
                  <h2 className="aboutH2Mobile">ABOUT</h2>
                      <p className="aboutTextMobile">
                      My name is Brady! 
                      As a musician and marketing professional turned software developer, 
                      I'm a creative individual with a passion for technology.</p>
                      <p className="aboutTextMobile">
                      I have extensive experience with Node.js, jQuery, React/Redux,
                      Express, Python, Flask, PostgreSQL, HTML, CSS, and Material UI. </p>
                      <p className="aboutTextMobile">
                      When I'm not geeking out on the newest effects pedals or building apps, 
                      you can find me playing with one of my bands, making food with my wife, 
                      or cheering on one of the many (usually disappointing) Minnesota sports teams.</p>
                      <div className="logoBlockMobile">
                      <a href="https://github.com/bradytrudeau/" target="_blank">
                        <img className="logos" src={github} width="60px"/>
                      </a>
                      <a href="https://www.linkedin.com/in/brady-trudeau-b3941b5b/" target="_blank">
                        <img className="logos" src={linkedin} width="60px"/>
                      </a>
                      <a href="https://www.facebook.com/brady.r.trudeau/" target="_blank">
                        <img className="logos" src={fb} width="60px"/>
                      </a>
                      <a href="https://www.instagram.com/bradytrudeau/" target="_blank">
                        <img className="logos" src={ig} width="60px"/>
                      </a>
                      </div>
                  </div>
                  <div className="aboutMobile">
                      <img src={family} className="smallFamilyPhotoMobile"></img>
                      {/* <p className="aboutP">
                      <b>Brady Trudeau</b>
                      <br></br>
                      Software Developer</p> */}
                  </div>
              </div>
          </div>
    );
  }
}

export default AboutMobile;